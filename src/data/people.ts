// lib/data/people.ts
//
// Data source: collected from the live CET site's People pages
// (hoc.html, staff.html, projectstaff.html, pi.html) on 2026-07-15.
//
// This is the ONLY layer that needs to change when the Laravel backend
// is wired up — swap the bodies of getPeopleGroups() / getPrincipalInvestigators()
// for fetch() calls against the API, keep the return types identical.

import type { Person, PeopleGroup, ProjectInvestigator } from "./people.types";

const coordinator: Person = {
  id: "salil-kashyap",
  name: "Dr. Salil Kashyap",
  designation: "Coordinator, Centre for Educational Technology",
  responsibility:
    "Also Coordinator, NMEICT and Coordinator, GIAN. Faculty, Dept. of Electronics & Electrical Engineering.",
  email: "hoccet@iitg.ac.in",
  phone: "+91-361-258-3001",
  image: "salil kashyap.jpg",
};

const officeTeam: Person[] = [
  {
    id: "bishnu-tamuli",
    name: "Bishnu Tamuli",
    designation: "Technical Officer",
    phone: "+91-361-258-3007",
    email: "bishnu@iitg.ac.in",
    image: "bishnu.jpg",
  },
  {
    id: "kallal-barua",
    name: "Kallal Barua",
    designation: "Technical Superintendent",
    responsibility: "MOOCs, Inventory, Technical Purchase",
    phone: "+91-361-258-3002",
    email: "kallal@iitg.ac.in",
    image: "kallal.jpg",
  },
  {
    id: "rubul-gogoi",
    name: "Rubul Gogoi",
    designation: "Junior Technical Superintendent",
    responsibility: "Finance & Technical Purchase",
    phone: "+91-361-258-3007",
    email: "rubul.gogoi@iitg.ac.in",
    image: "rubul_gogoi.jpg",
  },
  {
    id: "pranab-rajbongshi",
    name: "Pranab Rajbongshi",
    designation: "Senior Assistant",
    responsibility: "QIP, RTI, E&ICT, MOOCs and office related matters",
    phone: "+91-361-258-3007",
    email: "pranab21@iitg.ac.in",
    image: "pranab.jpg",
  },
  {
    id: "rekha-hazarika",
    name: "Rekha Hazarika",
    designation: "Senior Technician",
    responsibility: "MOOCs live session and web update",
    phone: "+91-361-258-3008",
    email: "rekha.hazarika@iitg.ac.in",
    image: "Rekha.jpg",
  },
  {
    id: "dibyajyoti-lahkar",
    name: "Dibyajyoti Lahkar",
    designation: "Senior Technician",
    responsibility: "Video recording for all projects monitored by CET",
    phone: "+91-361-258-3009",
    email: "dibyajyoti@iitg.ac.in",
    image: "dibya1.jpg",
  },
  {
    id: "bikash-jyoti-nath",
    name: "Bikash Jyoti Nath",
    designation: "Senior Technician",
    responsibility: "Video editing for all projects monitored by CET",
    phone: "+91-361-258-3023",
    email: "bikashnath@iitg.ac.in",
    image: "Bikash20251.jpg",
  },
  {
    id: "kaushik-sarma",
    name: "Kaushik Kr. Sarma",
    designation: "Senior Technician",
    responsibility: "MOOCs, GIAN related matters; graphics design & animation",
    phone: "+91-361-258-3008",
    email: "kaushik.sarma@iitg.ac.in",
    image: "kaushik_NEW.jpg",
  },
  {
    id: "barun-haldar",
    name: "Barun Haldar",
    designation: "Junior Attendant",
    phone: "+91-361-258-3008",
    email: "bhaldar@iitg.ac.in",
    image: "barun.jpg",
  },
];

