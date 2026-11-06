"use client";

import { useState, useRef, FormEvent } from "react";
import { FiLinkedin, FiGithub, FiSend } from "react-icons/fi";

type Status = "idle" | "sending" | "sent" | "error";

const statusMessages: Record<Status, string> = {
  idle: "",
  sending: "Sending…",
  sent: "Message sent! I'll get back to you soon.",
  error: "Something went wrong. Please try again.",
};

const statusColors: Record<Status, string> = {
  idle: "",
  sending: "text-text-muted",
  sent: "text-success",
  error: "text-danger",
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text">Contact</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: text + socials */}
          <div>
            <p className="text-text-muted leading-relaxed mb-8">
              Open to full-time senior frontend roles and freelance projects. Based in
              Santiago, Chile (UTC−3), available for remote work with US and EU teams.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="https://www.linkedin.com/in/josealfredovalor/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors group"
              >
                <FiLinkedin className="text-xl" />
                <span className="text-sm group-hover:underline underline-offset-2">
                  linkedin.com/in/josealfredovalor
                </span>
              </a>
              <a
                href="https://github.com/JawaGs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-muted hover:text-text transition-colors group"
              >
                <FiGithub className="text-xl" />
                <span className="text-sm group-hover:underline underline-offset-2">
                  github.com/JawaGs
                </span>
              </a>
            </div>
          </div>

          {/* Right: contact form */}
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="block text-text-muted text-sm mb-1">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-surface-raised border border-border-strong rounded-sm px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-focus focus:ring-1 focus:ring-focus transition"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-text-muted text-sm mb-1">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="What's on your mind?"
                className="w-full bg-surface-raised border border-border-strong rounded-sm px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-focus focus:ring-1 focus:ring-focus transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-text-muted text-sm mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Your message..."
                className="w-full bg-surface-raised border border-border-strong rounded-sm px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-focus focus:ring-1 focus:ring-focus transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed text-accent-contrast font-semibold rounded-sm transition-all duration-300"
            >
              <FiSend />
              {status === "sending" ? "Sending…" : status === "sent" ? "Sent!" : "Send Message"}
            </button>

            {/* Always mounted so screen readers announce every status change */}
            <p role="status" className={`min-h-5 text-sm text-center ${statusColors[status]}`}>
              {statusMessages[status]}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
