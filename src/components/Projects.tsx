import Link from "next/link";
import { programs } from "@/data/programs";

export default function Projects() {
  return (
    <section className="bg-slate-50 py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 md:mb-12 text-justify">
          <h2 className="text-2xl md:text-3xl lg:text-4xl pl-2 font-bold text-slate-800 tracking-tight leading-tight">
            Programs & Projects
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-500 font-normal leading-relaxed px-2">
            Explore CET&apos;s major educational initiatives and national
            programs.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {programs.slice(0, 3).map((program) => (
            <div
              key={program.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`relative bg-linear-to-br ${program.gradient} px-6 py-6 text-white overflow-hidden`}
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10" />
                <p className="relative z-10 text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide uppercase">
                  {program.title}
                </p>
                {program.subtitle && (
                  <p className="relative z-10 mt-1 text-xs font-medium text-white/90">
                    {program.subtitle}
                  </p>
                )}
              </div>

              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className=" text-sm font-bold text-slate-900 leading-snug mb-3">
                    {program.heading}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {program.description}
                  </p>
                </div>
                <div className="mt-6 pt-2">
                  <Link
                    href={`/programs/${program.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold transition-all duration-300 hover:translate-x-1"
                  >
                    <span
                      className={`bg-linear-to-r ${program.gradient} bg-clip-text text-transparent`}
                    >
                      Read more
                    </span>
                    <span
                      aria-hidden="true"
                      className={`inline-block h-4.5 w-4.5 bg-linear-to-r ${program.gradient}`}
                      style={{
                        WebkitMaskImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778'/%3E%3C/svg%3E\")",
                        maskImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778'/%3E%3C/svg%3E\")",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 md:mt-10 text-center px-4">
        <Link
          href="/programs"
          className="inline-block rounded-lg border border-rose-900 px-4 py-2 text-sm font-normal text-rose-900 transition hover:bg-[#7B1113] hover:text-white active:scale-95"
        >
          View All Programs →
        </Link>
      </div>
    </section>
  );
}
