"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const INK = "#1E1B4B";
const GOLD = "#C9A227";

const gianNav = [
  { href: "/programs/gian", label: "Overview" },
  { href: "/programs/gian/courses", label: "Courses" },
  { href: "/programs/gian/downloads", label: "Downloads" },
];

export default function GianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white">
      <div
        className="sticky top-0 z-30 border-b"
        style={{ backgroundColor: INK, borderColor: "#37335F" }}
      >
        <div className="mx-auto flex max-w-6xl items-stretch gap-0 px-6 overflow-x-auto">
          <span
            className="flex shrink-0 items-center pr-5 text-xs font-extrabold uppercase tracking-[0.2em]"
            style={{ color: GOLD }}
          >
            GIAN
          </span>

          {gianNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex shrink-0 items-center gap-2 px-4 py-3.5 text-sm font-semibold transition-colors"
                style={{ color: active ? "#FFFFFF" : "#A39EC9" }}
              >
                {item.label}
                {active && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: GOLD }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
      {children}
    </div>
  );
}
