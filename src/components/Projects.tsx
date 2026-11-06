import { projects } from "@/data/projects";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";

const linkClassName =
  "inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-text underline-offset-2 hover:underline transition-colors";

export default function Projects() {
  return (
    <section id="projects" className="pt-10 pb-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text">Projects</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="flex flex-col bg-surface-raised border border-border rounded-sm p-6 hover:border-accent transition-colors duration-300"
            >
              {/* Project image (decorative: the title is right next to it) */}
              <div className="relative mb-5 overflow-hidden rounded-sm border border-border aspect-video">
                <Image
                  src={project.imageSrc}
                  alt=""
                  fill
                  preload={index === 0}
                  className="object-cover"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                />
              </div>

              {/* Title */}
              <h3 className="text-text font-semibold text-lg mb-2">{project.title}</h3>

              {/* Description */}
              <p className="text-text-muted text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-sm bg-accent/10 text-accent border border-accent/40"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-6">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                >
                  <FiExternalLink aria-hidden="true" />
                  <span aria-hidden="true">Live demo</span>
                  <span className="sr-only">Live demo: {project.title} (opens in a new tab)</span>
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                >
                  <FiGithub aria-hidden="true" />
                  <span aria-hidden="true">Code</span>
                  <span className="sr-only">Code: {project.title} (opens in a new tab)</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
