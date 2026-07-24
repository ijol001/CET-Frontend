export default function About() {
  return (
    <section className="bg-linear-to-br bg-white py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl pl-2 font-bold text-slate-800 tracking-tight leading-tight">
            About CET
          </h2>
          {/* <div className="mx-auto mt-3 h-1 w-16 md:w-20 rounded bg-[#7B1113]" /> */}
          <p className="mt-4 text-sm md:text-base text-slate-500 font-normal leading-relaxed text-justify">
            Centre for Educational Technology (CET), established in 2002 as a
            central multi & interdisciplinary facility of IIT Guwahati, started
            its activities while launching NPTEL Phase 1 and QIP program. Over
            the years, CET has grown in terms of its involvement into Mission
            Projects of national importance and projects focussed to North
            Eastern Region (NER), e.g., GIAN, NPTEL-MOOCS, TEQIP, PMMMNMTT, TTC
            (with RMSA) to name a few. CET administers Mission Projects by
            collaborating and interacting with other IITs and education
            department of various states. Besides, the Center hosts world class
            state-of-the-art infrastructures to execute Mission Projects
            spanning all the subject areas of science, engineering and
            humanities while infusing educational and pedagogical technologies.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mb-3 md:mb-4 text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-tight">
              Vision
            </h3>
            <p className="text-sm md:text-base text-slate-500 font-normal leading-relaxed">
              {/* ↑ text-sm mobile → text-base desktop; removed text-justify */}
              The vision and mission of CET are to achieve the highest synergy
              between Education, Human Development and Technology through
              Collective Research, Design & Development of
              educational/pedagogical content, Educational technology and
              Collaborative Interdisciplinary team work.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center min-h-[200px]">
            <p className="text-slate-400 text-sm">▶ Video Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
