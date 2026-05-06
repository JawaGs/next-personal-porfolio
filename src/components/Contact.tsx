"use client";

import { useState, useRef, FormEvent } from "react";
import { FiLinkedin, FiGithub, FiTwitter, FiSend } from "react-icons/fi";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

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
      <div className="max-w-3xl mx-auto">
        {/* Section heading */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-indigo-400 font-mono text-sm">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contact</h2>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: text + socials */}
          <div>
            <p className="text-slate-400 leading-relaxed mb-8">
              I&apos;m currently open to new opportunities. Whether you have a question,
              a project in mind or just want to say hi — my inbox is always open!
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="https://www.linkedin.com/in/jvalor/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors group"
              >
                <FiLinkedin className="text-xl" />
                <span className="text-sm group-hover:underline underline-offset-2">
                  linkedin.com/in/jvalor
                </span>
              </a>
              <a
                href="https://github.com/JawaGs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
              >
                <FiGithub className="text-xl" />
                <span className="text-sm group-hover:underline underline-offset-2">
                  github.com/JawaGs
                </span>
              </a>
              <a
                href="https://twitter.com/Jose_A_Valor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-sky-400 transition-colors group"
              >
                <FiTwitter className="text-xl" />
                <span className="text-sm group-hover:underline underline-offset-2">
                  @Jose_A_Valor
                </span>
              </a>
            </div>
          </div>

          {/* Right: contact form */}
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="block text-slate-400 text-sm mb-1">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-slate-400 text-sm mb-1">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="What's on your mind?"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-slate-400 text-sm mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Your message..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              <FiSend />
              {status === "sending" ? "Sending…" : status === "sent" ? "Sent!" : "Send Message"}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}
            {status === "sent" && (
              <p className="text-green-400 text-sm text-center">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