const editingTeam: Person[] = [
  {
    id: "rumi-kalita",
    name: "Rumi Kalita",
    designation: "Senior Audio Visual Content Developer",
    responsibility: "Video Editing",
    phone: "+91-361-258-3023",
    email: "rumi.iit@rnd.iitg.ac.in",
    image: "Rumi2025.jpg",
  },
  {
    id: "bratatee-kashyap",
    name: "Bratatee Kashyap",
    designation: "Senior Audio Visual Content Developer",
    responsibility: "Video Editing",
    phone: "+91-361-258-3023",
    email: "bratatee.kashyap@iitg.ac.in",
    image: "bratatee1.jpg",
  },
  {
    id: "jitumani-ray",
    name: "Jitumani Ray",
    designation: "Senior Audio Visual Content Developer",
    responsibility: "Video Editing",
    phone: "+91-361-258-3023",
    email: "jitu.ray@iitg.ac.in",
    image: "jitu.jpg",
  },
  {
    id: "jyoti-prakash-talukdar",
    name: "Jyoti Prakash Talukdar",
    designation: "Senior Audio Visual Content Developer",
    responsibility: "Video Editing",
    phone: "+91-361-258-3023",
    email: "paultalukdar180@rnd.iitg.ac.in",
    image: "sekhar.jpg",
  },
  {
    id: "ambarish-borkotoky",
    name: "Ambarish Borkotoky",
    designation: "Audio Visual Content Developer",
    responsibility: "Video Editing",
    phone: "+91-361-258-3023",
    email: "meetambarish@rnd.iitg.ac.in",
    image: "Ambarish Borkotoky.jpg",
  },
  {
    id: "kuldip-baruah",
    name: "Kuldip Baruah",
    designation: "Audio Visual Content Developer",
    responsibility: "Video Editing",
    phone: "+91-361-258-3023",
    email: "kuldip.baruah@rnd.iitg.ac.in",
    image: "Kuldip Baruah.jpg",
  },
  {
    id: "rupam-buragohain",
    name: "Rupam Buragohain",
    designation: "Audio Visual Content Developer",
    responsibility: "Video Editing",
    phone: "+91-361-258-3009",
    email: "rupam.buragohain@rnd.iitg.ac.in",
    image: "rupam.jpg",
  },
  {
    id: "dimpal-jyoti-baishya",
    name: "Dimpal Jyoti Baishya",
    designation: "Audio Visual Content Developer",
    responsibility: "Video Editing",
    phone: "+91-361-258-3009",
    email: "dimpolbaishya@rnd.iitg.ac.in",
    image: "dimpal.jpg",
  },
  {
    id: "mousam-deka",
    name: "Mousam Deka",
    designation: "Audio Visual Content Developer",
    responsibility: "Video Editing",
    phone: "+91-361-258-3009",
    email: "mousamdeka@rnd.iitg.ac.in",
    image: "mousam.jpg",
  },
];

const recordingTeam: Person[] = [
  {
    id: "mriganka-borah",
    name: "Mriganka Borah",
    designation: "Senior Audio Visual Content Developer",
    responsibility: "Video Recording",
    phone: "+91-361-258-3009",
    email: "mriganka.b@iitg.ac.in",
    image: "mriganka.jpg",
  },
  {
    id: "alilakshi-borgohain",
    name: "Alilakshi Borgohain",
    designation: "Senior Audio Visual Content Developer",
    responsibility: "Video Recording",
    phone: "+91-361-258-3009",
    email: "aliborgohain@iitg.ac.in",
    image: "ali1.jpg",
  },
  {
    id: "sanjib-phukan",
    name: "Sanjib Phukan",
    designation: "Senior Audio Visual Content Developer",
    responsibility: "Video Recording",
    phone: "+91-361-258-3009",
    email: "sanjibphukan25@iitg.ac.in",
    image: "sanjibnw.jpg",
  },
  {
    id: "heramba-das",
    name: "Heramba Das",
    designation: "Audio Visual Content Developer",
    responsibility: "Video Recording",
    phone: "+91-361-258-3009",
    email: "herambadas2015@rnd.iitg.ac.in",
    image: "heramba.jpg",
  },
  {
    id: "anamika-deka",
    name: "Anamika Deka",
    designation: "Audio Visual Content Developer",
    responsibility: "Video Recording",
    phone: "+91-361-258-3009",
    email: "anamika.deka@rnd.iitg.ac.in",
    image: "anamika.jpg",
  },
  {
    id: "nihar-ranjan-gogoi",
    name: "Nihar Ranjan Gogoi",
    designation: "Audio Visual Content Developer",
    responsibility: "Video Recording",
    phone: "+91-361-258-3009",
    email: "nihar.gogoi@rnd.iitg.ac.in",
    image: "nihar.jpg",
  },
  {
    id: "uddhab-chandra-deka",
    name: "Uddhab Chandra Deka",
    designation: "Audio Video Lab Assistant",
    responsibility: "Assisting Video Lab",
    phone: "+91-361-258-3009",
    email: "uddhab.deka@rnd.iitg.ac.in",
    image: "UDDHAB.jpg",
  },
];

