export type FacilityIconKey =
  | "classroom"
  | "studio"
  | "editing"
  | "conference"
  | "virtual";

export interface FacilitySpec {
  label: string;
  value: string;
}

export interface Facility {
  id: string; // dashboard-style short code, e.g. "FAC-01"
  title: string;
  tagline: string;
  description: string;
  specs: FacilitySpec[];
  icon: FacilityIconKey;
  image: string; // path under /public, e.g. "/facilities/e-classroom.jpg"
  featured?: boolean;
  gallery?: {
    image: string; // path under /public, e.g. "/facilities/video-studios/studio-1.jpg"
    caption: string;
  }[];
}

export const facilities: Facility[] = [
  {
    id: "e-classroom",
    title: "e-Classroom",
    tagline: "Where lectures become courses",
    description:
      "The primary recording space for NPTEL and GIAN content — built for capturing lectures, live student-teacher interaction, and video conferencing with remote classrooms in real time.",
    specs: [
      { label: "Function", value: "Lecture Capture" },
      { label: "Interaction", value: "Two-Way, Live" },
      { label: "Used By", value: "NPTEL / GIAN" },
    ],
    icon: "classroom",
    image: "/video/ec.jpg",
    featured: true,
  },
  {
    id: "video-studios",
    title: "Video Studios",
    tagline: "Three bays, one standard: broadcast quality",
    description:
      "Three dedicated recording studios, each paired with its own control room, purpose-built for the pre-production stage of course and project video content.",
    specs: [
      { label: "Studio Bays", value: "3" },
      { label: "Control Rooms", value: "3" },
      { label: "Stage", value: "Pre-Production" },
    ],
    icon: "studio",
    image: "/video/v1.jpg",
    gallery: [
      { image: "/video/v2.jpg", caption: "Studio 2" },
      {
        image: "/video/v3.jpg",
        caption: "Studio 1",
      },
      {
        image: "/video/v12.jpg",
        caption: "Common Control Room for Studio 2 & 3",
      },
      { image: "/video/vidrec1.jpg", caption: "Control Room of Studio 1" },
      {
        image: "/video/v1.jpg",
        caption: "Studio 3",
      },
    ],
    featured: true,
  },
  {
    id: "video-editing-lab",
    title: "Video Editing Lab",
    tagline: "Raw footage in, finished courseware out",
    description:
      "A fully equipped post-production facility where recorded lectures are cut, refined, and packaged for release across NPTEL and CET's e-learning platforms.",
    specs: [
      { label: "Stage", value: "Post-Production" },
      { label: "Output", value: "Course-Ready Video" },
      { label: "Workflow", value: "Edit → Review → Publish" },
    ],
    icon: "editing",
    image: "/video/video editing.jpg",
  },
  {
    id: "video-conference-room",
    title: "Video Conference Room",
    tagline: "Nine nodes, one national network",
    description:
      "Connected via the National Knowledge Network, this facility runs synchronous full-HD sessions with partner institutions across the country — the backbone of CET's outreach programmes.",
    specs: [
      { label: "Nodes", value: "9 + 1" },
      { label: "Resolution", value: "Full HD" },
      { label: "Network", value: "NKN" },
    ],
    icon: "conference",
    image: "video/vc.jpg",
  },
  {
    id: "virtual-classroom",
    title: "Virtual Classroom",
    tagline: "One instructor, many rooms",
    description:
      "An interactive teaching space built for live lecture delivery with genuine two-way engagement — extending a single classroom to remote students over video conferencing.",
    specs: [
      { label: "Function", value: "Live Delivery" },
      { label: "Interaction", value: "Two-Way, Remote" },
      { label: "Reach", value: "Multi-Site" },
    ],
    icon: "virtual",
    image: "/video/virtual classroom.jpg",
  },
];
