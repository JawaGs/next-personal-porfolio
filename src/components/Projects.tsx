"use client";

import { projects } from "@/data/projects";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-indigo-400 font-mono text-sm">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              {/* Top row: emoji + external icon */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-4xl">{project.emoji}</span>
                <FiExternalLink className="text-slate-500 group-hover:text-indigo-400 transition-colors text-xl" />
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-indigo-300 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
