"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion"; // or "motion/react"
import type { Person } from "@/data/people.types";
import { cardVariants, hoverSpring } from "../data/peopleMotion";

interface PeopleCardProps {
  person: Person;
}

export default function PeopleCard({ person }: PeopleCardProps) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={hoverSpring}
      className="group relative flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm hover:border-[#7B1113]/20 hover:shadow-xl"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-[#C9A227]/10 via-transparent to-[#7B1113]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative mx-auto">
        <div className="absolute inset-0 scale-125 rounded-full bg-[#C9A227]/10 blur-2xl" />

        <div className="relative h-44 w-44 overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-md sm:h-48 sm:w-48">
          <Image
            src={`/people/${person.image}`}
            alt={person.name}
            fill
            sizes="(max-width: 640px) 176px, 192px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-1 flex-col text-center">
        <h3 className="text-lg font-bold tracking-tight text-slate-900">
          {person.name}
        </h3>

        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#7B1113]">
          {person.designation}
        </p>

        {person.responsibility && (
          <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-slate-600">
            {person.responsibility}
          </p>
        )}

        {(person.email || person.phone) && (
          <div className="mt-auto pt-5 flex flex-wrap justify-center gap-2">
            {person.email && (
              <a
                href={`mailto:${person.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs text-slate-600 transition-colors duration-200 hover:bg-[#7B1113]/10 hover:text-[#7B1113]"
              >
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span className="max-w-35 truncate">{person.email}</span>
              </a>
            )}

            {person.phone && (
              <a
                href={`tel:${person.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs text-slate-600 transition-colors duration-200 hover:bg-[#7B1113]/10 hover:text-[#7B1113]"
              >
                <Phone className="h-3.5 w-3.5 shrink-0" />
                <span>{person.phone}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
