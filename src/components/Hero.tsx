import { FiGithub, FiLinkedin } from "react-icons/fi";

const socialClassName =
  "p-2 text-text-muted hover:text-accent transition-colors text-2xl";

export default function Hero() {
  return (
    <section id="hero" className="px-6 pt-24 pb-10 md:pt-28 md:pb-12">
      <div className="max-w-6xl mx-auto">
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-text motion-safe:animate-[fadeInDown_0.6s_ease_0.1s_both]">
          Jose Valor
        </h1>

        {/* Role */}
        <p className="mt-3 text-2xl md:text-3xl text-accent font-display italic motion-safe:animate-[fadeInDown_0.6s_ease_0.2s_both]">
          Senior Frontend Engineer
        </p>

        {/* Short bio */}
        <p className="mt-6 max-w-2xl text-text-muted text-base md:text-lg leading-relaxed motion-safe:animate-[fadeInDown_0.6s_ease_0.3s_both]">
          I build accessible, high-traffic booking and e-commerce frontends with
          React, Next.js and TypeScript. I&apos;ve worked on moving a major
          European airline&apos;s booking traffic to Next.js and led the
          web-to-mobile migration of a financial services flow generating 80% of
          its sales.
        </p>

        {/* CTAs and social icons */}
        <div className="mt-8 flex flex-wrap items-center gap-4 motion-safe:animate-[fadeInDown_0.6s_ease_0.4s_both]">
          <a
            href="#projects"
            className="px-6 py-3 bg-accent hover:brightness-110 text-accent-contrast font-semibold rounded-sm transition"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border-strong hover:border-accent text-text font-semibold rounded-sm transition-colors"
          >
            Get in touch
          </a>
          <div className="flex gap-1 -ml-2 sm:ml-2">
            <a
              href="https://github.com/JawaGs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={socialClassName}
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/josealfredovalor/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={socialClassName}
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
