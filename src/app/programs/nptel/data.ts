export type Course = {
  name: string;
  link: string;
  developers: string;
};

export type Department = {
  name: string;
  courses: Course[];
};

export type CourseGroup = {
  type: string;
  departments: Department[];
};

export type CoursePhase = {
  phase: string;
  groups: CourseGroup[];
};

export type RelatedProgram = {
  title: string;
  href: string;
};

export type Stat = {
  label: string;
  value: string;
};

export const phaseTheme = [
  {
    activeTab: "bg-[#7B1113] text-white",
    inactiveTab:
      "bg-white text-slate-600 border border-slate-200 hover:bg-rose-50",
    dot: "bg-[#7B1113]",
    chevron: "text-[#7B1113]",
    linkHover: "hover:text-[#7B1113]",
    developer: "text-[#7B1113]",
  },
  {
    activeTab: "bg-amber-700 text-white",
    inactiveTab:
      "bg-white text-slate-600 border border-slate-200 hover:bg-amber-50",
    dot: "bg-amber-700",
    chevron: "text-amber-700",
    linkHover: "hover:text-amber-700",
    developer: "text-amber-600",
  },
];

export const stats: Stat[] = [
  { label: "Web Courses (Phase I)", value: "15" },
  { label: "Video Courses (Phase I)", value: "05" },
  { label: "Web Courses (Phase II)", value: "64" },
  { label: "Video Courses (Phase II)", value: "16" },
];

// Related programs run by CET, IIT Guwahati (from old CET site)
export const relatedPrograms: RelatedProgram[] = [
  { title: "QIP", href: "https://www.iitg.ac.in/cet/qip.html" },
  { title: "ATAL Academy", href: "https://www.iitg.ac.in/cet/atal.html" },
  { title: "GIAN", href: "https://www.iitg.ac.in/cet/gian.html" },
  { title: "CSS-MOOCS", href: "https://www.iitg.ac.in/cet/css_moocs.html" },
  { title: "Coursera", href: "https://www.iitg.ac.in/cet/coursera.html" },
  { title: "KIT-TEQIP III", href: "https://www.iitg.ac.in/cet/teqip3.html" },
  { title: "KIT-TEQIP II", href: "https://www.iitg.ac.in/cet/teqip2.html" },
  { title: "PMMMNMTT", href: "https://www.iitg.ac.in/cet/pmmmnmtt.html" },
  {
    title: "Teacher's Training",
    href: "https://www.iitg.ac.in/cet/teacherstraining.html",
  },
  { title: "MITACS", href: "https://www.iitg.ac.in/cet/mitacs.html" },
  { title: "E&ICT Academy", href: "http://www.iitg.ac.in/eictacad/" },
  {
    title: "Virtual Lab",
    href: "http://www.vlab.co.in/institute_detail.php?ins=007",
  },
];

