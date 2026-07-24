"use client";

import Image from "next/image";
import it from "../../../../public/it.jpg";
import nptel from "../../../../public/nptel.png";
import Link from "next/link";
import { useMemo, useState } from "react";
import { courseData, phaseTheme, CoursePhase, stats } from "./data";

/* ---------- small inline icons (no external icon dependency) ---------- */

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4h6v6" />
      <path d="M20 4l-9 9" />
      <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

function VideoTypeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="6" width="12" height="12" rx="1.5" />
      <path d="M15 10l6-3v10l-6-3" />
    </svg>
  );
}

function WebTypeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
    </svg>
  );
}

/* ---------- flattened course record used by the catalog view ---------- */

interface FlatCourse {
  name: string;
  link: string;
  developers: string;
  department: string;
  type: string; // e.g. "Video Courses" / "Web Courses"
}

function flattenPhase(phase: CoursePhase): FlatCourse[] {
  const out: FlatCourse[] = [];
  phase.groups.forEach((group) => {
    group.departments.forEach((dept) => {
      dept.courses.forEach((course) => {
        out.push({
          name: course.name,
          link: course.link,
          developers: course.developers,
          department: dept.name,
          type: group.type,
        });
      });
    });
  });
  return out;
}

function isVideoType(type: string) {
  return /video/i.test(type);
}

