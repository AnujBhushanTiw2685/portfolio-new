import { FaReact, FaNodeJs, FaPython, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCplusplus, 
  SiMongodb, 
  SiTypescript,
  SiJavascript, 
  SiDocker, 
  SiVercel, 
  SiRender, 
  SiGit } from "react-icons/si";

export const HERO_CONTENT = {
  name: "Anuj Bhushan Tiwari",
  role: "Full Stack Developer | B.Tech CSE",
  location: "Bengaluru, Karnataka",
  // 
  description: "Cultivated advanced analytical and computational skills through rigorous coursework in computer programming, data structures, full stack development , deployment and software engineering principles, emphasizing problem analysis, algorithm design, and system optimization.",
};

export const LINKS = {
  github: "https://github.com/AnujBhushanTiw2685",      // <--- Update this
  linkedin: "https://www.linkedin.com/in/anuj-bhushan-tiwari/", // <--- Update this
  email: "mailto:tiwarianujbhushan@gmail.com",
  resume: "https://github.com/AnujBhushanTiw2685/Resume_Repo/blob/main/anujbhushantiwariresumeDecUpd3.pdf" // Assumes resume.pdf is in the public/ folde
}

export const PROJECTS = [
  {
    title: "SnapLink",
    subtitle: "MERN Stack URL Shortener",
    link: "https://snaplink-demo.vercel.app", // <--- Comma here is crucial
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Render", "Vercel"],
    points: [
      "Architected a Base62 encoding system capable of generating over 56 billion unique aliases.",
      "Achieved sub-200ms Time-to-First-Byte (TTFB) for redirection requests.",
      "Reduced database lookup time by over 90% for large datasets by implementing compound indexing.",
    ]
  },
  {
    title: "EnhancifAI",
    subtitle: "AI-powered Image Enhancer",
    link: "https://enhancifai-demo.vercel.app", // <--- Comma here is crucial
    tech: ["React.js", "PicWish API", "Node.js"],
    points: [
      "Routed 100% of API traffic through a secure Node.js proxy to prevent credential exposure.",
      "Enabled intuitive drag-and-drop uploads with an automated polling mechanism.",
      "Secured a 95+ Google Lighthouse performance score.",
    ]
  },
  {
    title: "ShopEZ",
    subtitle: "E-commerce Grocery Delivery App",
    // Link is optional, so we can leave it out or put link: "",
    tech: ["MERN", "TailwindCSS"],
    points: [
      "Designed a responsive UI in React.js with mobile-first performance, achieving a Lighthouse performance score of 90+.",
      "Developed 6+ RESTful API endpoints with Express.js and structured data models using Mongoose.",
    ]
  }
];

export const SKILLS = [
  { name: "C++", icon: <SiCplusplus /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Render", icon: <SiRender /> },
];