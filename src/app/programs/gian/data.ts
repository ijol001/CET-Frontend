import {
  Globe,
  GraduationCap,
  Handshake,
  Rocket,
  Users,
  BookOpen,
  Building2,
} from "lucide-react";

export interface GianCourse {
  code: string;
  title: string;
  duration: string;
  year: string;
  foreignExpert: string;
  foreignExpertImage?: string;
  foreignInstitution: string;
  hostFaculty: string[];
  hostFacultyImages?: string[];
  department: string;
  link: string;
}

type Cohort = {
  label: string;
  courses: GianCourse[];
};

type FormEntry = {
  title: string;
  description: string;
  pdf: string;
  doc: string;
};

const stats = [
  { label: "Courses Conducted", value: 52, suffix: "+", Icon: BookOpen },
  { label: "International Experts", value: 48, suffix: "+", Icon: Users },
  { label: "Countries Represented", value: 17, suffix: "+", Icon: Globe },
  { label: "Departments Involved", value: 20, suffix: "+", Icon: Building2 },
];

const objectives = [
  {
    Icon: GraduationCap,
    title: "Faculty Development",
    description:
      "Faculty learn and share teaching skills in cutting-edge areas alongside international experts.",
  },
  {
    Icon: Globe,
    title: "International Exposure",
    description:
      "Students and faculty interact with leading academic and industry experts from across the world.",
  },
  {
    Icon: Handshake,
    title: "Research Collaboration",
    description:
      "Create lasting avenues for collaborative research between host and visiting faculty.",
  },
  {
    Icon: Building2,
    title: "Industry Interaction",
    description:
      "Technical professionals from Indian industry update their knowledge in relevant emerging areas.",
  },
  {
    Icon: BookOpen,
    title: "Advanced Learning",
    description:
      "High-quality video and print course material is developed for wider use by students and teachers.",
  },
  {
    Icon: Rocket,
    title: "Innovation Ecosystem",
    description:
      "New pedagogic methods in emerging topics of national and international interest are documented.",
  },
];

const featureCards = [
  { Icon: Globe, label: "Global Faculty" },
  { Icon: GraduationCap, label: "Academic Excellence" },
  { Icon: Handshake, label: "Research Collaboration" },
  { Icon: Rocket, label: "Knowledge Exchange" },
];

const subjectAreas = [
  "Engineering",
  "Physical Sciences",
  "Mathematical & Computer Sciences",
  "Life Sciences & Healthcare",
  "Electronics, Electrical & ICT",
  "Management",
  "Social Sciences",
  "Humanities & Liberal Arts",
  "Architecture, Design & Planning",
  "Law & Interdisciplinary Studies",
  "Chemical & Material Sciences",
  "Earth & Environment Sciences",
];

