const skillGroups = [
  { label: "Core:", skills: "React, Next.js, TypeScript" },
  { label: "Styling:", skills: "Tailwind CSS, CSS / SCSS" },
  { label: "Quality:", skills: "Vitest, Playwright, WCAG / axe" },
  { label: "Also:", skills: "Vue.js, React Native" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text">About</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Text */}
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              I&apos;m a frontend engineer based in Santiago, Chile, building
              production web apps since 2017: freelance first, then for financial
              services and airline clients.
            </p>
            <p>
              I focus on the parts users only notice when they break:
              accessibility, performance, testing and migrations that don&apos;t
              take the site down.
            </p>
          </div>

          {/* Skills */}
          <dl className="space-y-4 text-sm">
            {skillGroups.map((group) => (
              <div key={group.label} className="flex gap-3">
                <dt className="w-20 shrink-0 text-text font-semibold">{group.label}</dt>
                <dd className="text-text-muted">{group.skills}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
