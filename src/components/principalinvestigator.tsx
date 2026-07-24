import type { ProjectInvestigator } from "@/data/people.types";

export default function PrincipalInvestigator({
  investigators,
}: {
  investigators: ProjectInvestigator[];
}) {
  return (
    <section id="principal-investigators" className="scroll-mt-24">
      <div className="mb-6 flex items-center gap-3">
        <span className="h-6 w-1 rounded-full bg-[#7B1113]" />
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Principal Investigators
        </h2>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {investigators.map((pi, index) => (
          <div
            key={pi.id}
            className={`flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:gap-6 ${
              index !== investigators.length - 1
                ? "border-b border-slate-100"
                : ""
            }`}
          >
            <span className="text-sm font-mono text-slate-300 sm:w-8">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="sm:w-64 shrink-0">
              {pi.profileUrl ? (
                <a
                  href={pi.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-900 hover:text-[#7B1113] transition-colors"
                >
                  {pi.name}
                </a>
              ) : (
                <span className="font-semibold text-slate-900">{pi.name}</span>
              )}
              <p className="text-sm text-slate-500">{pi.affiliation}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {pi.projects.map((project) => (
                <span
                  key={project}
                  className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200"
                >
                  {project}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
