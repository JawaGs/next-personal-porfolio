"use client";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "Vue.js", level: 70 },
  { name: "Tailwind CSS", level: 85 },
  { name: "CSS / SCSS", level: 88 },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-indigo-400 font-mono text-sm">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              I&apos;m a <span className="text-indigo-400 font-medium">Frontend Developer</span> passionate about
              crafting intuitive and beautiful user interfaces. I love turning ideas into
              polished digital products.
            </p>
            <p>
              My main stack revolves around <span className="text-white font-medium">React</span> and the modern
              JavaScript ecosystem, but I also enjoy building things with{" "}
              <span className="text-white font-medium">Vue.js</span> and server-rendered apps
              with <span className="text-white font-medium">Next.js</span>.
            </p>
            <p>
              When I&apos;m not coding I enjoy exploring new technologies, contributing to
              open-source projects and playing video games.
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300 font-medium">{skill.name}</span>
                  <span className="text-indigo-400 font-mono">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
