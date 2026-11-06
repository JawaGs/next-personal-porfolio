import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text">Experience</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <ol className="max-w-3xl space-y-12">
          {experience.map((entry) => (
            <li key={`${entry.company}-${entry.start.dateTime}`}>
              <h3 className="text-text font-semibold text-lg">{entry.title}</h3>
              <p className="text-text-muted text-sm mt-1">
                {entry.company} ·{" "}
                <time dateTime={entry.start.dateTime}>{entry.start.label}</time> –{" "}
                {entry.end ? (
                  <time dateTime={entry.end.dateTime}>{entry.end.label}</time>
                ) : (
                  "Present"
                )}
              </p>
              {entry.context && (
                <p className="text-text-muted text-sm mt-1">{entry.context}</p>
              )}
              <ul className="list-disc pl-5 mt-4 space-y-2 text-text-muted text-sm leading-relaxed">
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
