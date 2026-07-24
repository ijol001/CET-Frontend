"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const PRIMARY = "#d97706";
const PRIMARY_LIGHT = "#f59e0b";

const cssMoocsNav = [
  { href: "/programs/css_moocs", label: "Overview" },
  { href: "/programs/css_moocs/courses", label: "Courses" },
  { href: "/programs/css_moocs/downloads", label: "Downloads" },
];

export default function CssMoocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white">
      <div
        className="sticky top-0 z-30 border-b bg-linear-to-r"
        style={{
          backgroundImage: `linear-gradient(to right, ${PRIMARY}, ${PRIMARY_LIGHT})`,
          borderColor: "#fbbf24",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-stretch gap-0 overflow-x-auto px-6">
          <span className="flex shrink-0 items-center pr-5 text-xs font-extrabold uppercase tracking-[0.2em] text-white">
            CSS MOOCS
          </span>

          {cssMoocsNav.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex shrink-0 items-center px-4 py-3.5 text-sm font-semibold transition-all duration-200 hover:text-white"
                style={{
                  color: active ? "#FFFFFF" : "rgba(255,255,255,0.75)",
                }}
              >
                {item.label}

                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
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
