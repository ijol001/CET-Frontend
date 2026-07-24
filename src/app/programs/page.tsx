import { programs } from "@/data/programs";
import Link from "next/link";
import Image from "next/image";
import it from "../../../public/it.jpg";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 text-white">
        {/* Background image */}
        <Image
          src={it}
          alt="IIT Guwahati campus"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-linear-to-br from-[#7B1113]/90 via-black/60 to-black/70" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
            CET &middot; IIT Guwahati
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Programs &amp; Projects
          </h1>

          <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-100/90 leading-relaxed">
            Explore educational initiatives, national projects, faculty
            development programs and technology-enabled learning platforms
            managed by CET IIT Guwahati.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.slug}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`relative bg-gradient-to-br ${program.gradient} px-6 py-6 text-white overflow-hidden`}
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
                    <h3 className="text-sm font-bold text-slate-900 leading-snug mb-3">
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
      </section>
    </main>
  );
}