const ongoingCourses: GianCourse[] = [
  {
    code: "2411173",
    title: "Combustion Theory and Applications",
    duration: "25 Nov – 6 Dec, 2024",
    year: "2024",
    foreignExpert: "Prof. Detlev Markus",
    foreignInstitution: "PTB Braunschweig, Germany",
    hostFaculty: ["Dr. Niranjan Sahoo"],
    department: "Mechanical Engineering",
    link: "https://iitg.ac.in/cet/gian/2024/nsahoo",
  },
  {
    code: "2411053",
    title:
      "Standard Model Effective Field Theories — Higgs, Neutrinos & Dark Matter",
    duration: "9 – 13 Dec, 2024",
    year: "2024",
    foreignExpert: "Prof. Jose Wudka",
    foreignExpertImage: "/faculty/jose_wudka.jpg",
    foreignInstitution: "UC Riverside, USA",
    hostFaculty: ["Dr. Subhaditya Bhattacharya"],
    hostFacultyImages: ["/gian/subhab.jpg"],
    department: "Physics",
    link: "https://iitg.ac.in/cet/gian/2024/sbhattacharya",
  },
  {
    code: "2411163",
    title: "Modeling Linguistic Diversity & Prosodic Typology with ML",
    duration: "20 – 24 Jan, 2025",
    year: "2025",
    foreignExpert: "Dr. Juraj Simko",
    foreignInstitution: "University of Helsinki, Finland",
    hostFaculty: ["Dr. Priyankoo Sarmah"],
    department: "Humanities and Social Sciences",
    link: "https://iitg.ac.in/cet/gian/2024/psarmah",
  },
  {
    code: "2411168",
    title: "Product Service System Design: Methods and Tools",
    duration: "27 – 31 Jan, 2025",
    year: "2025",
    foreignExpert: "Prof. Tomohiko Sakao",
    foreignInstitution: "Linköping University, Sweden",
    hostFaculty: ["Prof. Pratul Ch Kalita"],
    department: "Design and School of Business",
    link: "https://iitg.ac.in/cet/gian/2024/pckalita",
  },
  {
    code: "2411164",
    title: "Optimizing Transport Networks: Advancements & R&D Needs",
    duration: "27 – 31 Jan, 2025",
    year: "2025",
    foreignExpert: "Dr. Ashish Bhaskaar",
    foreignInstitution: "QUT, Brisbane, Australia",
    hostFaculty: ["Dr. Akhilesh Kumar Maurya", "Dr. Nipjyoti Bharadwaj"],
    department: "Civil Engineering",
    link: "https://iitg.ac.in/cet/gian/2024/amaurya/",
  },
  {
    code: "2411191",
    title: "Advances in Solar Collector Technologies",
    duration: "3 – 7 Mar, 2025",
    year: "2025",
    foreignExpert: "Prof. Menezo Christophe",
    foreignInstitution: "Director, National Solar Energy, France",
    hostFaculty: ["Dr. Pankaj Kalita"],
    department: "Energy",
    link: "https://iitg.ac.in/cet/gian/2024/pkalita/",
  },
  {
    code: "2411165",
    title: "Explainable AI for Cybersecurity",
    duration: "10 – 21 Mar, 2025",
    year: "2025",
    foreignExpert: "Prof. Prabhat Mishra",
    foreignInstitution: "University of Florida, USA",
    hostFaculty: ["Dr. Chandan Karfa"],
    department: "Computer Science & Engineering",
    link: "https://iitg.ac.in/cet/gian/2024/ckarfa/",
  },
  {
    code: "2411169",
    title: "Improving Traffic Safety with Data & Emerging Technologies",
    duration: "24 – 28 Mar, 2025",
    year: "2025",
    foreignExpert: "Prof. Shashi Sathisan Nambisan",
    foreignInstitution: "UNLV Transportation Research Center, USA",
    hostFaculty: ["Dr. Nipjyoti Bharadwaj", "Dr. Akhilesh Kumar Maurya"],
    department: "Civil Engineering",
    link: "https://iitg.ac.in/cet/gian/2024/nbharadwaj",
  },
  {
    code: "2411184",
    title: "Spintronics Memory: Physics and Technology",
    duration: "14 – 24 May, 2025",
    year: "2025",
    foreignExpert: "Dr. S N Piramanayagam",
    foreignInstitution: "Nanyang Technological University, Singapore",
    hostFaculty: ["Dr. Tanmay"],
    department: "Electronics and Electrical Engineering",
    link: "https://iitg.ac.in/cet/gian/2025/tdutta",
  },
  {
    code: "2700069",
    title: "Climate-Resilient Transportation Geotechnics",
    duration: "18 – 22 Aug, 2025",
    year: "2025",
    foreignExpert: "Claudia E. Zapata",
    foreignInstitution: "Arizona State University, USA",
    hostFaculty: ["Prof. Bharat Venkata Tadikonda"],
    department: "Civil Engineering",
    link: "https://iitg.ac.in/cet/gian/2025/tvbharat/",
  },
  {
    code: "2700016",
    title: "Secure and Sustainable Computing",
    duration: "25 – 29 Aug, 2025",
    year: "2025",
    foreignExpert: "Prof. Amit Kumar Singh",
    foreignInstitution: "University of Essex, UK",
    hostFaculty: ["Dr. John Jose", "Dr. Moumita Patra"],
    department: "Computer Science & Engineering",
    link: "https://iitg.ac.in/cet/gian/2025/mpatra/",
  },
  {
    code: "2411058",
    title: "Circular Bio-economy: Urban Bio-waste & Wastewater Valorization",
    duration: "17 – 21 Nov, 2025",
    year: "2025",
    foreignExpert: "Prof. Irini Angelidaki",
    foreignInstitution: "DTU, Copenhagen, Denmark",
    hostFaculty: ["Prof. Kaustubha Mohanty"],
    department: "Chemical Engineering",
    link: "https://iitg.ac.in/cet/gian/2024/kmohanty",
  },
  {
    code: "2511022",
    title: "Impact of Wind Power Plants on Radar Systems",
    duration: "1 – 5 Dec, 2025",
    year: "2025",
    foreignExpert: "Jan Pidanic",
    foreignInstitution: "University of Pardubice, Czech Republic",
    hostFaculty: ["Prof. Gaurav Trivedi", "Dr. Ashwini Sawant"],
    department: "Electronics and Electrical Engineering",
    link: "https://iitg.ac.in/cet/gian/2025/ashwinis/",
  },
];

