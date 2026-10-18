import { Resend } from "resend";
import { profile } from "../../data/profile";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
// Best-effort limiter: state is per server instance, which is enough to blunt
// a casual script without adding a database.
const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) {
    return Response.json(
      { error: "Too many messages from this connection. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "The request was not valid. Please reload and try again." }, { status: 400 });
  }

  // Honeypot: pretend success so bots learn nothing.
  if (text(body.company, 200)) return Response.json({ ok: true });

  const name = text(body.name, 100);
  const email = text(body.email, 200);
  const message = text(body.message, 4000);

  if (!name) return Response.json({ error: "Enter your name." }, { status: 400 });
  if (!emailPattern.test(email)) {
    return Response.json({ error: "Enter a valid email address so I can reply." }, { status: 400 });
  }
  if (message.length < 10) {
    return Response.json({ error: "Write at least a sentence so I know how to help." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; contact form cannot send.");
    return Response.json(
      { error: `Messaging is unavailable right now. Email me at ${profile.email} instead.` },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
    to: process.env.CONTACT_TO ?? profile.email,
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    html: `<p><strong>${escapeHtml(name)}</strong> (${escapeHtml(email)})</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json(
      { error: `The message did not send. Email me at ${profile.email} instead.` },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
