"use client";

import { useState, type FormEvent } from "react";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string };

const field =
  "mt-2 block w-full rounded-md border border-line bg-page px-3.5 py-2.5 text-small text-ink placeholder:text-ink-soft focus:border-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ state: "sending" });

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setStatus({
          state: "error",
          message: result.error ?? "The message did not send. Try again, or email me directly.",
        });
        return;
      }

      form.reset();
      setStatus({ state: "sent" });
    } catch {
      setStatus({
        state: "error",
        message: "Could not reach the server. Check your connection, or email me directly.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-small font-medium text-ink">
          Name
          <input name="name" type="text" required maxLength={100} autoComplete="name" className={field} />
        </label>
        <label className="block text-small font-medium text-ink">
          Email
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </label>
      </div>

      <label className="block text-small font-medium text-ink">
        Message
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={6}
          placeholder="What are you building, and where could I help?"
          className={field}
        />
      </label>

      {/* Honeypot: real visitors never see or fill this. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Leave this empty
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="rounded-md bg-accent px-5 py-3 text-small font-medium text-accent-ink transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status.state === "sending" ? "Sending..." : "Send message"}
        </button>

        <p role="status" aria-live="polite" className="text-small text-ink-2">
          {status.state === "sent" ? "Message sent. Thanks, I will be in touch." : null}
          {status.state === "error" ? (
            <span className="text-danger">{status.message}</span>
          ) : null}
        </p>
      </div>
    </form>
  );
}