/* ----------------------------- Past cohorts (real, by original section) - */
const pastCohorts: Cohort[] = [
  {
    label: "2021 – 2022",
    courses: [
      {
        code: "191006L04",
        title: "Modeling and Simulation in Energy Storage",
        duration: "3 – 9 Jan 2022 (Virtual)",
        year: "2022",
        foreignExpert: "Dr. Partha P. Mukherjee",
        foreignInstitution: "Purdue University, USA",
        hostFaculty: ["Dr. Amaresh Dalal"],
        department: "Mechanical Engineering",
        link: "https://www.iitg.ac.in/cet/gian/2022/modeling and simulation in energy storage/index.html",
      },
      {
        code: "191006C02",
        title: "Spatial Data Science for Disaster Management",
        duration: "3 – 14 Jan 2022 (Virtual)",
        year: "2022",
        foreignExpert: "Prof. Sudhanshu Panda",
        foreignInstitution: "University of North Georgia, USA",
        hostFaculty: ["Prof. Subashisa Dutta"],
        department: "Civil Engineering",
        link: "https://www.iitg.ac.in/cet/gian/2022/spatial data science in disaster management/index.html",
      },
      {
        code: "191006L02",
        title:
          "Blast and Shock Resistant Bio-Inspired Functional Materials Design Methodologies",
        duration: "10 – 19 Jan 2022 (Virtual)",
        year: "2022",
        foreignExpert: "Prof. A. M. Rajendran",
        foreignInstitution: "University of Mississippi, USA",
        hostFaculty: ["Dr. Prasenjit Khanikar", "Prof. Niranjan Sahoo"],
        department: "Mechanical Engineering",
        link: "https://www.iitg.ac.in/cet/gian/2022/blast and shock resistant/index.html",
      },
    ],
  },
  {
    label: "2019 – 2020",
    courses: [
      {
        code: "171006G02",
        title: "Road Safety Engineering",
        duration: "24 – 28 Jun 2019",
        year: "2019",
        foreignExpert: "Prof. Srinivas S. Pulugurtha",
        foreignInstitution: "UNC Charlotte, USA",
        hostFaculty: ["Prof. Akhilesh Kumar Maurya"],
        department: "Civil Engineering",
        link: "http://www.iitg.ac.in/maurya/GIAN-RSE/",
      },
      {
        code: "171006L03",
        title:
          "Isothermal Near-Net Shape Forging of Aluminum Alloys: Advances and Inventions",
        duration: "8 – 12 Jul 2019",
        year: "2019",
        foreignExpert: "Dr. Pavel A. Petrov",
        foreignInstitution: "Moscow Polytechnic University, Russia",
        hostFaculty: ["Dr. U.S. Dixit"],
        department: "Mechanical Engineering",
        link: "https://www.iitg.ac.in/cet/gian/2019/udixit/index.html",
      },
      {
        code: "171006H03",
        title:
          "RNA Interference and Epigenetic Control of Gene Expression in Plants",
        duration: "11 – 20 Nov 2019",
        year: "2019",
        foreignExpert: "Prof. Bernard Carroll",
        foreignInstitution: "University of Queensland, Australia",
        hostFaculty: ["Prof. Lingaraj Sahoo"],
        department: "Biotechnology",
        link: "https://lingarajsahoo.wixsite.com/gian",
      },
      {
        code: "171006H01",
        title: "Engineering Strategies to Restore the Nervous System",
        duration: "2 – 13 Dec 2019",
        year: "2019",
        foreignExpert: "Dr. D. Kacy Cullen",
        foreignInstitution:
          "University of Pennsylvania & Philadelphia VA Medical Center, USA",
        hostFaculty: ["Prof. Utpal Bora"],
        department: "Biotechnology",
        link: "https://www.iitg.ac.in/cet/gian/2019/ub/index.html",
      },
    ],
  },
  {
    label: "2017 – 2018",
    courses: [
      {
        code: "171006G01",
        title: "Advances in Combustion and Gasification Technology",
        duration: "29 Oct – 2 Nov 2018",
        year: "2018",
        foreignExpert: "Prof. Yoshinori Itaya",
        foreignInstitution: "Gifu University, Japan",
        hostFaculty: ["Dr. Pankaj Kalita", "Prof. Pinakeswar Mahanta"],
        department: "Centre for Energy / Mechanical Engineering",
        link: "https://www.iitg.ac.in/cet/gian/2017/pkalita/",
      },
      {
        code: "171006L04",
        title:
          "Physical Modelling of Multiphase Processes in Mineral and Chemical Processing",
        duration: "23 – 28 Oct 2017",
        year: "2017",
        foreignExpert: "Prof. Geoffrey Evans",
        foreignInstitution: "University of Newcastle, UK",
        hostFaculty: ["Dr. Raghvendra Gupta"],
        department: "Chemical Engineering",
        link: "https://www.iitg.ac.in/cet/gian/brochure/Physical Modelling of Multiphase Processes in Mineral and Chemical Processing.pdf",
      },
      {
        code: "171006D03",
        title: "Empirical Mode Decomposition and its Applications",
        duration: "23 – 27 Oct 2017",
        year: "2017",
        foreignExpert: "Prof. Patrick Flandrin",
        foreignInstitution:
          "Centre National de la Recherche Scientifique, France",
        hostFaculty: ["Prof. S. R. M. Prasanna", "Prof. R. Sinha"],
        department: "Electronics and Electrical Engineering",
        link: "https://www.iitg.ac.in/cet/gian/brochure/EMD.pdf",
      },
      {
        code: "171006K02",
        title: "Autonomic Networks",
        duration: "30 Oct – 3 Nov 2017",
        year: "2017",
        foreignExpert: "Prof. Sébastien Tixeuil",
        foreignInstitution: "Sorbonne University, France",
        hostFaculty: ["Dr. P. S. Mandal"],
        department: "Mathematics",
        link: "http://www.iitg.ernet.in/psm/GIAN-AN/",
      },
      {
        code: "171006L07",
        title: "Crystal Plasticity Modelling of Micro-Machining Processes",
        duration: "11 – 15 Dec 2017",
        year: "2017",
        foreignExpert: "Dr. Anish Roy",
        foreignInstitution: "Loughborough University, UK",
        hostFaculty: ["Prof. U. S. Dixit"],
        department: "Mechanical Engineering",
        link: "https://www.iitg.ac.in/cet/gian/2017/udixit/index.html",
      },
      {
        code: "171006F01",
        title: "Harmonic Grammar Models and Methods",
        duration: "16 – 22 Dec 2017",
        year: "2017",
        foreignExpert: "Prof. Joe Pater",
        foreignInstitution: "University of Massachusetts, Amherst, USA",
        hostFaculty: ["Dr. Shakuntala Mahanta"],
        department: "Humanities and Social Science",
        link: "https://sites.google.com/view/harmonic-grammar/home",
      },
      {
        code: "171006M01",
        title: "Electroweak Symmetry Breaking, Flavour Physics and BSM",
        duration: "18 – 22 Dec 2017",
        year: "2017",
        foreignExpert: "Prof. K. S. Babu",
        foreignInstitution: "Oklahoma State University, USA",
        hostFaculty: ["Prof. P. Poulose"],
        department: "Physics",
        link: "http://www.iitg.ernet.in/cet/gian/2017/ppoulose/",
      },
      {
        code: "171006L10",
        title:
          "Risk Based Damage-tolerant Seismic Design of Structures — A New Paradigm",
        duration: "18 – 27 Dec 2017",
        year: "2017",
        foreignExpert: "Prof. Achintya Haldar",
        foreignInstitution: "University of Arizona, USA",
        hostFaculty: ["Dr. Amit Shelke"],
        department: "Civil Engineering",
        link: "https://www.iitg.ac.in/cet/gian/2017/ashelke/",
      },
      {
        code: "171006K03",
        title: "Modeling and Verification of Cyber-Physical Systems",
        duration: "1 – 5 Jan 2018",
        year: "2018",
        foreignExpert: "Dr. Sayan Mitra",
        foreignInstitution: "University of Illinois at Urbana–Champaign, USA",
        hostFaculty: ["Prof. Purandar Bhaduri"],
        department: "Computer Science",
        link: "https://www.iitg.ac.in/cet/gian/brochure/Modeling and Verification of Cyber-Physical Systems.pdf",
      },
      {
        code: "171006D06",
        title: "Speech Enhancement for Hearing Aids",
        duration: "23 – 27 Jan 2018",
        year: "2018",
        foreignExpert: "Prof. Rainer Martin",
        foreignInstitution: "Ruhr Universität Bochum, Germany",
        hostFaculty: ["Prof. S. R. M. Prasanna"],
        department: "Electronics and Electrical Engineering",
        link: "#",
      },
      {
        code: "171006D02",
        title:
          "Brain-Computer Interfaces for Speech Communication: Theory and Applications",
        duration: "26 Feb – 2 Mar 2018",
        year: "2018",
        foreignExpert: "Prof. Hugo Leonardo Rufiner",
        foreignInstitution: "University of Nebraska–Lincoln, USA",
        hostFaculty: ["Prof. S. R. M. Prasanna", "Prof. R. Sinha"],
        department: "Electronics and Electrical Engineering",
        link: "https://www.iitg.ac.in/cet/gian/brochure/GIAN-2018-BCI-IITG_brochure.pdf",
      },
      {
        code: "171006B02",
        title: "Biofuel Cell Technology: Fundamentals and Applications",
        duration: "23 – 27 Apr 2018",
        year: "2018",
        foreignExpert: "Prof. Piet Lens",
        foreignInstitution: "IHE Delft Institute, Netherlands",
        hostFaculty: ["Prof. Kannan Pakshirajan", "Dr. Debasish Das"],
        department: "Biotechnology",
        link: "https://www.iitg.ac.in/cet/gian/2017/kpakshirajan/",
      },
      {
        code: "171006D05",
        title: "Mixed-Criticality Real-Time Systems",
        duration: "21 – 25 May 2018",
        year: "2018",
        foreignExpert: "Prof. Sanjoy Baruah",
        foreignInstitution: "University of North Carolina, USA",
        hostFaculty: ["Dr. Arnab Sarkar", "Dr. Santosh Biswas"],
        department: "Computer Science",
        link: "https://www.iitg.ac.in/cet/gian/brochure/GIAN_Brochure_Arnab_Santosh_Revised.pdf",
      },
      {
        code: "171006B04",
        title: "Thermal Processing of Foods",
        duration: "28 May – 1 Jun 2018",
        year: "2018",
        foreignExpert: "Dr. K. P. Sandeep",
        foreignInstitution: "North Carolina State University, USA",
        hostFaculty: ["Dr. R. Anandalakshmi"],
        department: "Chemical Engineering",
        link: "http://www.iitg.ernet.in/pmmp/",
      },
      {
        code: "171006B03",
        title: "Density Functional Theory for Heterogeneous Catalysis",
        duration: "6 – 11 Aug 2018",
        year: "2018",
        foreignExpert: "Dr. Neeraj Rai",
        foreignInstitution: "Mississippi State University, USA",
        hostFaculty: ["Dr. Amit Kumar", "Dr. R. K. Upadhyay"],
        department: "Chemical Engineering",
        link: "http://www.iitg.ac.in/gian_chem/",
      },
      {
        code: "171006C01",
        title:
          "Role of Fluid Flow and Mass Transport in Porous Media for Groundwater Remediation",
        duration: "20 – 24 Aug 2018",
        year: "2018",
        foreignExpert: "Dr. Diganta Bhusan Das",
        foreignInstitution: "Loughborough University, UK",
        hostFaculty: ["Dr. Suresh A. Kartha"],
        department: "Civil Engineering",
        link: "https://www.iitg.ac.in/cet/gian/brochure/groundwaterremediation.pdf",
      },
      {
        code: "171006G03",
        title: "Urban Traffic Modeling and Control",
        duration: "4 – 8 Sep 2018",
        year: "2018",
        foreignExpert: "Prof. R Jaykrishnan",
        foreignInstitution: "Henry Samueli School of Engineering, USA",
        hostFaculty: ["Dr. Akhilesh Kumar Maurya"],
        department: "Civil Engineering",
        link: "http://www.iitg.ac.in/maurya/GIAN-UTMAC/",
      },
    ],
  },
  {
    label: "2016 – 2017",
    courses: [
      {
        code: "161006L02",
        title: "Multiphysics Coupling in Energy Storage",
        duration: "26 – 30 Jun 2017",
        year: "2017",
        foreignExpert: "Dr. Partha P. Mukherjee",
        foreignInstitution: "Texas A&M University, USA",
        hostFaculty: ["Dr. Amaresh Dalal"],
        department: "Mechanical Engineering",
        link: "https://www.iitg.ac.in/cet/gian/brochure/gianbrfmt_mukherjee_dalal.pdf",
      },
      {
        code: "161006D01",
        title: "Scalable On-chip Interconnects for Many-core Systems",
        duration: "24 – 30 May 2017",
        year: "2017",
        foreignExpert: "Dr. Maurizio Palesi",
        foreignInstitution: "University of Catania, Italy",
        hostFaculty: ["Dr. John Jose"],
        department: "Computer Science Engineering",
        link: "https://www.iitg.ac.in/cet/gian/brochure/johnjose_161006D01.pdf",
      },
      {
        code: "161006D02",
        title: "Advanced Sinusoidal Modeling of Speech and Applications",
        duration: "26 – 30 Dec 2016",
        year: "2016",
        foreignExpert: "Prof. Yannis Stylianou",
        foreignInstitution: "Cambridge Research Laboratory, UK",
        hostFaculty: ["Prof. S. R. Mahadeva Prasanna", "Prof. S. Dandapat"],
        department: "Electronics Engineering",
        link: "https://www.iitg.ac.in/cet/gian/brochure/gian_speech_iitg_2016_revised brochure_prasanna.pdf",
      },
      {
        code: "161006B01",
        title:
          "Integration of Molecular Design to Process Simulation for Industrial Chemical Products and Processes",
        duration: "12 – 17 Dec 2016",
        year: "2016",
        foreignExpert: "Dr. Jose Palomar",
        foreignInstitution: "Autonomous University of Madrid, Spain",
        hostFaculty: ["Prof. Tamal Banerjee"],
        department: "Chemical Engineering",
        link: "http://www.iitg.ac.in/tamalb/GIAN.html",
      },
      {
        code: "161006L04",
        title: "Design of Electric Vehicle Systems",
        duration: "28 Nov – 9 Dec 2016",
        year: "2016",
        foreignExpert: "Dr. Kari Tammi",
        foreignInstitution: "Aalto University, Finland",
        hostFaculty: ["Dr. Karuna Kalita"],
        department: "Mechanical Engineering",
        link: "https://www.iitg.ac.in/cet/gian/brochure/GIANBrochure_KK_KT.pdf",
      },
      {
        code: "161006L01",
        title: "Electricity Systems and Future Scenarios",
        duration: "6 – 11 Nov 2016",
        year: "2016",
        foreignExpert: "Dr. Richard Blanchard",
        foreignInstitution: "Loughborough University, UK",
        hostFaculty: ["Prof. Pinakeswar Mahanta"],
        department: "Mechanical Engineering",
        link: "https://www.iitg.ac.in/cet/gian/gian-website-reservoir/prof.p.mahanta/index.html",
      },
      {
        code: "161006B02",
        title:
          "Reservoir Simulation – Mathematical Techniques in Oil and Gas Recovery",
        duration: "18 – 29 Jul 2016",
        year: "2016",
        foreignExpert: "Prof. Mayank Tyagi",
        foreignInstitution: "Louisiana State University, USA",
        hostFaculty: ["Prof. Anugrah Singh"],
        department: "Chemical Engineering",
        link: "https://www.iitg.ac.in/cet/gian/gian-website-reservoir/reservoir.html",
      },
      {
        code: "161006L03",
        title: "Advances in Ultra-precision Machining Processes",
        duration: "4 – 15 Jul 2016",
        year: "2016",
        foreignExpert: "Dr. Saurav Goel",
        foreignInstitution: "Queen's University Belfast, UK",
        hostFaculty: ["Dr. Shrikrishna N. Joshi"],
        department: "Mechanical Engineering",
        link: "#",
      },
      {
        code: "151006L03",
        title: "Infrastructure Projects Planning and Modelling",
        duration: "27 Jun – 8 Jul 2016",
        year: "2016",
        foreignExpert: "Dr. Hemanta Doloi",
        foreignInstitution: "University of Melbourne, Australia",
        hostFaculty: ["Dr. L. Boeing Singh"],
        department: "Civil Engineering",
        link: "#",
      },
      {
        code: "151006K01",
        title: "Distributed Network Algorithms",
        duration: "27 Jun – 1 Jul 2016",
        year: "2016",
        foreignExpert: "Dr. Stefan Schmid",
        foreignInstitution: "Aalborg University, Denmark",
        hostFaculty: ["Dr. Partha Sarathi Mandal"],
        department: "Mathematics",
        link: "#",
      },
      {
        code: "151006L02",
        title: "Green Material Forming and Joining",
        duration: "6 – 11 Jun 2016",
        year: "2016",
        foreignExpert: "Prof. Jay S. Gunasekera",
        foreignInstitution: "Ohio University, USA",
        hostFaculty: ["Dr. R. Ganesh Narayanan"],
        department: "Mechanical Engineering",
        link: "http://www.iitg.ernet.in/gmfj/",
      },
      {
        code: "151006L01",
        title: "Boiling Heat Transfer",
        duration: "23 May – 3 Jun 2016",
        year: "2016",
        foreignExpert: "Prof. Vijay Dhir",
        foreignInstitution: "University of California, Los Angeles, USA",
        hostFaculty: ["Prof. Gautam Biswas", "Dr. Amaresh Dalal"],
        department: "Mechanical Engineering",
        link: "#",
      },
      {
        code: "151006N01",
        title: "Campaigns, Media & Influence",
        duration: "16 – 20 May 2016",
        year: "2016",
        foreignExpert: "Prof. Holli A. Semetko",
        foreignInstitution: "Global Affairs, Canada",
        hostFaculty: ["Dr. Pahi Saikia"],
        department: "Humanities and Social Science",
        link: "http://www.iitg.ernet.in/pahi/GIAN/",
      },
      {
        code: "151006A02",
        title: "Optimization Methods for Engineering Planning and Design",
        duration: "4 – 8 May 2016",
        year: "2016",
        foreignExpert: "Prof. Fouad Bennis",
        foreignInstitution: "École Centrale de Nantes, France",
        hostFaculty: ["Prof. Rajib Kumar Bhattacharjy"],
        department: "Civil Engineering",
        link: "#",
      },
      {
        code: "151006A01",
        title: "Optimization Methods to Groundwater Resources Management",
        duration: "7 – 11 Mar 2016",
        year: "2016",
        foreignExpert: "Prof. Konstantinos Katsifarakis",
        foreignInstitution: "Aristotle University of Thessaloniki, Greece",
        hostFaculty: ["Dr. Manish Kumar Goyal"],
        department: "Civil Engineering",
        link: "#",
      },
    ],
  },
];

