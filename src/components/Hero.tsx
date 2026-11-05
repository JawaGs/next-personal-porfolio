import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl" />
      </div>

      {/* Name */}
      <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4 motion-safe:animate-[fadeInDown_0.6s_ease_0.2s_both]">
        Jose Valor
      </h1>

      {/* Role */}
      <p className="text-2xl md:text-4xl font-semibold text-slate-400 mb-6 motion-safe:animate-[fadeInDown_0.6s_ease_0.4s_both]">
        Senior Frontend Engineer
      </p>

      {/* Short bio */}
      <p className="max-w-2xl text-slate-400 text-base md:text-lg leading-relaxed mb-10 motion-safe:animate-[fadeInDown_0.6s_ease_0.6s_both]">
        I build accessible, high-traffic booking and e-commerce frontends with
        React, Next.js and TypeScript. I&apos;ve worked on moving a major
        European airline&apos;s booking traffic to Next.js and led the
        web-to-mobile migration of a financial services flow generating 80% of
        its sales.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4 justify-center mb-12 motion-safe:animate-[fadeInDown_0.6s_ease_0.8s_both]">
        <a
          href="#projects"
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-indigo-500/40 motion-safe:hover:-translate-y-0.5"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border border-indigo-500/50 hover:border-indigo-400 text-slate-300 hover:text-white font-semibold rounded-full transition-all duration-300 motion-safe:hover:-translate-y-0.5"
        >
          Get in touch
        </a>
      </div>

      {/* Social icons */}
      <div className="flex gap-6 motion-safe:animate-[fadeInDown_0.6s_ease_1s_both]">
        <a
          href="https://github.com/JawaGs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-slate-400 hover:text-white transition-colors text-2xl motion-safe:hover:-translate-y-0.5 duration-200"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/josealfredovalor/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-slate-400 hover:text-indigo-400 transition-colors text-2xl motion-safe:hover:-translate-y-0.5 duration-200"
        >
          <FiLinkedin />
        </a>
      </div>
    </section>
  );
}