export const courseData: CoursePhase[] = [
  {
    phase: "Phase I",
    groups: [
      {
        type: "Web Courses",
        departments: [
          {
            name: "Basic Sciences",
            courses: [
              {
                name: "Engineering Physics I (Experiment)",
                link: "http://nptel.ac.in/courses/122103010/",
                developers:
                  "Prof. Alika Khare, Prof. Pratima Agarwal, Prof. S. Ravi",
              },
              {
                name: "Engineering Physics I (Theory)",
                link: "http://nptel.ac.in/courses/122103011/",
                developers:
                  "Prof. Alika Khare, Prof. Pratima Agarwal, Prof. S. Ravi",
              },
              {
                name: "Mathematics III",
                link: "http://nptel.ac.in/courses/122103012/",
                developers: "Prof. M. Guru Prem Prasad, Prof. Durga C Dalal",
              },
            ],
          },
          {
            name: "Civil Engineering",
            courses: [
              {
                name: "Construction Planning and Management",
                link: "http://nptel.ac.in/courses/105103093/",
                developers: "Prof. Arbind Kumar Singh",
              },
              {
                name: "Fluid Mechanics",
                link: "http://nptel.ac.in/courses/105103095/",
                developers: "Dr. Subhashisa Dutta, Dr. N. Sahoo",
              },
              {
                name: "Soil Mechanics",
                link: "http://nptel.ac.in/courses/105103097/",
                developers: "Prof. Baleshwar Singh",
              },
            ],
          },
          {
            name: "Computer Science and Engineering",
            courses: [
              {
                name: "Computer Organization and Architecture",
                link: "http://nptel.ac.in/courses/106103068/",
                developers: "Prof. Jatindra Kumar Deka",
              },
              {
                name: "Data Structures and Program Methodology",
                link: "http://nptel.ac.in/courses/106103069/",
                developers: "Dr. S.V. Rao, Dr. Pradip K Das",
              },
              {
                name: "Theory of Automata and Formal Languages",
                link: "http://nptel.ac.in/courses/106103070/",
                developers: "Prof. Diganta Goswami",
              },
            ],
          },
          {
            name: "Electronics and Communication Engineering",
            courses: [
              {
                name: "Digital Circuits",
                link: "http://nptel.ac.in/courses/117103064/",
                developers: "Prof. Anil Mahanta, Prof. Roy Paily Palanthinkal",
              },
              {
                name: "Electromagnetic Fields",
                link: "http://nptel.ac.in/courses/117103065/",
                developers: "Prof. Ratnajit Bhattacharjee",
              },
              {
                name: "IC Technology",
                link: "http://nptel.ac.in/courses/117103066/",
                developers:
                  "Prof. Roy Paily Palanthinkal, Prof. Indrajit Chakraborty",
              },
              {
                name: "Probability and Random Processes",
                link: "http://nptel.ac.in/courses/117103067/",
                developers: "Prof. Prabin K Bora",
              },
            ],
          },
          {
            name: "Mechanical Engineering",
            courses: [
              {
                name: "Engineering Mechanics",
                link: "http://nptel.ac.in/courses/112103109/",
                developers: "Prof. U.S. Dixit",
              },
              {
                name: "Mechanical Vibrations",
                link: "http://nptel.ac.in/courses/112103111/",
                developers: "Prof. Rajiv Tiwari, Prof. S.K. Dwivedy",
              },
            ],
          },
        ],
      },
      {
        type: "Video Courses",
        departments: [
          {
            name: "Civil Engineering",
            courses: [
              {
                name: "Design of Steel Structures",
                link: "http://nptel.ac.in/courses/105103094/",
                developers: "Prof. Damodar Maity",
              },
              {
                name: "Hydraulics",
                link: "http://nptel.ac.in/courses/105103096/",
                developers: "Prof. Arup Kumar Sharma",
              },
            ],
          },
          {
            name: "Electronics and Electrical Engineering",
            courses: [
              {
                name: "Basic Electronics",
                link: "http://nptel.ac.in/courses/117103063/",
                developers: "Prof. Chitralekha Mahanta",
              },
            ],
          },
          {
            name: "Mechanical Engineering",
            courses: [
              {
                name: "Engineering Mechanics",
                link: "http://nptel.ac.in/courses/112103108/",
                developers: "Prof. U.S. Dixit, Dr. G. Saravana Kumar",
              },
              {
                name: "Mechanical Vibrations",
                link: "http://nptel.ac.in/courses/112103112/",
                developers: "Prof. Rajiv Tiwari, Prof. S.K. Dwivedy",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    phase: "Phase II",
    groups: [
      {
        type: "Web Courses",
        departments: [
          {
            name: "Aerospace Engineering",
            courses: [
              {
                name: "Hypersonic Aerodynamics",
                link: "http://nptel.ac.in/courses/101103003/",
                developers: "Dr. N. Sahoo, Dr. Vinayak Kulkarni",
              },
              {
                name: "Principles of Fluid Dynamics",
                link: "http://nptel.ac.in/courses/101103004/",
                developers: "Dr. N. Sahoo, Dr. Vinayak Kulkarni",
              },
            ],
          },
          {
            name: "Biotechnology",
            courses: [
              {
                name: "Cell Biology",
                link: "http://nptel.ac.in/courses/102103012/",
                developers: "Dr. Sanjukta Patra",
              },
              {
                name: "Genetic Engineering & Applications",
                link: "http://nptel.ac.in/courses/102103013/",
                developers: "Dr. Utpal Bora",
              },
              {
                name: "Plant Biotechnology",
                link: "http://nptel.ac.in/courses/102103016/",
                developers: "Dr. Rakhi Chaturvedi",
              },
              {
                name: "Proteomics and Genomics",
                link: "http://nptel.ac.in/courses/102103017/",
                developers: "Dr. Vikash Kumar Dubey",
              },
              {
                name: "Cellular and Molecular Immunology",
                link: "http://nptel.ac.in/courses/102103038/",
                developers: "Dr. Sachin Kumar",
              },
              {
                name: "General Virology",
                link: "http://nptel.ac.in/courses/102103039/",
                developers: "Dr. Sachin Kumar",
              },
              {
                name: "Gene Therapy",
                link: "http://nptel.ac.in/courses/102103041/",
                developers: "Dr. Sachin Kumar",
              },
              {
                name: "Bio-analytical Techniques and Bioinformatics",
                link: "http://nptel.ac.in/courses/102103044/",
                developers: "Dr. Nitin Chaudhary, Dr. Vishal Trivedi",
              },
              {
                name: "Fundamentals of Biotechnology",
                link: "http://nptel.ac.in/courses/102103045/",
                developers: "Dr. Vishal Trivedi",
              },
              {
                name: "Basic Biology",
                link: "http://nptel.ac.in/courses/122103039/",
                developers: "Dr. Vishal Trivedi",
              },
              {
                name: "Experimental Biotechnology",
                link: "http://nptel.ac.in/courses/102103047/",
                developers: "Dr. Nitin Chaudhary, Dr. Vishal Trivedi",
              },
              {
                name: "Microbiology",
                link: "http://nptel.ac.in/courses/102103015/",
                developers: "Dr. Gurvinder Kaur Saini",
              },
            ],
          },
          {
            name: "Chemical Engineering",
            courses: [
              {
                name: "Catalyst Science and Technology",
                link: "http://nptel.ac.in/courses/103103026/",
                developers: "Dr. Mahuya De",
              },
              {
                name: "Chemical Engineering Design - II",
                link: "http://nptel.ac.in/courses/103103027/",
                developers:
                  "Dr. S.V. Rao, Dr. Animes Kr. Golder, Prof. Vaibhav V. Goud",
              },
              {
                name: "Chemical Technology - II",
                link: "http://nptel.ac.in/courses/103103029/",
                developers: "Dr. U. Ramagopal",
              },
              {
                name: "Fuel Cell Technology",
                link: "http://nptel.ac.in/courses/103103030/",
                developers: "Dr. Anil Verma, Prof. S. Basu",
              },
              {
                name: "Heat Transfer",
                link: "http://nptel.ac.in/courses/103103032/",
                developers: "Dr. Anil Verma",
              },
              {
                name: "Interfacial Engineering",
                link: "http://nptel.ac.in/courses/103103033/",
                developers: "Dr. Pallab Ghosh",
              },
              {
                name: "Mass Transfer Operations - I",
                link: "http://nptel.ac.in/courses/103103035/",
                developers: "Dr. Chandan Das, Dr. S.K. Majumder",
              },
              {
                name: "Molecular Simulations in Chemical Engineering",
                link: "http://nptel.ac.in/courses/103103036/",
                developers: "Dr. Ashok Kumar Dasmahapatra, Dr. Tamal Banerjee",
              },
              {
                name: "Process Control and Instrumentation",
                link: "http://nptel.ac.in/courses/103103037/",
                developers: "Dr. P.K. Saha",
              },
            ],
          },
          {
            name: "Chemistry and Biochemistry",
            courses: [
              {
                name: "Bio-organic Chemistry",
                link: "http://nptel.ac.in/courses/104103018/",
                developers: "Dr. S.S. Bag",
              },
              {
                name: "Chemistry of Materials",
                link: "http://nptel.ac.in/courses/104103019/",
                developers: "Dr. M. Quereshi",
              },
              {
                name: "Environmental Chemistry",
                link: "http://nptel.ac.in/courses/104103020/",
                developers: "Dr. Chivukula Vasudeva Sastri, Prof. T. Pal",
              },
              {
                name: "Principles of Organic Synthesis",
                link: "http://nptel.ac.in/courses/104103022/",
                developers: "Prof. T. Punniyamurthy",
              },
              {
                name: "Reagents and Organic Reactions",
                link: "http://nptel.ac.in/courses/104103023/",
                developers: "Prof. T. Punniyamurthy",
              },
              {
                name: "Catalytic Asymmetric Synthesis",
                link: "http://nptel.ac.in/courses/104103067/",
                developers: "Prof. T. Punniyamurthy",
              },
              {
                name: "Bio-Organic Chemistry of Natural Enediyne Anticancer Antibiotics",
                link: "http://nptel.ac.in/courses/104103068/",
                developers: "Dr. S.S. Bag",
              },
              {
                name: "Introductory Inorganic Chemistry",
                link: "http://nptel.ac.in/courses/104103069/",
                developers: "Dr. Chandan Mukherjee",
              },
              {
                name: "Basic Organic Chemistry",
                link: "http://nptel.ac.in/courses/104103071/",
                developers: "Prof. T. Punniyamurthy",
              },
            ],
          },
          {
            name: "Civil Engineering",
            courses: [
              {
                name: "Construction Economics & Finance",
                link: "http://nptel.ac.in/courses/105103023/",
                developers: "Dr. Bulu Pradhan",
              },
              {
                name: "Geo-environmental Engineering",
                link: "http://nptel.ac.in/courses/105103025/",
                developers: "Dr. S. Sreedeep",
              },
              {
                name: "Ground Water Hydrology",
                link: "http://nptel.ac.in/courses/105103026/",
                developers: "Dr. Rajib K. Bhattacharjya",
              },
              {
                name: "Probability Methods in Civil Engineering",
                link: "http://nptel.ac.in/courses/105103027/",
                developers: "Dr. C. Mallikarjuna",
              },
              {
                name: "Financing Infrastructure Projects",
                link: "http://nptel.ac.in/courses/105103133/",
                developers: "Dr. Laishram Boeing Singh",
              },
              {
                name: "Structural Reliability",
                link: "http://nptel.ac.in/courses/105103140/",
                developers: "Dr. Arunasis Chakraborty",
              },
              {
                name: "Unsaturated Soil Mechanics",
                link: "http://nptel.ac.in/courses/105103139/",
                developers: "Dr. Tadikonda Venkata Bharat",
              },
            ],
          },
          {
            name: "Computer Science and Engineering",
            courses: [
              {
                name: "Computational Number Theory & Cryptography",
                link: "http://nptel.ac.in/courses/106103015/",
                developers: "Dr. Pinaki Mitra",
              },
              {
                name: "VLSI Design Verification and Test",
                link: "http://nptel.ac.in/courses/106103016/",
                developers: "Prof. Jatindra Kumar Deka, Dr. Santosh Biswas",
              },
              {
                name: "Human-Computer Interaction",
                link: "http://nptel.ac.in/courses/106103115/",
                developers:
                  "Dr. Samit Bhattacharya, Prof. Pradeep P Yammiyavar",
              },
            ],
          },
          {
            name: "Engineering Design",
            courses: [
              {
                name: "Design Fundamentals",
                link: "http://nptel.ac.in/courses/107103002/",
                developers: "Dr. Utpal Barua",
              },
              {
                name: "Design for Manufacture and Assembly (DFMA) for Industrial Design",
                link: "http://nptel.ac.in/courses/107103012/",
                developers: "Abinash Kumar Swain",
              },
            ],
          },
          {
            name: "Electrical Engineering",
            courses: [
              {
                name: "Digital Control System",
                link: "http://nptel.ac.in/courses/108103008/",
                developers: "Dr. Indrani Kar, Prof. S. Majhi",
              },
              {
                name: "Introduction to Hybrid and Electric Vehicles",
                link: "http://nptel.ac.in/courses/108103009/",
                developers: "Prof. S. Majhi, Dr. Praveen Kumar",
              },
            ],
          },
          {
            name: "Humanities and Social Sciences",
            courses: [
              {
                name: "Cultural Studies",
                link: "http://nptel.ac.in/courses/109103018/",
                developers: "Dr. Liza Das",
              },
              {
                name: "Indian Society - Issues and Problems",
                link: "http://nptel.ac.in/courses/109103022/",
                developers: "Dr. Sambit Mallick, Dr. Liza Das",
              },
              {
                name: "Introduction to Sociology",
                link: "http://nptel.ac.in/courses/109103023/",
                developers: "Dr. Sambit Mallick",
              },
              {
                name: "Science, Technology and Society",
                link: "http://nptel.ac.in/courses/109103024/",
                developers: "Dr. Sambit Mallick, Prof. Archana Barua",
              },
            ],
          },
          {
            name: "Mathematics",
            courses: [
              {
                name: "Number Theory",
                link: "http://nptel.ac.in/courses/111103020/",
                developers: "Dr. Anupam Saikia",
              },
              {
                name: "Partial Differential Equations",
                link: "http://nptel.ac.in/courses/111103021/",
                developers: "Dr. Rajen Kumar Sinha",
              },
              {
                name: "Stochastic Processes",
                link: "http://nptel.ac.in/courses/111102014/",
                developers: "Dr. N. Selvaraju, Dr. S. Dharmaraja",
              },
            ],
          },
          {
            name: "Mechanical Engineering",
            courses: [
              {
                name: "Advanced Engineering Thermodynamics",
                link: "http://nptel.ac.in/courses/112103016/",
                developers: "Prof. P. Mahanta",
              },
              {
                name: "Engineering Drawing",
                link: "http://nptel.ac.in/courses/112103019/",
                developers: "Prof. P.S. Robi",
              },
              {
                name: "Gas Dynamics",
                link: "http://nptel.ac.in/courses/112103021/",
                developers: "Dr. Vinayak Kulkarni",
              },
              {
                name: "Nonlinear Vibration",
                link: "http://nptel.ac.in/courses/112103022/",
                developers: "Prof. S.K. Dwivedy",
              },
              {
                name: "Theory & Practice of Rotor Dynamics",
                link: "http://nptel.ac.in/courses/112103024/",
                developers: "Prof. Rajiv Tiwari",
              },
              {
                name: "Continuum Mechanics",
                link: "http://nptel.ac.in/courses/112103167/",
                developers: "A. Narayana Reddy",
              },
              {
                name: "Mechatronics and Manufacturing Automation",
                link: "http://nptel.ac.in/courses/112103174/",
                developers: "Dr. Shrikrishna N. Joshi",
              },
            ],
          },
          {
            name: "Physics",
            courses: [
              {
                name: "Advanced Statistical Mechanics",
                link: "http://nptel.ac.in/courses/115103028/",
                developers: "Dr. S.B. Santra",
              },
              {
                name: "Physics of Magnetic Recording and Recording Media",
                link: "http://nptel.ac.in/courses/115103038/",
                developers: "Dr. A. Perumal, Prof. A. Srinivasan",
              },
              {
                name: "Spintronics: Physics and Technology",
                link: "http://nptel.ac.in/courses/115103039/",
                developers: "Dr. A. Perumal",
              },
              {
                name: "Mathematical Physics - I",
                link: "http://nptel.ac.in/courses/115103036/",
                developers: "Dr. Saurabh Basu",
              },
            ],
          },
          {
            name: "Electronics & Communication Engineering",
            courses: [
              {
                name: "Queuing Systems",
                link: "http://nptel.ac.in/courses/117103017/",
                developers: "Prof. S.K. Bose",
              },
              {
                name: "Signal Detection and Estimation Theory",
                link: "http://nptel.ac.in/courses/117103018/",
                developers: "Dr. R. Sinha",
              },
            ],
          },
        ],
      },
      {
        type: "Video Courses",
        departments: [
          {
            name: "Chemical Engineering",
            courses: [
              {
                name: "Mass Transfer Operations I",
                link: "http://nptel.ac.in/courses/103103034/",
                developers: "Dr. B. Mandal",
              },
              {
                name: "Process Design Decisions and Project Economics",
                link: "http://nptel.ac.in/courses/103103039/",
                developers: "Dr. Vijay S. Moholkar",
              },
              {
                name: "Heat Transfer",
                link: "http://nptel.ac.in/courses/103103031/",
                developers: "Prof. A.K. Ghoshal",
              },
            ],
          },
          {
            name: "Civil Engineering",
            courses: [
              {
                name: "Advanced Hydraulics",
                link: "http://nptel.ac.in/courses/105103021/",
                developers: "Dr. Suresh A Kartha",
              },
            ],
          },
          {
            name: "Computer Science and Engineering",
            courses: [
              {
                name: "Design Verification and Test of Digital VLSI Circuits",
                link: "http://nptel.ac.in/courses/106103116/",
                developers: "Prof. Jatindra Kumar Deka, Dr. Santosh Biswas",
              },
            ],
          },
          {
            name: "Engineering Design",
            courses: [
              {
                name: "Ergonomics for beginners: Industrial design perspective",
                link: "http://nptel.ac.in/courses/107103004/",
                developers: "Prof. Debkumar Chakrabarti",
              },
            ],
          },
          {
            name: "Electrical Engineering",
            courses: [
              {
                name: "Advanced Control Systems",
                link: "http://nptel.ac.in/courses/108103007/",
                developers: "Prof. S. Majhi",
              },
            ],
          },
          {
            name: "Humanities and Social Sciences",
            courses: [
              {
                name: "Cultural Studies",
                link: "http://nptel.ac.in/courses/109103019/",
                developers: "Dr. Liza Das",
              },
              {
                name: "Game Theory and Economics",
                link: "http://nptel.ac.in/courses/109103021/",
                developers: "Dr. Debarshi Das",
              },
              {
                name: "English Language and Literature",
                link: "http://nptel.ac.in/courses/109103020/",
                developers: "Dr. Liza Das, Dr. Krishna Barua",
              },
            ],
          },
          {
            name: "Mathematics",
            courses: [
              {
                name: "Formal Languages and Automata Theory",
                link: "http://nptel.ac.in/courses/111103016/",
                developers: "Dr. Diganta Goswami, Dr. K.V. Krishna",
              },
              {
                name: "Complex Analysis",
                link: "http://nptel.ac.in/courses/111103070/",
                developers: "Prof. P. A. S. Sree Krishna",
              },
            ],
          },
          {
            name: "Mechanical Engineering",
            courses: [
              {
                name: "Nonlinear Vibration",
                link: "http://nptel.ac.in/courses/112103023/",
                developers: "Prof. S.K. Dwivedy",
              },
              {
                name: "Theory & Practice of Rotor Dynamics",
                link: "http://nptel.ac.in/courses/112103025/",
                developers: "Prof. Rajiv Tiwari",
              },
              {
                name: "Engineering Drawing",
                link: "http://nptel.ac.in/courses/112103020/",
                developers: "Prof. P.S. Robi",
              },
            ],
          },
        ],
      },
    ],
  },
];