function CourseList({ courseData }: { courseData: CoursePhase[] }) {
  const [activePhase, setActivePhase] = useState(0);
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [deptFilter, setDeptFilter] = useState<string>("All");

  const phase = courseData[activePhase];
  const allCourses = useMemo(() => flattenPhase(phase), [phase]);

  const types = useMemo(
    () => ["All", ...Array.from(new Set(allCourses.map((c) => c.type)))],
    [allCourses],
  );
  const departments = useMemo(
    () => ["All", ...Array.from(new Set(allCourses.map((c) => c.department)))],
    [allCourses],
  );

  // reset filters that no longer apply when switching phase
  const changePhase = (idx: number) => {
    setActivePhase(idx);
    setQuery("");
    setTypeFilter("All");
    setDeptFilter("All");
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allCourses.filter((c) => {
      if (typeFilter !== "All" && c.type !== typeFilter) return false;
      if (deptFilter !== "All" && c.department !== deptFilter) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.developers.toLowerCase().includes(q) ||
        c.department.toLowerCase().includes(q)
      );
    });
  }, [allCourses, query, typeFilter, deptFilter]);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight leading-tight text-slate-700 mb-2">
          Courses Developed by IIT Guwahati
        </h2>
        <p className="text-sm text-slate-500 font-normal mb-8">
          {allCourses.length} courses across {departments.length - 1}{" "}
          departments. Search, filter, or browse by type below.
        </p>

        {/* Phase tabs */}
        <div className="flex gap-3 mb-6">
          {courseData.map((p, idx) => (
            <button
              key={p.phase}
              onClick={() => changePhase(idx)}
              className={`rounded-full px-5 py-2 text-sm font-medium font-sans transition-colors ${
                activePhase === idx
                  ? phaseTheme[idx].activeTab
                  : phaseTheme[idx].inactiveTab
              }`}
            >
              {p.phase}
            </button>
          ))}
        </div>

        {/* Search + filters */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses, instructors, or departments…"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm font-sans text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-[#7B1113]/50 focus:bg-white focus:ring-2 focus:ring-[#7B1113]/10"
            />
          </div>

          {types.length > 2 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setTypeFilter(t)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium font-sans transition-colors ${
                    typeFilter === t
                      ? "bg-[#7B1113] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          )}

          {departments.length > 2 && (
            <div className="mt-3 flex flex-wrap gap-2 max-h-24 overflow-y-auto">
              {departments.map((d) => (
                <button
                  key={d}
                  onClick={() => setDeptFilter(d)}
                  className={`rounded-full border px-3 py-1 text-[11px] font-medium font-sans transition-colors ${
                    deptFilter === d
                      ? "border-slate-700 bg-slate-700 text-white"
                      : "border-slate-200 text-slate-500 hover:border-slate-300"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Result count */}
        <p className="mt-5 mb-3 text-xs font-medium font-sans text-slate-400">
          Showing {filtered.length} of {allCourses.length} courses
        </p>

        {/* Course grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((course, i) => {
              const video = isVideoType(course.type);
              return (
                <a
                  key={`${course.name}-${i}`}
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7B1113]/30 hover:shadow-md"
                >
                  <span
                    className={`absolute left-0 top-5 h-8 w-1 rounded-r-full ${
                      video ? "bg-[#7B1113]" : "bg-slate-400"
                    }`}
                  />
                  <div className="flex items-start justify-between gap-2 pl-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold font-sans uppercase tracking-wide ${
                        video
                          ? "bg-[#7B1113]/10 text-[#7B1113]"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {video ? (
                        <VideoTypeIcon className="h-3 w-3" />
                      ) : (
                        <WebTypeIcon className="h-3 w-3" />
                      )}
                      {video ? "Video" : "Web"}
                    </span>
                    <ExternalLinkIcon className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-[#7B1113]" />
                  </div>

                  <h4 className="mt-3 pl-2 text-sm font-semibold font-sans leading-snug text-slate-800 group-hover:text-[#7B1113] transition-colors">
                    {course.name}
                  </h4>
                  <p className="mt-1 pl-2 text-xs font-normal font-sans text-slate-400">
                    {course.department}
                  </p>
                  <p className="mt-3 pl-2 text-xs font-normal font-sans text-slate-500 line-clamp-2">
                    {course.developers}
                  </p>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center">
            <p className="text-sm font-medium font-sans text-slate-500">
              No courses match your search.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setTypeFilter("All");
                setDeptFilter("All");
              }}
              className="mt-3 text-sm font-medium font-sans text-[#7B1113] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default function NPTELPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden py-14 sm:py-20 md:py-28 text-white">
        <Image
          src={it}
          alt="iit guwahati campus"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#7B1113]/90 via-black/60 to-black/70" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-full">
              <Link href="https://nptel.ac.in" className="inline-block">
                <Image
                  src={nptel}
                  alt="nptel logo"
                  width={220}
                  height={70}
                  className="h-auto w-35 sm:w-45 md:w-55 bg-white rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 transition-transform duration-300 hover:-translate-y-0.5"
                />
              </Link>

              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold font-sans tracking-tight leading-tight text-white/95">
                National Programme on Technology Enhanced Learning
              </h2>

              <p className="mt-3 max-w-2xl text-sm sm:text-base md:text-lg font-normal font-sans text-slate-100/90 leading-relaxed">
                A joint initiative of the IITs and IISc, funded by the Ministry
                of Education, delivering free online courses and certification
                across engineering, science, humanities and management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 border-b border-slate-200 font-sans">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((Stat) => (
              <div key={Stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-[#7B1113]">
                  {Stat.value}
                </p>
                <p className="mt-1 text-sm font-normal text-slate-500">
                  {Stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 font-sans">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl text-slate-700 font-semibold tracking-tight leading-tight">
            About NPTEL
          </h2>

          <p className="mt-4 text-sm md:text-base text-slate-500 font-normal leading-relaxed">
            The National Programme on Technology Enhanced Learning (NPTEL), a
            project funded by the Ministry of Human Resource Development (MHRD)
            was first conceived in 1999 to pave the way for introducing
            multimedia and web technology to enhance learning of basic science
            and engineering concepts. Significant infrastructure has been set up
            earlier for production of video/web-based teaching material by the
            Indian Institutes of Technology (IIT) and Technical Teacher Training
            Institutes (TTTI). <br /> <br /> The broad aim of the project NPTEL
            is to facilitate the competitiveness of Indian industry in the
            global markets through improving the quality and reach of
            engineering education. The operational objective of NPTEL is to make
            high quality learning material available to students of engineering
            institutions across the country by exploiting the advances in
            information and communication technology. The target group for this
            project consists of students and faculty of institutions offering
            undergraduate engineering programmes in India. <br /> <br /> NPTEL
            provides E-learning through online Web and Video courses in
            Engineering, Science and humanities streams. The mission of NPTEL is
            to enhance the quality of engineering education in the country by
            providing free online courseware. In the first phase of the NPTEL
            project, IITG has developed 05 video courses and 15 web courses and
            in the second phase, IITG has developed 16 video courses and 64 web
            courses.
          </p>
        </div>
      </section>

      <CourseList courseData={courseData} />
    </main>
  );
}
