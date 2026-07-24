"use client";

import { useState } from "react";
import Image from "next/image"; // Imported next/image for handling avatars optimized
import { Search, X, ArrowRight, ChevronDown, Radio } from "lucide-react";
import {
  ongoingCourses,
  pastCohorts,
  timelineSteps,
  webcastUrl,
  type GianCourse,
} from "../data";

const INK = "#1E1B4B";
const INK_DEEP = "#13112E";
const GOLD = "#C9A227";
const CANVAS = "#FAF8F3";

function CourseDrawer({
  course,
  onClose,
}: {
  course: GianCourse | null;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        course
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ${
          course ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {course && (
          <div className="flex h-full flex-col">
            <div
              className="flex items-start justify-between border-b p-6"
              style={{ backgroundColor: INK, borderColor: "#37335F" }}
            >
              <div>
                <p
                  className="text-xs font-bold tracking-wide"
                  style={{ color: GOLD }}
                >
                  {course.code} &middot; {course.duration}
                </p>
                <h3 className="mt-1 text-lg font-bold text-white leading-snug">
                  {course.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="rounded p-1.5 text-stone-300 hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                  International Faculty
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-stone-200 bg-stone-100">
                    {course.foreignExpertImage ? (
                      <Image
                        src={course.foreignExpertImage}
                        alt={course.foreignExpert}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-stone-400 font-bold uppercase text-xs">
                        {course.foreignExpert
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800 text-base">
                      {course.foreignExpert}
                    </p>
                    <p className="text-stone-500">
                      {course.foreignInstitution}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                  Host Faculty
                </p>
                <div className="space-y-3">
                  {course.hostFaculty.map((f, i) => {
                    const img = course.hostFacultyImages?.[i];
                    return (
                      <div key={f} className="flex items-center gap-4">
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-stone-200 bg-stone-100">
                          {img ? (
                            <Image
                              src={img}
                              alt={f}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center text-stone-400 font-bold uppercase text-xs">
                              {f
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                                .slice(0, 2)}
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-stone-800 text-base">
                            {f}
                          </p>
                          <p className="text-stone-500 text-xs">
                            IIT Guwahati Coordinator
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">
                  Department
                </p>
                <p className="text-stone-700">{course.department}</p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">
                  Duration
                </p>
                <p className="text-stone-700">{course.duration}</p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">
                  About this course
                </p>
                <p className="text-stone-500 leading-relaxed">
                  Delivered jointly by the international expert and host faculty
                  as part of GIAN, this course gives participants direct access
                  to specialised expertise not otherwise available locally, with
                  course material developed for potential reuse as MOOC content.
                </p>
              </div>
            </div>

            <div className="flex gap-3 border-t border-stone-200 p-6">
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2.5 text-center text-sm font-bold uppercase tracking-wider"
                style={{ backgroundColor: GOLD, color: INK_DEEP }}
              >
                Register
              </a>
              <button
                onClick={onClose}
                className="flex-1 border border-stone-300 px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-stone-600 hover:bg-stone-50"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CourseCard({
  course,
  onSelect,
}: {
  course: GianCourse;
  onSelect: (c: GianCourse) => void;
}) {
  return (
    <div className="group flex flex-col justify-between border border-stone-200 bg-white p-6 transition-colors hover:border-[#1E1B4B]">
      <div>
        <p className="text-xs font-bold tracking-wide" style={{ color: GOLD }}>
          {course.code} &middot; {course.duration}
        </p>
        <p className="mt-3 text-base font-bold text-stone-900 leading-snug min-h-12">
          {course.title}
        </p>

        {/* Dynamic Photo Overlap Layout Block inside cards */}
        <div className="mt-5 flex items-center gap-3 border-t border-stone-100 pt-4">
          <div className="flex -space-x-2 overflow-hidden">
            {/* Foreign Expert Image Circle */}
            <div className="relative h-8 w-8 rounded-full border-2 border-white bg-stone-100 overflow-hidden shrink-0">
              {course.foreignExpertImage ? (
                <Image
                  src={course.foreignExpertImage}
                  alt={course.foreignExpert}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-stone-200 text-[9px] font-bold text-stone-500 uppercase">
                  {course.foreignExpert[0]}
                </div>
              )}
            </div>

            {/* Host Faculty Images Loop */}
            {course.hostFaculty.map((f, idx) => {
              const hostImg = course.hostFacultyImages?.[idx];
              return (
                <div
                  key={f}
                  className="relative h-8 w-8 rounded-full border-2 border-white bg-stone-100 overflow-hidden shrink-0"
                >
                  {hostImg ? (
                    <Image
                      src={hostImg}
                      alt={f}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-stone-200 text-[9px] font-bold text-stone-500 uppercase">
                      {f[0]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-xs text-stone-500 leading-tight truncate flex-1">
            <p className="font-semibold text-stone-700 truncate">
              {course.foreignExpert}
            </p>
            <p className="truncate text-stone-400">
              {course.hostFaculty.join(", ")} &middot; {course.department}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() => onSelect(course)}
        className="mt-6 inline-flex items-center justify-center gap-1.5 border border-stone-300 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-700 transition-colors group-hover:border-[#1E1B4B] group-hover:bg-[#1E1B4B] group-hover:text-white"
      >
        View Details
        <ArrowRight size={13} />
      </button>
    </div>
  );
}

function OngoingTab({ onSelect }: { onSelect: (c: GianCourse) => void }) {
  const [query, setQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("All");

  const years = [
    "All",
    ...Array.from(new Set(ongoingCourses.map((c) => c.year))).sort(),
  ];

  const filtered = ongoingCourses.filter((c) => {
    const matchesYear = yearFilter === "All" || c.year === yearFilter;
    const matchesQuery =
      query.trim() === "" ||
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.foreignExpert.toLowerCase().includes(query.toLowerCase()) ||
      c.department.toLowerCase().includes(query.toLowerCase());
    return matchesYear && matchesQuery;
  });

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses..."
            className="w-full border border-stone-300 bg-white py-2.5 pl-9 pr-3 text-sm text-stone-700 outline-none focus:border-[#1E1B4B]"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto">
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setYearFilter(y)}
              className="shrink-0 border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors"
              style={
                yearFilter === y
                  ? { backgroundColor: INK, borderColor: INK, color: "white" }
                  : { borderColor: "#D9D2C0", color: "#78716C" }
              }
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-stone-400 py-16 text-center">
          No courses match your search.
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course) => (
            <CourseCard key={course.code} course={course} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
}

function PastTab({ onSelect }: { onSelect: (c: GianCourse) => void }) {
  const [openCohort, setOpenCohort] = useState<string | null>(
    pastCohorts[0]?.label ?? null,
  );

  return (
    <div className="space-y-px border border-stone-200 bg-stone-200">
      {pastCohorts.map((cohort) => {
        const isOpen = openCohort === cohort.label;
        return (
          <div key={cohort.label} className="bg-white">
            <button
              onClick={() => setOpenCohort(isOpen ? null : cohort.label)}
              className="flex w-full items-center justify-between px-6 py-4 text-left"
            >
              <span className="text-sm font-bold text-stone-800">
                {cohort.label}{" "}
                <span className="font-semibold text-stone-400">
                  ({cohort.courses.length})
                </span>
              </span>
              <ChevronDown
                size={18}
                className={`text-stone-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid gap-3 px-6 pb-6 sm:grid-cols-2">
                  {cohort.courses.map((course) => (
                    <button
                      key={course.code}
                      onClick={() => onSelect(course)}
                      className="border border-stone-200 p-4 text-left transition-colors hover:border-[#1E1B4B]"
                      style={{ backgroundColor: CANVAS }}
                    >
                      <p className="text-xs font-bold tracking-wide text-stone-400">
                        {course.code} &middot; {course.duration}
                      </p>
                      <p className="mt-1 text-sm font-bold text-stone-800 leading-snug">
                        {course.title}
                      </p>
                      <p className="mt-2 text-xs text-stone-500">
                        {course.foreignExpert} — {course.foreignInstitution}
                      </p>
                      <p className="text-xs text-stone-400">
                        {course.hostFaculty.join(", ")} &middot;{" "}
                        {course.department}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function TimelineStrip() {
  return (
    <section style={{ backgroundColor: INK_DEEP }} className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p
          className="text-xs sm:text-sm tracking-[0.25em] uppercase font-bold"
          style={{ color: GOLD }}
        >
          Process
        </p>
        <h2 className="mt-3 mb-10 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          How a GIAN course comes together
        </h2>

        <div className="flex gap-px overflow-x-auto bg-stone-700">
          {timelineSteps.map((step, idx) => (
            <div
              key={step.title}
              className="flex min-w-42.5 flex-1 flex-col gap-2 p-5"
              style={{ backgroundColor: INK_DEEP }}
            >
              <span className="text-xs font-bold" style={{ color: GOLD }}>
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-bold text-white">{step.title}</p>
              <p className="text-xs text-stone-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function GianCoursesPage() {
  const [tab, setTab] = useState<"ongoing" | "past">("ongoing");
  const [selected, setSelected] = useState<GianCourse | null>(null);

  return (
    <main>
      <section style={{ backgroundColor: CANVAS }} className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-xl mb-6">
            <p
              className="text-xs sm:text-sm tracking-[0.25em] uppercase font-bold"
              style={{ color: GOLD }}
            >
              Phase IV &middot; 2024–25
            </p>
            <h1
              className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight"
              style={{ color: INK }}
            >
              GIAN Courses
            </h1>
            <p className="mt-3 text-base text-stone-500 leading-relaxed">
              All sessions are open to participants from other institutions.
            </p>
          </div>

          <a
            href={webcastUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-10 inline-flex items-center gap-2 border px-4 py-2.5 text-sm font-semibold transition-colors hover:border-[#1E1B4B] hover:text-[#1E1B4B]"
            style={{ borderColor: "#D9D2C0", color: "#57534E" }}
          >
            <Radio size={14} style={{ color: GOLD }} />
            Watch the live GIAN webcast
          </a>

          <div className="mb-10 inline-flex border border-stone-300">
            <button
              onClick={() => setTab("ongoing")}
              className="px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors"
              style={
                tab === "ongoing"
                  ? { backgroundColor: INK, color: "white" }
                  : { color: "#78716C" }
              }
            >
              Ongoing
            </button>
            <button
              onClick={() => setTab("past")}
              className="px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors"
              style={
                tab === "past"
                  ? { backgroundColor: INK, color: "white" }
                  : { color: "#78716C" }
              }
            >
              Past Courses
            </button>
          </div>

          {tab === "ongoing" ? (
            <OngoingTab onSelect={setSelected} />
          ) : (
            <PastTab onSelect={setSelected} />
          )}
        </div>

        <CourseDrawer course={selected} onClose={() => setSelected(null)} />
      </section>

      <TimelineStrip />
    </main>
  );
}
