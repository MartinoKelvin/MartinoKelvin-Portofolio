"use client";

import { motion } from "framer-motion";
import { 
  Code2, Database, Layout, Server, Frame, 
  Terminal, MonitorSmartphone, Cpu
} from "lucide-react";
import LogoLoop from "./LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMysql, SiLaravel, SiFramer, SiPostgresql, SiFirebase , SiFilament , SiPython , SiCplusplus , SiHtml5 , SiCss3 , SiJavascript, SiCpanel, SiVercel, SiGithub, SiPhp, SiGit, SiDocker , SiShadcnui, SiRailway  } from "react-icons/si";



const techLogos = [
  { node: <SiReact className="w-28 h-28 text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="w-28 h-28 text-foreground" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="w-28 h-28 text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="w-28 h-28 text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs className="w-28 h-28 text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiMysql className="w-28 h-28 text-[#4479A1]" />, title: "MySQL", href: "https://www.mysql.com/" },
  { node:  <SiPostgresql className="w-28 h-28 text-[#4479A1]" />, title: "PostgreSQL", href: "https://www.postgresql.org/" },
  { node: <SiLaravel className="w-28 h-28 text-[#FF2D20]" />, title: "Laravel", href: "https://laravel.com" },
  { node: <SiFramer className="w-28 h-28 text-foreground" />, title: "Framer Motion", href: "https://www.framer.com/motion/" },
  { node: <SiFirebase className="w-28 h-28 text-red-500" />, title: "Firebase", href: "https://firebase.google.com/" },
  { node: <SiFilament className="w-28 h-28 text-[#FF6B00]" />, title: "Filament", href: "https://filamentphp.com/" },
  { node: <SiPython className="w-28 h-28 text-[#FF6B00]" />, title: "Python", href: "https://www.python.org/" },
  { node: <SiCplusplus className="w-28 h-28 text-blue-400" />, title: "C++", href: "https://www.cplusplus.com/" },
  { node: <SiJavascript className="w-28 h-28 text-yellow-500" />, title: "JavaScript", href: "https://www.w3schools.com/js/" },
  { node: <SiCpanel className="w-28 h-28 text-[#FF6B00]" />, title: "Cpanel", href: "https://www.cpanel.net/" },
  { node: <SiShadcnui className="w-28 h-28 text-black dark:text-white" />, title: "Shadcn UI", href: "https://ui.shadcn.com/" },
  { node: <SiGithub className="w-28 h-28 text-black dark:text-white" />, title: "Github", href: "https://github.com/" },
  { node: <SiGit className="w-28 h-28 text-red-500" />, title: "Git", href: "https://git-scm.com/" },
  { node: <SiDocker className="w-28 h-28 text-blue-700" />, title: "Docker", href: "https://www.docker.com/" },
  { node: <SiVercel className="w-28 h-28 text-black dark:text-white" />, title: "Vercel", href: "https://vercel.com/" },
  { node: <SiRailway className="w-28 h-28 text-black dark:text-white" />, title: "Railway", href: "https://railway.app/" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  show: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 10 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent border-t border-surface-border border-b overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="text-3xl font-bold mb-4 tracking-tight"
          >
            Skills & Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground max-w-2xl mx-auto"
          >
            A look at the technologies, tools, and practices I use to build scalable web applications.
          </motion.p>
        </div>


       
        <div className="mt-20 h-40 relative overflow-hidden flex items-center justify-center">
            <LogoLoop
              logos={techLogos}
              speed={60}
              direction="right"
              logoHeight={80}
              gap={80}
              hoverSpeed={150}
              scaleOnHover
              fadeOut
              fadeOutColor="var(--background)"
              ariaLabel="Technology partners"
            />
            
        </div>
       
      </div>
    </section>
  );
}
