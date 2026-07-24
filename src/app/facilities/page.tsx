"use client";

import Image from "next/image";
import it from "../../../public/iitg6a_2021.jpg";
import { useState } from "react";
import { facilities, Facility, FacilityIconKey } from "./data";

function FacilityIcon({
  kind,
  className,
}: {
  kind: FacilityIconKey;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (kind) {
    case "classroom":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="1.5" />
          <path d="M8 20h8M12 16v4" />
          <path d="M7 9l3 2-3 2" />
        </svg>
      );
    case "studio":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="12" height="12" rx="1.5" />
          <path d="M15 10l6-3v10l-6-3" />
        </svg>
      );
    case "editing":
      return (
        <svg {...common}>
          <path d="M4 6h16M4 12h10M4 18h13" />
          <circle cx="17" cy="6" r="1.6" />
          <circle cx="7" cy="12" r="1.6" />
          <circle cx="14" cy="18" r="1.6" />
        </svg>
      );
    case "conference":
      return (
        <svg {...common}>
          <circle cx="8" cy="9" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M3 20c0-2.8 2.2-5 5-5s5 2.2 5 5" />
          <path d="M14.5 15.2c2.4.4 4.5 2.3 4.5 4.8" />
        </svg>
      );
    case "virtual":
      return (
        <svg {...common}>
          <rect x="2.5" y="5" width="14" height="10" rx="1.5" />
          <path d="M6 19h6" />
          <path d="M9 15v4" />
          <path d="M20 8v6l2 2v-10z" />
        </svg>
      );
  }
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function GalleryCarousel({ facility }: { facility: Facility }) {
  const gallery = facility.gallery!;
  const [index, setIndex] = useState(0);
  const photo = gallery[index];
  const hasMultiple = gallery.length > 1;

  const go = (dir: number) =>
    setIndex((i) => (i + dir + gallery.length) % gallery.length);

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
      <Image
        key={photo.image}
        src={photo.image}
        alt={photo.caption}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/0 to-black/0" />

      <span className="absolute left-3.5 top-3.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-[#7B1113] shadow-sm backdrop-blur">
        <FacilityIcon kind={facility.icon} className="h-5 w-5" />
      </span>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className="absolute left-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm transition hover:bg-white"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next photo"
            className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm transition hover:bg-white"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>

          <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-1.5">
            {gallery.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-4 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-3.5 pb-2.5">
        <span className="text-right text-xs sm:text-sm font-medium font-sans text-white">
          {photo.caption}
        </span>
      </div>
    </div>
  );
}

function FacilityCard({ facility }: { facility: Facility }) {
  const isFeatured = facility.featured;
  const hasGallery = !!facility.gallery && facility.gallery.length > 0;

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#7B1113]/25 ${
        isFeatured ? "md:col-span-2" : ""
      }`}
    >
      {hasGallery ? (
        <GalleryCarousel facility={facility} />
      ) : (
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
          <Image
            src={facility.image}
            alt={facility.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/0 to-black/0" />

          <span className="absolute left-3.5 top-3.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-[#7B1113] shadow-sm backdrop-blur">
            <FacilityIcon kind={facility.icon} className="h-5 w-5" />
          </span>
        </div>
      )}

      <div className="p-6 sm:p-7">
        <h3 className="text-lg font-semibold font-sans tracking-tight text-slate-800">
          {facility.title}
        </h3>
        <p className="mt-1.5 text-sm font-medium font-sans text-[#7B1113]">
          {facility.tagline}
        </p>
        <p className="mt-2.5 text-sm font-normal font-sans leading-relaxed text-slate-500">
          {facility.description}
        </p>

        {/* spec readout strip */}
        <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200">
          {facility.specs.map((spec) => (
            <div key={spec.label} className="bg-slate-50 px-3 py-3">
              <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                {spec.label}
              </p>
              <p className="mt-1 text-sm font-semibold font-sans text-slate-800">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden py-14 sm:py-20 md:py-28 text-white">
        <Image
          src={it}
          alt="CET, IIT Guwahati campus"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#7B1113]/90 via-black/60 to-black/70" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-xs tracking-[0.25em] text-[#ff9a9c] uppercase">
            CET · Infrastructure
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold font-sans tracking-tight leading-tight text-white/95">
            Facilities
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base md:text-lg font-normal font-sans text-slate-100/90 leading-relaxed">
            The recording, production, and outreach infrastructure behind every
            course, workshop, and remote session CET runs — from first take to
            final publish.
          </p>
        </div>
      </section>

      {/* Facility grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl text-slate-700 font-semibold tracking-tight leading-tight">
            What&apos;s on the floor
          </h2>
          <p className="mt-2 text-sm font-normal text-slate-500">
            Five spaces, each covering one stage of getting a lecture from the
            classroom to a student&apos;s screen.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilities.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