/* ----------------------------- Forms / downloads ------------------------- */
const forms: (FormEntry & {
  group: "proposal" | "consent" | "report";
  formNo?: string;
})[] = [
  {
    group: "proposal",
    title: "Course Proposal Format",
    description: "Standard template for submitting a new GIAN course proposal.",
    pdf: "https://www.iitg.ac.in/intranet/gian/pdf/Course Proposal_GIAN_Template_24-25.pdf",
    doc: "https://www.iitg.ac.in/intranet/gian/doc/Course Proposal_GIAN_Template_24-25.docx",
  },
  {
    group: "proposal",
    title: "Brochure (Sample Copy)",
    description:
      "Reference brochure format used to publicize an approved course.",
    pdf: "https://www.iitg.ac.in/intranet/gian/pdf/gianbrfmt.pdf",
    doc: "https://www.iitg.ac.in/intranet/gian/doc/gianbrfmt.docx",
  },
  {
    group: "consent",
    title: "Consent Form (Host Faculty)",
    description: "Consent declaration to be filed by the host faculty.",
    pdf: "https://www.iitg.ac.in/intranet/gian/pdf/Consent form_draft_24-25.pdf",
    doc: "https://www.iitg.ac.in/intranet/gian/doc/Consent form_draft_24-25.docx",
  },
  {
    group: "consent",
    title: "Foreign Faculty Consent Form",
    description: "Consent declaration from the visiting international expert.",
    pdf: "https://www.iitg.ac.in/intranet/gian/pdf/foreignfaculty.pdf",
    doc: "https://www.iitg.ac.in/intranet/gian/doc/Foreign Faculty Consent form.docx",
  },
  {
    group: "proposal",
    formNo: "Form A",
    title: "Checklist for Event",
    description: "Pre-event checklist for the course coordinator.",
    pdf: "https://www.iitg.ac.in/intranet/gian/forms/form_a_checklist_for_event.pdf",
    doc: "https://www.iitg.ac.in/intranet/gian/forms/form_a_checklist_for_event.docx",
  },
  {
    group: "proposal",
    formNo: "Form B",
    title: "Invitation Letter (for VISA)",
    description:
      "Standard format used to apply for a foreign expert's business visa.",
    pdf: "https://www.iitg.ac.in/intranet/gian/forms/form_b_gian_invitation_letter_to_foreign_faculty.pdf",
    doc: "https://www.iitg.ac.in/intranet/gian/forms/form_b_gian_invitation_letter_to_foreign_faculty.docx",
  },
  {
    group: "report",
    formNo: "Form C",
    title: "Bill of Honorarium to External Expert",
    description: "Honorarium claim for the visiting international faculty.",
    pdf: "https://www.iitg.ac.in/intranet/gian/forms/Form D_Bill of honorarium to the External Expert.pdf",
    doc: "https://www.iitg.ac.in/intranet/gian/forms/Form D_Bill of honorarium to the External Expert.docx",
  },
  {
    group: "report",
    formNo: "Form D",
    title: "GIAN TA Form",
    description: "Travel allowance claim form for the course.",
    pdf: "https://www.iitg.ac.in/intranet/gian/forms/form_e_gian_ta_forms.pdf",
    doc: "https://www.iitg.ac.in/intranet/gian/forms/form_e_gian_ta_forms.docx",
  },
  {
    group: "report",
    formNo: "Form E",
    title: "Course Evaluation Form",
    description: "Used to evaluate and grade participant performance.",
    pdf: "https://www.iitg.ac.in/intranet/gian/forms/form_f_gian_course_evaluation_form.pdf",
    doc: "https://www.iitg.ac.in/intranet/gian/forms/form_f_gian_course_evaluation_form.docx",
  },
  {
    group: "report",
    formNo: "Form F",
    title: "Settlement of Accounts",
    description:
      "Final account settlement for funds disbursed under the course.",
    pdf: "https://www.iitg.ac.in/intranet/gian/forms/form_g_gian_settlement_of_accounts.pdf",
    doc: "https://www.iitg.ac.in/intranet/gian/forms/form_g_gian_settlement_of_accounts.docx",
  },
  {
    group: "report",
    formNo: "Form G",
    title: "Course Completion Report",
    description: "Final report format submitted by the course coordinator.",
    pdf: "https://www.iitg.ac.in/intranet/gian/forms/form_h_format_for_course_completion_report.pdf",
    doc: "https://www.iitg.ac.in/intranet/gian/forms/form_h_format_for_course_completion_report.docx",
  },
  {
    group: "report",
    formNo: "Form H",
    title: "Utilization Certificate",
    description: "UC for funds sanctioned under the GIAN grant.",
    pdf: "https://www.iitg.ac.in/intranet/gian/forms/form_i_uc_gian.pdf",
    doc: "https://www.iitg.ac.in/intranet/gian/forms/form_i_uc_gian.docx",
  },
  {
    group: "report",
    title: "Certificate of Participation",
    description:
      "Issued by the Office of the Head, CET (Local Coordinator, GIAN).",
    pdf: "https://www.iitg.ac.in/intranet/gian/forms/gian_certificate_format.pdf",
    doc: "https://www.iitg.ac.in/intranet/gian/forms/gian_certificate_format.docx",
  },
];

