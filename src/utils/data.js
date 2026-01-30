import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoCss3,
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiMongodb,
  SiCplusplus,
  SiTypescript,
  SiExpress,
  SiJsonwebtokens,
  SiRedis,
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux,
  SiApachekafka,
  SiMysql,
  SiMongoose
} from "react-icons/si";
import { TbApi, TbBrandOauth } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { FaCode, FaGlobe, FaDatabase, FaTools, FaUser } from "react-icons/fa";
import HeroImage from "../assets/hero-gen.png";

export const PROFILE_DATA = {
  profilePicture: HeroImage,
  name: "Mozammil Ali",
  tagline: "Passionate Full Stack Developer with 6 months of experience in building responsive web applications using modern technologies. Proficient in both front-end and back-end development, with a strong focus on creating clean, efficient, and scalable code. Skilled in collaborating with cross-functional teams to deliver high-quality software solutions.",
  jobTitle: "Full Stack Developer",
  location: "India",
  yearsOfExperience: "1",
  skills: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "JavaScript",
    "Restful APIs",
    "Git",
    "Redux",
  ],
  email: "mozammilali2018@gmail.com",
  phone: "+91 7033763035",
  website: "https://mozammilali.netlify.app/",
};

export const GITHUB_USERNAME = "codxbrexx";

export const SKILLS = [
  {
    title: "Programming Languages",
    icon: FaCode,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "C/C++", icon: SiCplusplus, level: 85 },
      { name: "JavaScript", icon: IoLogoJavascript, level: 90 },
      { name: "TypeScript", icon: SiTypescript, level: 80 },
      { name: "SQL", icon: SiMysql, level: 75 },
      { name: "HTML", icon: IoLogoHtml5, level: 95 },
      { name: "CSS", icon: IoLogoCss3, level: 90 },
    ],
  },
  {
    title: "Web Development",
    icon: FaGlobe,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "React", icon: IoLogoReact, level: 92 },
      { name: "Node.js", icon: IoLogoNodejs, level: 85 },
      { name: "Express", icon: SiExpress, level: 80 },
      { name: "REST APIs", icon: TbApi, level: 88 },
      { name: "JWT", icon: SiJsonwebtokens, level: 75 },
      { name: "OAuth 2.0", icon: TbBrandOauth, level: 70 },
      { name: "Redis", icon: SiRedis, level: 60 },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, level: 95 },
    ],
  },
  {
    title: "Databases & Cloud",
    icon: FaDatabase,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: 85 },
      { name: "Mongoose", icon: SiMongoose, level: 80 },
      { name: "Google Cloud", icon: SiGooglecloud, level: 65 },
    ],
  },
  {
    title: "Developer Tools",
    icon: FaTools,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git", icon: SiGit, level: 90 },
      { name: "GitHub", icon: SiGithub, level: 88 },
      { name: "Postman", icon: SiPostman, level: 85 },
      { name: "Linux", icon: SiLinux, level: 70 },
      { name: "Kafka", icon: SiApachekafka, level: 50 },
      { name: "VS Code", icon: VscVscode, level: 95 },
    ],
  },
  {
    title: "Soft Skills",
    icon: FaUser,
    color: "from-yellow-400 to-orange-400",
    skills: [
      { name: "Strategic Planning", level: 85 },
      { name: "Conflict Resolution", level: 90 },
      { name: "Communication", level: 95 },
      { name: "Coordination", level: 88 },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    id: "01",
    company: "TechSolutions Inc.",
    position: "Senior Frontend Developer",
    duration: "June 2025 - Present",
    type: "Full-time",
    description:
      "Leading the development of scalable web applications using React.js and Tailwind CSS. Collaborated closely with cross-functional teams to design intuitive user interfaces, optimize performance, and implement best coding practices.",
    skills: ["React", "Tailwind CSS", "Redux", "Framer Motion", "Git"],
  },
  {
    id: "02",
    company: "CodeCrafters LLC",
    position: "Frontend Developer",
    duration: "Nov 2024 - Jan 2025",
    type: "Full-time",
    description:
      "Developed responsive web interfaces using JavaScript, React, and CSS frameworks. Worked with designers to translate wireframes into interactive features, ensuring cross-browser compatibility and performance optimization.",
    skills: ["JavaScript", "React", "CSS3", "HTML5", "Vite"],
  },
  {
    id: "03",
    company: "Digital Innovations Co.",
    position: "UI/UX Designer",
    duration: "June 2024 - Oct 2024",
    type: "Internship",
    description:
      "Designed user-centered web and mobile interfaces, focusing on enhancing user experience through intuitive layouts and modern design trends. Created wireframes, prototypes, and high-fidelity mockups.",
    skills: ["Figma", "Adobe XD", "UI/UX", "Wireframing", "Prototyping"],
  },
];

