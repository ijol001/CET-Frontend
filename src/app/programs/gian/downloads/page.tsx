"use client";

import { Download, FileText, ExternalLink } from "lucide-react";
import { forms, referenceLinks } from "../data";

const INK = "#1E1B4B";
const GOLD = "#C9A227";
const CANVAS = "#FAF8F3";

const groups: {
  key: "proposal" | "consent" | "report";
  label: string;
  description: string;
}[] = [
  {
    key: "proposal",
    label: "Proposal & invitation",
    description: "Submitting a new course and inviting the foreign expert.",
  },
  {
    key: "consent",
    label: "Consent forms",
    description: "Required declarations from host and foreign faculty.",
  },
  {
    key: "report",
    label: "Evaluation & reporting",
    description: "Closing out a course — grading, accounts, and certificates.",
  },
];

/* Compute the right column class per group to avoid orphaned grey cells.
   Rules:
   - 1 item  → 1 col
   - 2 items → 2 cols (sm only)
   - 3 items → 3 cols (lg)
   - 4 items → 2 cols, 2 rows — clean
   - 5 items → 2 cols leaves 1 orphan; 3 cols also leaves 2 orphans — use 2 + last spans 2
   - 6 items → 3 cols, 2 rows — clean
   - 7 items → 2 cols + last spans 2
   Strategy: if divisible by 3 → 3 cols, else if divisible by 2 → 2 cols, else 2 cols + span trick */
function gridColClass(count: number) {
  if (count === 1) return "grid-cols-1";
  if (count % 3 === 0) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  if (count % 2 === 0) return "grid-cols-1 sm:grid-cols-2";
  // odd count that doesn't divide by 3 → 2 cols, last card will span 2
  return "grid-cols-1 sm:grid-cols-2";
}

export default function GianDownloadsPage() {
  return (
    <main style={{ backgroundColor: CANVAS }} className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl mb-12">
          <p
            className="text-xs sm:text-sm tracking-[0.25em] uppercase font-bold"
            style={{ color: GOLD }}
          >
            Resources
          </p>
          <h1
            className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: INK }}
          >
            Downloads &amp; Forms
          </h1>
          <p className="mt-3 text-base text-stone-500 leading-relaxed">
            Every form a course coordinator needs, from first proposal to final
            report.
          </p>
        </div>

        {/* Reference links — guidelines, manual, tracking, annual report */}
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {referenceLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 border border-stone-200 bg-white p-5 transition-colors hover:border-[#1E1B4B] hover:bg-[#1E1B4B]"
            >
              <div>
                <p className="text-sm font-bold text-stone-900 group-hover:text-white transition-colors">
                  {link.label}
                </p>
                <p className="mt-1 text-xs text-stone-500 group-hover:text-stone-300 transition-colors">
                  {link.description}
                </p>
              </div>
              <ExternalLink
                size={16}
                className="shrink-0 text-stone-400 group-hover:text-white transition-colors"
              />
            </a>
          ))}
        </div>

        {/* Form groups */}
        <div className="space-y-16">
          {groups.map((group, gi) => {
            const items = forms.filter((f) => f.group === group.key);
            if (items.length === 0) return null;

            const isOddCount = items.length % 2 !== 0 && items.length % 3 !== 0;

            return (
              <div key={group.key}>
                {/* Group header */}
                <div className="flex flex-wrap items-baseline gap-2 border-b-2 border-stone-200 pb-3 mb-6">
                  <span
                    className="text-xs font-extrabold"
                    style={{ color: GOLD }}
                  >
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <h2
                    className="text-lg font-extrabold tracking-tight"
                    style={{ color: INK }}
                  >
                    {group.label}
                  </h2>
                  <span className="text-sm text-stone-500">
                    — {group.description}
                  </span>
                </div>

                {/* Cards grid — no bg trick, real borders on each card */}
                <div
                  className={`grid gap-4 sm:gap-5 ${gridColClass(items.length)}`}
                >
                  {items.map((form, fi) => {
                    const isLastOdd = isOddCount && fi === items.length - 1;
                    return (
                      <div
                        key={form.title}
                        className={`group flex flex-col justify-between border border-stone-200 bg-white p-6 transition-colors hover:border-[#1E1B4B] hover:bg-[#1E1B4B] ${
                          isLastOdd ? "sm:col-span-2 lg:col-span-1" : ""
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span style={{ color: GOLD }}>
                              <FileText size={20} />
                            </span>
                            {form.formNo && (
                              <span className="text-xs font-bold text-stone-400 group-hover:text-stone-300 transition-colors">
                                {form.formNo}
                              </span>
                            )}
                          </div>
                          <p className="mt-3 text-sm font-bold text-stone-900 group-hover:text-white transition-colors">
                            {form.title}
                          </p>
                          <p className="mt-1.5 text-xs text-stone-500 leading-relaxed group-hover:text-stone-300 transition-colors">
                            {form.description}
                          </p>
                        </div>

                        <div className="mt-5 flex gap-2">
                          <a
                            href={form.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex flex-1 items-center justify-center gap-1.5 border border-stone-200 bg-stone-50 py-2 text-xs font-bold uppercase tracking-wider text-stone-700 transition-colors group-hover:border-stone-600 group-hover:bg-transparent group-hover:text-white"
                          >
                            <Download size={13} /> PDF
                          </a>
                          <a
                            href={form.doc}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex flex-1 items-center justify-center gap-1.5 border border-stone-200 bg-stone-50 py-2 text-xs font-bold uppercase tracking-wider text-stone-700 transition-colors group-hover:border-stone-600 group-hover:bg-transparent group-hover:text-white"
                          >
                            <Download size={13} /> Doc
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
