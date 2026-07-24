import type { Metadata } from "next";
import PeopleSection from "@/components/peopleGroupSection";
import PrincipalInvestigator from "@/components/principalinvestigator";
import { getPeopleGroups, getPrincipalInvestigators } from "@/data/people";
import iitg from "../../../public/logo/iitg7_2021.jpg";

export const metadata: Metadata = {
  title: "People | Centre for Educational Technology, IIT Guwahati",
  description:
    "Meet the Coordinator, office team, project team, and principal investigators at the Centre for Educational Technology, IIT Guwahati.",
};

const jumpLinks = [
  { id: "coordinator", label: "Coordinator" },
  { id: "office-team", label: "Office Team" },
  { id: "editing-team", label: "Editing Team" },
  { id: "recording-team", label: "Recording Team" },
  { id: "web-team", label: "Web Team" },
  { id: "graphics-accounts-team", label: "Graphics & Accounts" },
  { id: "principal-investigators", label: "Principal Investigators" },
];

export default async function PeoplePage() {
  const [groups, investigators] = await Promise.all([
    getPeopleGroups(),
    getPrincipalInvestigators(),
  ]);

  return (
    <main className="bg-white">
      <div
        className="relative bg-cover bg-center py-20 sm:py-28"
        style={{ backgroundImage: `url('${iitg.src}')` }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-[#7B1113]/90 via-black/60 to-black/70" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            People
          </h1>
          <p className="mt-5 max-w-2xl text-white/90">
            The Coordinator, office team, project team, and principal
            investigators who run CET &apos;s programs and facilities.
          </p>
        </div>
      </div>

      <div className="sticky top-12.5 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-4 py-3 text-sm font-sans text-slate-700 sm:px-6 lg:px-8">
          {jumpLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="shrink-0 whitespace-nowrap transition-colors hover:text-[#7B1113]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        {groups.map((group) => (
          <PeopleSection key={group.id} group={group} />
        ))}
        <PrincipalInvestigator investigators={investigators} />
      </div>
    </main>
  );
}
