// src/data/news.ts
export type NewsItem = {
  id: string;
  title: string;
  date: string;
  category: "news" | "announcement";
  link?: string;
};

const newsData: NewsItem[] = [
  {
    id: "1",
    title: "GIAN Course Registrations Open for Autumn 2026",
    date: "2026-07-10",
    category: "announcement",
  },
  {
    id: "2",
    title: "NPTEL Phase 3 Certification Results Declared",
    date: "2026-07-05",
    category: "news",
  },
  {
    id: "3",
    title: "CET Hosts Workshop on AI in Higher Education",
    date: "2026-06-28",
    category: "news",
  },
  {
    id: "4",
    title: "Applications Invited for QIP Short-Term Course",
    date: "2026-06-20",
    category: "announcement",
  },
];

export function getNewsData(): NewsItem[] {
  return newsData;
}
