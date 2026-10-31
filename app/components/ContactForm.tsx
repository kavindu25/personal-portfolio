"use client";

import { useState, type FormEvent } from "react";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string };

const field =
  "mt-2 block w-full bg-[var(--field-input)] px-4 py-3.5 text-body text-[var(--ink)] placeholder:text-[#4e5d67] outline-none focus:outline-solid focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--field-action)]";

const label = "block text-small font-semibold text-field-ink";

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
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={label}>
          Name
          <input name="name" type="text" required maxLength={100} autoComplete="name" className={field} />
        </label>
        <label className={label}>
          Email
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </label>
      </div>

      <label className={label}>
        Message
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={6}
          placeholder="What are you building, and where could I help?"
          className={`${field} resize-y`}
        />
      </label>

      {/* Honeypot: real visitors never see or fill this. */}
      <div className="sr-only" aria-hidden="true">
        <label>
          Leave this empty
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={status.state === "sending"}
        className="flex min-h-14 w-full items-center justify-between bg-[var(--field-action)] px-5 font-semibold text-[var(--field-action-ink)] transition-[transform,opacity] duration-150 active:scale-[0.99] disabled:opacity-70"
      >
        {status.state === "sending" ? "Sending..." : "Send message"}
        <span className="arrow" aria-hidden="true">→</span>
      </button>

      <p role="status" aria-live="polite" className="min-h-[1.5em] text-small font-semibold">
        {status.state === "sent" ? "Message sent. Thanks, I will be in touch." : null}
        {status.state === "error" ? (
          <span className="text-[var(--field-danger)]">{status.message}</span>
        ) : null}
      </p>
    </form>
  );
}
