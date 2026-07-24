"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import it from "../../../../public/it.jpg";
import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ArrowRight,
  Radio,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import {
  stats,
  objectives,
  featureCards,
  subjectAreas,
  faqs,
  coordinator,
  webcastUrl,
  proposalRules,
  implementationPoints,
  gradeCardSteps,
} from "./data";

const INK = "#1E1B4B";
const INK_DEEP = "#13112E";
const GOLD = "#C9A227";
const CANVAS = "#FAF8F3";

/* ---------------------------------------------------------------------- */
/*  Count-up stat                                                          */
/* ---------------------------------------------------------------------- */
function CountUpStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const duration = 1300;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setCount(Math.floor(p * value));
            if (p < 1) requestAnimationFrame(step);
            else setCount(value);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="relative border-l-2 px-5 py-2 sm:px-6"
      style={{ borderColor: "#E7E2D6" }}
    >
      <p
        className="mt-1 text-4xl sm:text-5xl font-extrabold tracking-tight"
        style={{ color: INK }}
      >
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-sm sm:text-base text-stone-500 font-medium">
        {label}
      </p>
    </div>
  );
}

const heroNations = [
  { label: "Germany", x: 250, y: 70 },
  { label: "France", x: 90, y: 95 },
  { label: "UK", x: 60, y: 50 },
  { label: "USA", x: 30, y: 190 },
  { label: "Sweden", x: 230, y: 30 },
  { label: "Japan", x: 430, y: 110 },
  { label: "Singapore", x: 400, y: 220 },
  { label: "Australia", x: 410, y: 290 },
  { label: "Denmark", x: 200, y: 20 },
  { label: "Czechia", x: 280, y: 65 },
];

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: INK }}
    >
      <div className="h-0.75 w-full" style={{ backgroundColor: GOLD }} />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-32 grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p
            className="text-xs sm:text-sm tracking-[0.25em] uppercase font-bold"
            style={{ color: GOLD }}
          >
            Govt. of India &middot; CET, IIT Guwahati
          </p>
          <h1 className="mt-6 text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] text-white">
            GIAN
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-medium text-stone-300">
            Global Initiative of Academic Networks
          </p>
          <p className="mt-6 max-w-lg text-base sm:text-lg text-stone-400 leading-relaxed">
            Bringing the world&apos;s leading scientists, engineers and scholars
            to IIT Guwahati — and IIT Guwahati&apos;s faculty into rooms with
            them.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/programs/gian/courses"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wider transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: GOLD, color: INK }}
            >
              Explore Courses
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/programs/gian/downloads"
              className="inline-flex items-center gap-2 border border-stone-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-stone-200 hover:border-white hover:text-white"
            >
              Download Forms
            </Link>
          </div>
          <a
            href={webcastUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-stone-300 hover:text-white"
          >
            <Radio size={14} style={{ color: GOLD }} />
            All GIAN courses are webcast live — watch here
          </a>
        </div>

        <div className="relative mx-auto hidden h-80 w-full max-w-md sm:block">
          <svg viewBox="0 0 460 320" className="h-full w-full">
            <circle
              cx="230"
              cy="160"
              r="120"
              fill="none"
              stroke="#37335F"
              strokeWidth="1"
            />
            {heroNations.map((n) => (
              <line
                key={n.label}
                x1="230"
                y1="160"
                x2={n.x}
                y2={n.y}
                stroke={GOLD}
                strokeOpacity={0.35}
                strokeWidth="1"
              />
            ))}
            {heroNations.map((n) => (
              <g key={n.label}>
                <circle cx={n.x} cy={n.y} r="4" fill={GOLD} />
                <text
                  x={n.x}
                  y={n.y - 10}
                  textAnchor="middle"
                  fontSize="9"
                  fill="#D6D3C9"
                >
                  {n.label}
                </text>
              </g>
            ))}
            <circle cx="230" cy="160" r="9" fill="white" />
            <text
              x="230"
              y="185"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="white"
            >
              IIT GUWAHATI
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section style={{ backgroundColor: CANVAS }} className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-4">
        {stats.map((s) => (
          <CountUpStat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="relative h-72 sm:h-96 lg:h-120 overflow-hidden">
          <div
            className="absolute -inset-3 -z-10"
            style={{ border: `1px solid ${GOLD}` }}
          />
          <Image
            src={it}
            alt="IIT Guwahati campus"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p
            className="text-xs sm:text-sm tracking-[0.25em] uppercase font-bold"
            style={{ color: GOLD }}
          >
            About the Initiative
          </p>
          <h2
            className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: INK }}
          >
            About GIAN
          </h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            <p>
              GIAN is a Government of India initiative that taps the
              international pool of talented scientists and entrepreneurs,
              encouraging their engagement with institutes of higher education
              in India — augmenting academic resources and elevating the
              country&apos;s scientific and technological capacity to global
              excellence.
            </p>
            <p>
              The scheme grew out of the 2014 IIT Retreat with the Ministry of
              Human Resource Development, which called for a system of guest
              lectures by internationally renowned experts paired with a
              comprehensive faculty development program.
            </p>
            <p>
              IIT Kharagpur coordinates IITs, NITs, IIITs and IIEST nationally;
              IISc Bangalore coordinates IISc and IISERs; JNU covers Central and
              State Universities and Law Schools; and IIM Bangalore coordinates
              Management Schools.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-px bg-stone-200">
            {featureCards.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 bg-white p-5"
              >
                <span style={{ color: INK }}>
                  <f.Icon size={20} />
                </span>
                <span className="text-sm font-semibold text-stone-700">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Objectives() {
  return (
    <section style={{ backgroundColor: CANVAS }} className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs sm:text-sm tracking-[0.25em] uppercase font-bold"
            style={{ color: GOLD }}
          >
            Why GIAN
          </p>
          <h2
            className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: INK }}
          >
            Objectives
          </h2>
        </div>
        <div className="grid gap-px bg-stone-200 sm:grid-cols-2 lg:grid-cols-3 border border-stone-200">
          {objectives.map((o) => (
            <div
              key={o.title}
              className="group relative bg-white p-7 transition-colors hover:bg-[#1E1B4B]"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center"
                  style={{ color: INK }}
                >
                  <o.Icon
                    size={30}
                    className="group-hover:text-white transition-colors"
                  />
                </span>
                <p className="text-lg font-bold text-stone-900 group-hover:text-white transition-colors">
                  {o.title}
                </p>
              </div>

              <p className="mt-3 text-sm text-stone-500 leading-relaxed group-hover:text-stone-300 transition-colors">
                {o.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="max-w-xl mb-8">
            <h3
              className="text-2xl font-extrabold tracking-tight"
              style={{ color: INK }}
            >
              Subject Areas
            </h3>
            <p className="mt-2 text-base text-stone-500">
              Proposals fall under one of these broad areas.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {subjectAreas.map((area) => (
              <span
                key={area}
                className="cursor-default border px-4 py-2 text-sm font-semibold text-stone-700 transition-colors hover:text-white"
                style={{ borderColor: "#D9D2C0" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = INK;
                  (e.currentTarget as HTMLElement).style.borderColor = INK;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "#D9D2C0";
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProposalSubmission() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-14">
          <p
            className="text-xs sm:text-sm tracking-[0.25em] uppercase font-bold"
            style={{ color: GOLD }}
          >
            For Faculty
          </p>
          <h2
            className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: INK }}
          >
            Proposal Submission
          </h2>
          <p className="mt-4 text-base text-stone-500 leading-relaxed">
            Full guidelines for submitting a course under GIAN Phase IV.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div
            className="border border-stone-200 p-7"
            style={{ backgroundColor: CANVAS }}
          >
            <p className="text-xs font-bold tracking-wider text-stone-400 uppercase">
              Subject
            </p>
            <h3 className="mt-2 text-base font-bold" style={{ color: INK }}>
              {proposalRules.subject.heading}
            </h3>
            <p className="mt-3 text-sm text-stone-600 leading-relaxed">
              {proposalRules.subject.body}
            </p>
          </div>

          <div
            className="border border-stone-200 p-7"
            style={{ backgroundColor: CANVAS }}
          >
            <p className="text-xs font-bold tracking-wider text-stone-400 uppercase">
              Foreign Expert
            </p>
            <h3 className="mt-2 text-base font-bold" style={{ color: INK }}>
              {proposalRules.foreignExpert.heading}
            </h3>
            <ul className="mt-3 space-y-2">
              {proposalRules.foreignExpert.points.map((pt) => (
                <li
                  key={pt}
                  className="flex items-start gap-2 text-sm text-stone-600 leading-snug"
                >
                  <CheckCircle2
                    size={14}
                    className="mt-0.5 shrink-0"
                    style={{ color: GOLD }}
                  />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-start gap-2 border-t border-stone-200 pt-4">
              <AlertCircle
                size={14}
                className="mt-0.5 shrink-0 text-stone-400"
              />
              <p className="text-xs text-stone-500 leading-relaxed italic">
                {proposalRules.foreignExpert.note}
              </p>
            </div>
          </div>

          <div
            className="border border-stone-200 p-7"
            style={{ backgroundColor: CANVAS }}
          >
            <p className="text-xs font-bold tracking-wider text-stone-400 uppercase">
              Submission Process
            </p>
            <h3 className="mt-2 text-base font-bold" style={{ color: INK }}>
              {proposalRules.process.heading}
            </h3>
            <ol className="mt-3 space-y-3">
              {proposalRules.process.steps.map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-3 text-sm text-stone-600 leading-snug"
                >
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center text-[10px] font-extrabold text-white"
                    style={{ backgroundColor: INK }}
                  >
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/programs/gian/downloads"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white"
            style={{ backgroundColor: INK }}
          >
            View All Forms & Guidelines
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Implementation() {
  const [activeTab, setActiveTab] = useState(0);
  const active = implementationPoints[activeTab];

  return (
    <section style={{ backgroundColor: CANVAS }} className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-14">
          <p
            className="text-xs sm:text-sm tracking-[0.25em] uppercase font-bold"
            style={{ color: GOLD }}
          >
            How It Runs
          </p>
          <h2
            className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: INK }}
          >
            Implementation
          </h2>
          <p className="mt-4 text-base text-stone-500 leading-relaxed">
            Key operating rules for host faculty and course coordinators.{" "}
            <Link
              href="/programs/gian/downloads"
              className="font-semibold underline"
              style={{ color: INK }}
            >
              Full guidelines on the Downloads page.
            </Link>
          </p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-px bg-stone-200 border border-stone-200">
          <div className="bg-white">
            {implementationPoints.map((pt, i) => (
              <button
                key={pt.category}
                onClick={() => setActiveTab(i)}
                className="flex w-full items-center gap-3 border-b border-stone-100 px-5 py-4 text-left text-sm font-semibold transition-colors last:border-b-0"
                style={
                  activeTab === i
                    ? { backgroundColor: INK, color: "white" }
                    : { color: "#57534E" }
                }
              >
                <span className="text-base">{pt.icon}</span>
                {pt.category}
              </button>
            ))}
          </div>

          <div className="bg-white p-8">
            <p
              className="text-xs font-bold tracking-wider uppercase"
              style={{ color: GOLD }}
            >
              {active.category}
            </p>
            <ul className="mt-5 space-y-4">
              {active.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-stone-700 leading-relaxed"
                >
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: GOLD }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function GradeCard() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <p
          className="text-xs sm:text-sm tracking-[0.25em] uppercase font-bold"
          style={{ color: GOLD }}
        >
          For Credit-Seeking Participants
        </p>
        <h2
          className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight"
          style={{ color: INK }}
        >
          Grade Card Process
        </h2>
        <p className="mt-4 text-base text-stone-500 leading-relaxed">
          Participants wanting academic credit from a GIAN course follow this
          sequence before a signed grade card is issued by the Academic Section.
        </p>
        <ol className="mt-10 space-y-0 border-t border-stone-300">
          {gradeCardSteps.map((step, i) => (
            <li
              key={step}
              className="flex gap-5 border-b border-stone-300 py-5"
            >
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: INK }}
              >
                {i + 1}
              </span>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section style={{ backgroundColor: CANVAS }} className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12">
          <p
            className="text-xs sm:text-sm tracking-[0.25em] uppercase font-bold"
            style={{ color: GOLD }}
          >
            Questions
          </p>
          <h2
            className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: INK }}
          >
            FAQ
          </h2>
        </div>
        <div className="divide-y divide-stone-200 border-t border-b border-stone-200">
          {faqs.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <div key={faq.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base sm:text-lg font-bold text-stone-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-stone-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-base text-stone-500 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Coordinator() {
  return (
    <section className="py-24" style={{ backgroundColor: INK_DEEP }}>
      <div className="mx-auto max-w-3xl px-6">
        <div className="border border-stone-700 p-10 sm:flex sm:items-center sm:gap-10">
          <div className="mx-auto h-50 w-50 shrink-0 overflow-hidden rounded-full border-2 border-yellow-500 sm:mx-0">
            <Image
              src={coordinator.photo}
              alt={coordinator.name}
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-6 text-center sm:mt-0 sm:text-left">
            <p className="text-lg font-bold text-white">{coordinator.name}</p>
            <p className="mt-1 text-sm text-stone-400">{coordinator.title}</p>
            <div className="mt-5 space-y-2 text-sm text-stone-300">
              <p className="flex items-center justify-center gap-2 sm:justify-start">
                <MapPin size={14} style={{ color: GOLD }} />
                {coordinator.location}
              </p>
              <p className="flex items-center justify-center gap-2 sm:justify-start">
                <Phone size={14} style={{ color: GOLD }} />
                {coordinator.phone} &middot; Fax {coordinator.fax}
              </p>
              <p className="flex items-center justify-center gap-2 sm:justify-start">
                <Mail size={14} style={{ color: GOLD }} />
                {coordinator.email}
              </p>
            </div>
            <a
              href={`mailto:${coordinator.email}`}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider hover:-translate-y-0.5 transition-transform"
              style={{ backgroundColor: GOLD, color: INK_DEEP }}
            >
              Contact Coordinator
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GianHomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Objectives />
      <ProposalSubmission />
      <Implementation />
      <GradeCard />
      <FAQ />
      <Coordinator />
    </main>
  );
}