export const PERSONAL_BRAND_DATA = {
  philosophy: [
    "Engineering scalable ecosystems, not just applications.",
    "Data-driven decision making with user-centric intuition.",
    "Optimization is an obsession, not an afterthought.",
    "Building robust architectures for the future web."
  ],
  journey: {
    title: "My Journey",
    description: "My evolution from a competitive programmer to a Full Stack Architect has been defined by a relentless pursuit of efficiency. Beginning with low-level algorithmic problem solving in C++, I transitioned to mastering modern web ecosystems. Today, I specialize in building high-performance, distributed applications where I leverage my deep understanding of data structures to optimize complex systems."
  },
  values: [
    { title: "Clean Architecture", description: "Designing systems that are modular, scalable, and easy to maintain." },
    { title: "User Experience", description: "Crafting intuitive interactions that bridge the gap between human and machine." },
    { title: "Performance", description: "Optimizing for millisecond-level latency and resource efficiency." },
    { title: "Innovation", description: "Pushing the boundaries of what's possible on the web." }
  ],
  goals: {
    title: "Career Goals",
    description: "To operate as a Lead Software Engineer at a technology-first organization, driving architectural decisions and mentoring the next generation of developers."
  },
  codeSnippet: `const engineer = {
  name: "Mozammil Ali",
  role: "Full Stack Architect",
  focus: "Scalable Systems",
  motto: "Efficiency by Design"
};`,
  stats: [
    { label: "Performance", value: "Top 1%", subtext: "Optimization Specialist" },
    { label: "Problem Solving", value: "500+", subtext: "Algorithmic Solutions" },
    { label: "Projects", value: "End-to-End", subtext: "Production Ready" },
    { label: "Contributions", value: "Active", subtext: "Open Source Ecosystem" }
  ],
  achievements: [
    "🏆 Global Rank 1262 (Specialist) on Codeforces",
    "⭐ Rated 1626 (3-Star) on CodeChef | Top Tier Competitive Programmer",
    "🌍 Ranked 3,800/26,700 in Codeforces Round 1063 (Div. 3)",
    "🧩 Solved 500+ Complex Algorithmic Problems across platforms",
    "🔧 Major Open Source Contributor to Apache Wagtail & Hacktoberfest"
  ]
};

