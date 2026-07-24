// "use client";

// const newsItems = [
//   { text: "New NPTEL course launched", date: "Jun 10, 2025" },
//   { text: "GIAN workshop announced", date: "Jun 5, 2025" },
//   { text: "Faculty development program", date: "May 28, 2025" },
//   { text: "AICTE training initiative", date: "May 20, 2025" },
//   { text: "QIP Admission 2026-27 is going on", date: "May 15, 2025" },
//   { text: "NPTEL Pre doc fellowship admission going on", date: "May 10, 2025" },
// ];

// const activities = [
//   {
//     title: "GIAN Workshop on Advanced Manufacturing",
//     description:
//       "Prof. Rainer Martin from RUHR University conducted a 5-day intensive workshop.",
//     date: "Jun 8, 2025",
//     tag: "GIAN",
//     tagColor: "bg-amber-100 text-amber-700",
//   },
//   {
//     title: "NPTEL Coordinator Meeting",
//     description:
//       "IIT Guwahati hosted the regional NPTEL coordinator meet for Northeast India.",
//     date: "May 30, 2025",
//     tag: "NPTEL",
//     tagColor: "bg-red-100 text-[#7B1113]",
//   },
//   {
//     title: "Faculty Training under PMMMNMTT",
//     description:
//       "200+ teachers certified under the Pandit Madan Mohan Malaviya mission.",
//     date: "May 22, 2025",
//     tag: "PMMMNMTT",
//     tagColor: "bg-green-100 text-green-700",
//   },
//   {
//     title: "MITACS Student Exchange Program",
//     description:
//       "6 students selected for the Canada–India mobility program this semester.",
//     date: "May 12, 2025",
//     tag: "MITACS",
//     tagColor: "bg-blue-100 text-blue-700",
//   },
// ];

// export default function Highlights() {
//   return (
//     <section className="bg-linear-to-b from-red-50 to-white py-10 md:py-16">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6">
//         <div className="mb-8 md:mb-12 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-[#131111]">
//             Key Highlights
//           </h2>
//           <div className="mx-auto mt-3 h-1 w-16 md:w-20 rounded bg-[#7B1113]" />
//           <p className="mt-4 text-sm md:text-base text-slate-500 leading-relaxed">
//             Latest updates, visitors and achievements of CET.
//           </p>
//         </div>

//         <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
//           {/* News & Updates — auto-scrolling */}
//           <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col">
//             <div className="flex items-center justify-between mb-4 md:mb-5">
//               <h3 className="text-lg md:text-xl font-bold tracking-tight text-[#131111]">
//                 News & Updates
//               </h3>
//               <span className="rounded-full bg-[#7B1113]/10 px-3 py-1 text-xs font-normal text-[#7B1113]">
//                 {newsItems.length} items
//               </span>
//             </div>

//             <div className="relative flex-1 h-56 overflow-hidden">
//               <div className="pointer-events-none absolute top-0 inset-x-0 h-6 z-10 bg-linear-to-b from-white to-transparent" />
//               <div className="pointer-events-none absolute bottom-0 inset-x-0 h-6 z-10 bg-linear-to-t from-white to-transparent" />

//               <div className="animate-scroll-up">
//                 {[...newsItems, ...newsItems].map((item, i) => (
//                   <div
//                     key={i}
//                     className="flex items-start justify-between gap-4 border-b border-slate-100 py-3 last:border-0"
//                   >
//                     <div className="flex items-start gap-2">
//                       <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7B1113]" />
//                       <span className="text-sm text-slate-700 leading-snug">
//                         {item.text}
//                       </span>
//                     </div>
//                     <span className="shrink-0 text-xs text-gray-400 mt-0.5 whitespace-nowrap">
//                       {item.date}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <button className="mt-4 self-start rounded-lg border border-rose-900 px-4 py-2 text-sm font-normal text-rose-900 transition hover:bg-[#7B1113] hover:text-white active:scale-95">
//               View All →
//             </button>
//           </div>

//           {/* Recent Activities */}
//           <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col">
//             <div className="flex items-center justify-between mb-4 md:mb-5">
//               <h3 className="text-lg md:text-xl font-bold tracking-tight text-[#131111]">
//                 Recent Activities
//               </h3>
//               <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
//                 Latest
//               </span>
//             </div>

//             <div className="flex-1 space-y-3 overflow-y-auto pr-1">
//               {activities.map((activity, i) => (
//                 <div
//                   key={i}
//                   className="rounded-xl border border-slate-100 bg-slate-50 p-3 md:p-4 transition hover:border-slate-200 hover:bg-white hover:shadow-sm"
//                 >
//                   <div className="flex items-start justify-between gap-2 mb-1">
//                     <span
//                       className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${activity.tagColor}`}
//                     >
//                       {activity.tag}
//                     </span>
//                     <span className="text-xs text-gray-400 shrink-0 whitespace-nowrap">
//                       {activity.date}
//                     </span>
//                   </div>
//                   <p className="text-sm font-semibold text-slate-800 mt-2 leading-snug">
//                     {activity.title}
//                   </p>
//                   <p className="text-xs text-gray-500 mt-1 leading-relaxed">
//                     {activity.description}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <button className="mt-4 self-start rounded-lg border border-rose-900 px-4 py-2 text-sm font-normal text-rose-900 transition hover:bg-[#7B1113] hover:text-white active:scale-95">
//               View All Activities →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