/* ----------------------------- Reference links --------------------------- */
const referenceLinks = [
  {
    label: "GIAN Guidelines — Phase IV",
    description: "Official scheme guidelines issued for the current phase.",
    href: "https://www.iitg.ac.in/intranet/gian/pdf/guidline phase 4.pdf",
  },
  {
    label: "Manual for Course Coordinator",
    description: "Step-by-step operating manual for running a GIAN course.",
    href: "http://kaziranga.iitg.ernet.in/~cet/intranet/gian/pdf/manualforCC.pdf",
  },
  {
    label: "Proposal Tracking Portal",
    description: "Track a submitted proposal on the national GIAN portal.",
    href: "http://www.gian.iitkgp.ac.in/ccourses/search",
  },
  {
    label: "GIAN Annual Report",
    description: "Yearly summary of courses, experts and outcomes.",
    href: "https://www.iitg.ac.in/cet/gian/annual report/GIAN Annual Report.pdf",
  },
];

const webcastUrl = "https://webcast.gov.in/gian/iitguwahati/";

/* ----------------------------- Proposal submission rules ------------------ */
const proposalRules = {
  subject: {
    heading: "Subject",
    body: "Subjects should typically be interdisciplinary, industry-oriented, or research-oriented in nature. Courses are preferably offered during Summer and Winter vacation — though this is not a restriction; they may be taught within the regular academic schedule without hampering other activities.",
  },
  foreignExpert: {
    heading: "Foreign Expert",
    points: [
      "Must be an expert in the subject area.",
      "Must be working in an academic institution, industry, research organisation, or as an independent researcher of international repute.",
      "Encouraged to engage in a long-term collaborative research programme with faculty of the host institute.",
      "Association of each foreign expert is restricted to a maximum of 2 distinctly different proposals.",
      "Only one foreign expert is permitted per course.",
    ],
    note: "The proposer is expected to be aware that if the proposal is selected, the international faculty is expected to accept participation.",
  },
  process: {
    heading: "Submission Process",
    steps: [
      "Receive an invitation carrying a specific link for course proposal submission from the Local Coordinator / PI – GIAN, IIT Guwahati (Head, CET) through the GIAN portal.",
      "Upload (a) the course proposal and (b) consent from the foreign expert in both standard Word and PDF format on the shared link.",
      "The uploaded proposal is verified by the Local Coordinator / PI – GIAN, and modified and resubmitted if required.",
      "After verification, the Local Coordinator submits the proposal electronically to the GIAN office for review by the Sectional Committee and GIAN Implementation Committee.",
      "Each institute is permitted to offer a maximum of 50 courses, with a maximum of 2 courses per host faculty / course coordinator.",
    ],
  },
};