export const PROJECTS = [
  {
    id: "01",
    title: "FocusMaster",
    category: "Productivity",
    image: "/project1.png",
    description: "A comprehensive productivity ecosystem designed to maximize deep work by integrating a Pomodoro timer, Kanban task management, and real-time analytics. It features Spotify integration to reduce context switching and goal tracking with streaks to maintain long-term focus.",
    skills: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Spotify API", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/codxbrexx/FocusMaster",
    liveUrl: "https://focuswithme.vercel.app/",
  },
  {
    id: "02",
    title: "NetGrad Alumni Platform",
    category: "Alumni Networking",
    image: "/project2.png",
    description: "An enterprise-grade alumni networking solution bridging the gap between institutions and graduates. Features semantic search, a career acceleration portal, editorial content engine, and real-time analytics.",
    skills: ["React 19", "Node.js", "Express 5", "MongoDB", "Framer Motion", "Tailwind CSS 4"],
    githubUrl: "https://github.com/codxbrexx/college-alumni",
    liveUrl: "https://college-info-project.vercel.app/",
  },
  {
    id: "03",
    title: "Food-Express",
    category: "E-Commerce",
    image: "/project3.png",
    description: "A modern, mobile-first food delivery platform featuring a professional redesign with a semantic color system. It offers an intuitive user interface for menu browsing and order management, optimized for sub-second interaction times and full responsiveness.",
    skills: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/codxbrexx/Food-Express",
    liveUrl: "https://food-express-lake.vercel.app/",
  },
  {
    id: "04",
    title: "GetPrompt",
    category: "AI Tools",
    image: "/project4.png",
    description: "An open-source collaborative platform for AI prompt engineering and sharing. Built with a scalable monorepo architecture, it empowers developers to discover, refine, and contribute to a library of optimized AI prompts, enhancing generative AI workflows.",
    skills: ["Next.js", "TypeScript", "React", "TurboRepo", "Docker", "Node.js"],
    githubUrl: "https://github.com/codxbrexx/GetPrompt",
    liveUrl: "https://get-prompt-jet.vercel.app/",
  },
  {
    id: "05",
    title: "Cosmic Escape",
    category: "Arcade Game",
    image: "/cosmic_escape.png",
    description: "A high-performance architectural arcade shooter featuring a modular JavaScript architecture. It offers an immersive gaming experience with multiple modes, including a structured Story Mode and a challenging Boss Rush (Survival Protocol). The platform leverages HTML5 Canvas for smooth, high-octane rendering, integrated with GSAP for fluid motion graphics and Tailwind CSS for a refined, modern UI.",
    skills: ["Vite", "Tailwind CSS", "GSAP", "HTML5 Canvas", "JavaScript"],
    githubUrl: "https://github.com/codxbrexx/Cosmic_Escape",
    liveUrl: "https://cosmic-escape-oi.vercel.app/",
  },
  {
    id: "06",
    title: "AITextExplainer",
    category: "Education",
    image: "/project6.png",
    description: "A powerful Chrome Extension that leverages the Google Gemini API and a Python Flask backend to instantly simplify complex text. It provides contextual explanations for difficult passages directly in the browser, significantly improving reading comprehension.",
    skills: ["JavaScript", "Python", "Flask", "Google Gemini API", "Chrome Extension API", "HTML/CSS"],
    githubUrl: "https://github.com/codxbrexx/AITextExplainer",
    liveUrl: "Extension not Deployed",
  },

];

export const EDUCATION = [
  {
    id: "01",
    school: "Indian Institute of Information Technology (IIIT), Lucknow",
    location: "Lucknow, India",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "Aug 2024 – Jun 2028",
    grade: "CGPA: 7.55 / 10",
    description: "Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Operating Systems, OOP.",
  },
  {
    id: "02",
    school: "R.S.B. Inter-School, Samastipur",
    location: "Samastipur, Bihar, India",
    degree: "BSEB Class XII (Higher Secondary Education)",
    duration: "Feb 2021 – Feb 2023",
    grade: "Percentage: 86.0%",
    description: "Focused on Science and Mathematics foundation.",
  },
  {
    id: "03",
    school: "R.S.B. Inter-School, Samastipur",
    location: "Samastipur, Bihar, India",
    degree: "BSEB Class X (Secondary Education)",
    duration: "Feb 2020 – Feb 2021",
    grade: "Percentage: 84.0%",
    description: "Completed secondary education with distinction.",
  },
];

export const HERO_CONTENT = {
  greeting: "Hello, I'm Mozammil Ali",
  introduction:
    "I’m a Full Stack Developer and CSE undergraduate at IIIT Lucknow, passionate about turning ideas into scalable digital products. With expertise in the MERN stack, I build fast, reliable, and visually refined web applications where performance meets design.",
  resumeLink: "/resume.pdf",
};
