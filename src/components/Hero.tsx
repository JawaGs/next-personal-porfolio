"use client";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

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

      {/* Greeting */}
      <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-4 opacity-0 animate-[fadeInDown_0.6s_ease_0.2s_forwards]">
        Hi, my name is
      </p>

      {/* Name */}
      <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4 opacity-0 animate-[fadeInDown_0.6s_ease_0.4s_forwards]">
        Jose Valor
      </h1>

      {/* Role */}
      <h2 className="text-2xl md:text-4xl font-semibold text-slate-400 mb-6 opacity-0 animate-[fadeInDown_0.6s_ease_0.6s_forwards]">
        Frontend Developer
      </h2>

      {/* Short bio */}
      <p className="max-w-xl text-slate-400 text-base md:text-lg leading-relaxed mb-10 opacity-0 animate-[fadeInDown_0.6s_ease_0.8s_forwards]">
        I build interactive, accessible and performant web experiences with
        modern technologies like React, Vue and Next.js.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4 justify-center mb-12 opacity-0 animate-[fadeInDown_0.6s_ease_1s_forwards]">
        <a
          href="#projects"
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-0.5"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border border-indigo-500/50 hover:border-indigo-400 text-slate-300 hover:text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5"
        >
          Contact Me
        </a>
      </div>

      {/* Social icons */}
      <div className="flex gap-6 opacity-0 animate-[fadeInDown_0.6s_ease_1.2s_forwards]">
        <a
          href="https://github.com/JawaGs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-slate-400 hover:text-white transition-colors text-2xl hover:-translate-y-0.5 duration-200"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/josealfredovalor/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-slate-400 hover:text-indigo-400 transition-colors text-2xl hover:-translate-y-0.5 duration-200"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://twitter.com/Jose_A_Valor"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-slate-400 hover:text-sky-400 transition-colors text-2xl hover:-translate-y-0.5 duration-200"
        >
          <FiTwitter />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-0 animate-[fadeIn_1s_ease_2s_forwards]">
        <span className="text-slate-500 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-indigo-500/60 to-transparent" />
      </div>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