/* ----------------------------- Implementation summary --------------------- */
const implementationPoints = [
  {
    category: "Credit System",
    icon: "📋",
    items: [
      "A 1-credit course covers 12–14 hours over at least 5 working days.",
      "A 2-credit course covers 24–28 hours over at least 10 working days.",
      "Courses can also span a semester in accordance with the host institute's credit norms.",
    ],
  },
  {
    category: "Dates & Experts",
    icon: "📅",
    items: [
      "Change of course date is allowed; the final start date must be informed to GIAN within 15 days of receiving approval.",
      "Only one foreign expert is permitted per course.",
      "The host faculty must obtain written consent from the foreign expert for video recording and broadcasting.",
    ],
  },
  {
    category: "VISA for Foreign Experts",
    icon: "✈️",
    items: [
      "Foreign experts travel on a Business VISA.",
      "Required documents: Invitation letter from the Director, IITG; MHA documents (available from CET office); copy of the GIAN sanction letter; copy of the course brochure.",
      "Customise and submit the standard Invitation Letter format to hoccet@iitg.ac.in.",
    ],
  },
  {
    category: "Registration & Selection",
    icon: "📝",
    items: [
      "A one-time token registration fee of ₹500 (non-refundable) is charged to all participants on the GIAN portal.",
      "No more than 50% of selected participants should be from the host institution.",
      "Course coordinators shortlist participants by CV; a wait-list must also be maintained.",
      "Course fee for non-students is set by the course coordinator / host institution.",
    ],
  },
  {
    category: "Evaluation & Feedback",
    icon: "🎓",
    items: [
      "Evaluation and grading of participants wanting academic credit is mandatory.",
      "Grades follow the host institution's usual evaluation norms, including assignments, quizzes, and terminal examinations.",
      "Feedback from both foreign experts and participants is mandatory via the GIAN portal.",
      "A course completion report must be submitted by the coordinator to the local coordinator.",
    ],
  },
  {
    category: "Financial Guidelines",
    icon: "💰",
    items: [
      "Maximum budget: USD 8,000 for a one-week course; USD 12,000 for a two-week course.",
      "Of this, up to ₹1.98 lakh (1-week) or ₹2.98 lakh (2-week) can be spent on host faculty honorarium, video recording, and contingencies.",
      "Host faculty honorarium: ₹3,000 per lecture hour, ₹2,500 per tutorial hour, capped at 12 lectures/tutorials total.",
      "TDS of minimum 10% is deducted at source on the foreign expert's honorarium.",
      "Participants bear their own food, transport and accommodation expenses.",
    ],
  },
  {
    category: "MOOC Conversion",
    icon: "🎬",
    items: [
      "All GIAN courses are webcast and archived via the national GIAN portal.",
      "Courses approved for MOOC conversion must be converted within 3 months of completion.",
      "Content follows the SWAYAM four-quadrant framework: e-tutorial, e-content, discussion forum, and assessment.",
      "All content developed with GIAN funding becomes the property of GIAN and SWAYAM.",
    ],
  },
];

