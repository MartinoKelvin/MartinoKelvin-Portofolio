"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Rocket, Users, Monitor, Server } from "lucide-react";

const experiences = [
  {
    id: 1,
    year: "Feb 2026 - Present",
    title: "Head of Information Technology",
    company: "KM-ITERA (Keluarga Mahasiswa INSTITUT TEKNOLOGI SUMATERA)",
    description: "Served as Project Manager, leading the development of the KM ITERA website to build a comprehensive media and information-oriented platform.",
    icon: <Users className="w-6 h-6 text-primary-foreground" />,
    color: "bg-primary",
  },
  {
    id: 2,
    year: "August 2025 - Present",
    title: "Web Developer and DevOps Intern",
    company: "Prodi Teknik Informatika ITERA",
    description: "Responsible for managing website content, developing new pages, and deploying as well as maintaining the department's website infrastructure.",
    icon: <Server className="w-6 h-6 text-primary-foreground" />,
    color: "bg-primary",
  },
  {
    id: 3,
    year: "March 2025 - Feb 2026",
    title: "IT Staff",
    company: "KM-ITERA (Keluarga Mahasiswa INSTITUT TEKNOLOGI SUMATERA)",
    description: "Worked as a Front-end Developer, building an information-oriented media website for KM ITERA.",
    icon: <Code2 className="w-6 h-6 text-primary-foreground" />,
    color: "bg-primary",
  },
  {
    id: 4,
    year: "March 2025 - Feb 2026",
    title: "Technopreneur Staff",
    company: "HMIF ITERA (Himpunan Mahasiswa Teknik informatika ITERA)",
    description: "Developed websites for various clients and built several functional prototype projects.",
    icon: <Rocket className="w-6 h-6 text-primary-foreground" />,
    color: "bg-primary",
  },
  {
    id: 5,
    year: "March 2025 - Feb 2026",
    title: "Technology Implementation Staff",
    company: "KMK ITERA (Keluarga Mahasiswa Katolik ITERA)",
    description: "Served as a Front-end Developer and UI/UX Designer, creating an information-oriented website for KMK ITERA.",
    icon: <Monitor className="w-6 h-6 text-primary-foreground" />,
    color: "bg-primary",
  },
  {
    id: 6,
    year: "Feb 2025 - Jun 2025",
    title: "Practicum Assistant PKS II",
    company: "Institute Technology Sumatera",
    description: "Taught fundamental C++ programming concepts to first-year college students.",
    icon: <GraduationCap className="w-6 h-6 text-primary-foreground" />,
    color: "bg-primary",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4 tracking-tight"
          >
            My Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground max-w-2xl mx-auto"
          >
            A timeline of my education, experience, and the path I&#39;ve taken to get where I am today.
          </motion.p>
        </div>

        <div className="relative border-l border-surface-border md:mx-auto md:w-3/4 lg:w-full">
          { experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="mb-10 ml-6 md:ml-10 relative group"
            >
              <span className={`absolute flex items-center justify-center w-12 h-12 rounded-full -left-12 md:-left-16 ring-4 ring-background shadow-lg transition-transform duration-300 group-hover:scale-110 ${exp.color}`}>
                {exp.icon}
              </span>

              {/* Content Card */}
              <div className="bg-background rounded-2xl p-6 md:p-8 border border-surface-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-foreground/80 font-medium mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-block px-4 py-1.5 bg-surface text-foreground text-sm font-semibold rounded-full w-fit border border-surface-border">
                    {exp.year}
                  </span>
                </div>
                <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
