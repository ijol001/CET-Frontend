// src/components/NewsAnnouncements.tsx
import { getNewsData } from "@/data/news";

export default function NewsAnnouncements() {
  const rawNews = getNewsData();

  const announcements = rawNews
    .filter((item) => item.category === "announcement")
    .slice(0, 2);
  const newsItems = rawNews
    .filter((item) => item.category !== "announcement")
    .slice(0, 3);

  return (
    <section className="py-20 bg-slate-50/60 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b border-slate-200 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3"></div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Latest News &amp; Announcements
            </h2>
            <p className="text-slate-500 mt-2 text-sm md:text-base max-w-xl">
              Latest academic updates, research announcements, and campus
              notices from CET, IIT Guwahati.
            </p>
          </div>
          <a
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7B1113] hover:text-red-900 transition-colors group"
          >
            <span>View All</span>
            <span className="transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

        {/* Structured Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1 & 2: Primary Announcements */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <span>Featured Announcements</span>
              <span className="flex-1 h-px bg-slate-200" />
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {announcements.map((item) => {
                const formattedDate = new Date(item.date).toLocaleDateString(
                  "en-IN",
                  {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  },
                );

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group min-h-[220px]"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#7B1113]/5 text-[#7B1113]">
                          Critical Announcement
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {formattedDate}
                        </span>
                      </div>
                      <h4 className="font-medium text-slate-800 group-hover:text-[#7B1113] transition-colors text-base leading-snug tracking-tight line-clamp-3">
                        {item.title}
                      </h4>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      {item.link ? (
                        <a
                          href={item.link}
                          className="font-semibold text-[#7B1113] hover:underline flex items-center gap-1"
                        >
                          View Details <span>→</span>
                        </a>
                      ) : (
                        <span className="text-slate-400 font-medium">
                          Internal Circulation
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 3: Systematic News Stream */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <span>Latest News &amp; Events</span>
              <span className="flex-1 h-px bg-slate-200" />
            </h3>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm divide-y divide-slate-100">
              {newsItems.map((item) => {
                const formattedDate = new Date(item.date).toLocaleDateString(
                  "en-IN",
                  {
                    day: "numeric",
                    month: "short",
                  },
                );

                return (
                  <div
                    key={item.id}
                    className="py-4 first:pt-0 last:pb-0 group"
                  >
                    <div className="flex items-start gap-4">
                      {/* Date Badge */}
                      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 min-w-[50px] text-center shadow-2xs">
                        <p className="text-xs font-bold text-slate-700 leading-none">
                          {formattedDate.split(" ")[0]}
                        </p>
                        <p className="text-[10px] uppercase font-semibold text-slate-400 mt-1">
                          {formattedDate.split(" ")[1]}
                        </p>
                      </div>

                      {/* Title & Link */}
                      <div className="space-y-1">
                        <h4 className="text-sm font-medium text-slate-800 line-clamp-2 leading-snug group-hover:text-[#7B1113] transition-colors">
                          {item.title}
                        </h4>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="inline-block text-xs font-semibold text-[#7B1113] hover:underline"
                          >
                            Read press release
                          </a>
                        ) : (
                          <span className="text-[10px] text-slate-400 block font-medium">
                            CET Update
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