const gradeCardSteps = [
  "Course details, enrolment data and participant documents are sent to the Academic Section through the Head, CET, during or right after the course.",
  "Within 5 working days of course completion, the instructor submits grades to the Academic Section via the Head, CET.",
  "Within 10 working days of receiving grades, the Academic Section prepares signed grade cards.",
  "The Office of the Head, CET distributes certificates and grade cards to participants and retains records.",
];

/* ----------------------------- Process timeline --------------------------- */
const timelineSteps = [
  {
    title: "Proposal Submission",
    description:
      "Faculty submits a course proposal with foreign expert consent.",
  },
  {
    title: "Review & Approval",
    description:
      "Sectional Committee and GIAN Implementation Committee review the proposal.",
  },
  {
    title: "Faculty Invitation",
    description:
      "Approved proposals lead to a formal invitation for the international expert.",
  },
  {
    title: "Course Delivery",
    description:
      "The course is delivered jointly by the foreign and host faculty.",
  },
  {
    title: "Evaluation",
    description:
      "Participants are evaluated per the host institution's academic norms.",
  },
  {
    title: "Certification",
    description:
      "Certificates and, where applicable, grade cards are issued to participants.",
  },
];

/* ----------------------------- FAQ ----------------------------------------- */
const faqs = [
  {
    q: "What is GIAN?",
    a: "GIAN (Global Initiative of Academic Networks) is a Government of India scheme that brings internationally renowned faculty to teach short, intensive courses jointly with Indian host faculty — strengthening research and academic ties between Indian institutions and the world.",
  },
  {
    q: "Who can participate?",
    a: "Students and faculty from IIT Guwahati and other institutions can apply through the GIAN portal. Typically, no more than 50% of participants in a course are expected to be from the host institution.",
  },
  {
    q: "How are certificates issued?",
    a: "Certificates of participation are issued by the Office of the Head, CET (Local Coordinator, GIAN). Participants seeking academic credit also receive a grade card, prepared by the Academic Section after the course instructor submits grades.",
  },
  {
    q: "How can faculty propose a course?",
    a: "After receiving an invitation with a course-proposal link from the Local Coordinator/PI – GIAN, faculty upload the course proposal and the foreign expert's consent in Word and PDF format. The proposal is verified locally before being forwarded to the GIAN office for review.",
  },
  {
    q: "What are the eligibility requirements?",
    a: "Each course must be taught jointly by at least one international expert of academic/industry repute and one host-institute faculty member. A foreign expert may be associated with a maximum of 2 distinct proposals, and only one foreign expert is allowed per course.",
  },
];

const coordinator = {
  name: "Dr. Salil Kashyap",
  title: "GIAN Local Coordinator & Head, Centre for Educational Technology",
  photo: "/gian/salil kashyap.jpg",
  email: "hoccet@iitg.ac.in",
  phone: "+91-361-258-3001",
  fax: "+91-361-269-0762",
  location: "IIT Guwahati, Guwahati – 781039, Assam",
};

export {
  stats,
  objectives,
  featureCards,
  subjectAreas,
  ongoingCourses,
  pastCohorts,
  forms,
  referenceLinks,
  webcastUrl,
  proposalRules,
  implementationPoints,
  gradeCardSteps,
  timelineSteps,
  faqs,
  coordinator,
};
export type { Cohort, FormEntry };