const webTeam: Person[] = [
  {
    id: "sunita-das",
    name: "Sunita Das",
    designation: "Associate Web Content Manager",
    responsibility: "Web Development",
    phone: "+91-361-258-3005",
    email: "sdas20486@rnd.iitg.ac.in",
    image: "sunita nw.jpg",
  },
  {
    id: "arnabjyoti-thakuria",
    name: "Arnabjyoti Thakuria",
    designation: "Associate Web Content Manager",
    responsibility: "Web Development",
    phone: "+91-361-258-3005",
    email: "arnabthakuria@rnd.iitg.ac.in",
    image: "arnab.jpg",
  },
  {
    id: "bedanta-kakati",
    name: "Bedanta Kakati",
    designation: "Associate Web Content Manager",
    responsibility: "Web Development",
    phone: "+91-361-258-3005",
    email: "bedanta.kakati@rnd.iitg.ac.in",
    image: "bedanta.jpg",
  },
  {
    id: "munmi-dutta",
    name: "Munmi Dutta",
    designation: "Associate Web Content Manager",
    responsibility: "Web Development",
    phone: "+91-361-258-3005",
    email: "munmi26@rnd.iitg.ac.in",
    image: "munmi.jpg",
  },
  {
    id: "daigy-sarma",
    name: "Daigy Sarma",
    designation: "Associate Web Content Manager",
    responsibility: "Web Development",
    phone: "+91-361-258-3007",
    email: "dsarma@rnd.iitg.ac.in",
    image: "daisy.jpg",
  },
  {
    id: "minara-khanam",
    name: "Minara Khanam",
    designation: "Associate Web Content Manager",
    responsibility: "Web Development",
    phone: "+91-361-258-3007",
    email: "minara18@rnd.iitg.ac.in",
    image: "minara.jpg",
  },
  {
    id: "partha-choudhury",
    name: "Partha Choudhury",
    designation: "System Engineer",
    responsibility: "Web Development",
    phone: "+91-361-258-3005",
    email: "partha1@iisi.iitg.ac.in",
    image: "partha1.jpg",
  },
];

const graphicsAccountsTeam: Person[] = [
  {
    id: "bhupali-deka",
    name: "Bhupali Deka",
    designation: "Graphic Designer",
    responsibility: "Graphic Design",
    phone: "+91-361-258-3023",
    email: "bhupali.deka@rnd.iitg.ac.in",
    image: "Bhupali Deka.jpeg",
  },
  {
    id: "triveni-barman",
    name: "Triveni Barman",
    designation: "Accountant",
    phone: "+91-361-258-3008",
    email: "triveni@rnd.iitg.ac.in",
    image: "trivenibarman.jpeg",
  },
  {
    id: "kangkan-kalita",
    name: "Kangkan Kalita",
    designation: "Project Assistant",
    phone: "+91-361-258-3008",
    email: "kangkan991@rnd.iitg.ac.in",
    image: "kankan.jpg",
  },
];

const principalInvestigators: ProjectInvestigator[] = [
  {
    id: "salil-kashyap-pi",
    name: "Dr. Salil Kashyap",
    affiliation: "Coordinator, CET",
    projects: ["GIAN", "CSS-MOOCS", "KIC-TEQIP", "MITACS", "NPTEL"],
  },
  {
    id: "ratnajit-bhattacharjee",
    name: "Prof. Ratnajit Bhattacharjee",
    affiliation: "Department of EEE",
    profileUrl: "http://www.iitg.ac.in/engfac/ratnajit/",
    projects: ["Electronics and ICT Academy", "Virtual Lab"],
  },
  {
    id: "sunil-khijwania",
    name: "Prof. Sunil Khijwania",
    affiliation: "Department of Physics",
    profileUrl: "http://www.iitg.ac.in/physics/fac/skhijwania/index.html",
    projects: ["PMMMNMTT", "Teachers Training"],
  },
  {
    id: "jatindra-kr-deka",
    name: "Prof. Jatindra Kr Deka",
    affiliation: "Department of CSE",
    profileUrl: "http://www.iitg.ac.in/jatin/",
    projects: [
      "Developing suitable Pedagogical Methods for Various classes, Intellectual Calibers & e-learning",
    ],
  },
  {
    id: "ravi-mokashi-punekar",
    name: "Prof. Ravi Mokashi Punekar",
    affiliation: "Department of Design",
    profileUrl: "http://www.iitg.ac.in/design/portfolio/bio-rmp.pdf",
    projects: ["Creating Digital Learning Environment for Design in India"],
  },
];

/**
 * Single entry point for the page. Swap this body for a call into the
 * Laravel API (e.g. `await fetch(`${API_BASE}/people`)`) once the backend
 * is live — the shape returned must stay PeopleGroup[].
 */
export async function getPeopleGroups(): Promise<PeopleGroup[]> {
  return [
    {
      id: "coordinator",
      title: "Coordinator of the Centre",
      people: [coordinator],
    },
    { id: "office-team", title: "Office Team", people: officeTeam },
    {
      id: "editing-team",
      title: "Project Team — Editing",
      people: editingTeam,
    },
    {
      id: "recording-team",
      title: "Project Team — Recording",
      people: recordingTeam,
    },
    { id: "web-team", title: "Project Team — Web", people: webTeam },
    {
      id: "graphics-accounts-team",
      title: "Project Team — Graphics, Accountant & Assistant",
      people: graphicsAccountsTeam,
    },
  ];
}

export async function getPrincipalInvestigators(): Promise<
  ProjectInvestigator[]
> {
  return principalInvestigators;
}
