"use client";

import { motion, MotionConfig } from "motion/react";
import PeopleCard from "./peopleCard";
import { containerVariants } from "../data/peopleMotion";
import type { PeopleGroup } from "@/data/people.types";

export default function PeopleGroupSection({ group }: { group: PeopleGroup }) {
  const isSingle = group.people.length === 1;

  return (

    <MotionConfig reducedMotion="user">
      <section id={group.id} className="scroll-mt-24">
        <div className="mb-8 flex items-center gap-3">
          <span aria-hidden className="h-6 w-1 rounded-full bg-[#7B1113]" />
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              {group.title}
            </h2>
            {group.subtitle && (
              <p className="mt-1 text-sm text-slate-600">{group.subtitle}</p>
            )}
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className={
            isSingle
              ? "grid grid-cols-1 sm:max-w-sm"
              : "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }
        >
          {group.people.map((person) => (
            <PeopleCard key={person.id} person={person} />
          ))}
        </motion.div>
      </section>
    </MotionConfig>
  );
}
