"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    category: "Fullstack",
    description: "A comprehensive admin dashboard built with Next.js, Prisma, and Tailwind CSS. Features sales analytics, order management, and real-time inventory updates.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "Tailwind", "Prisma"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 2,
    title: "Portfolio Template",
    category: "Frontend",
    description: "A highly customizable aesthetic portfolio template for developers. Built with React, Framer Motion for animations, and a sleek dark mode.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Framer Motion", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 3,
    title: "RESTful API Boilerplate",
    category: "API",
    description: "A robust starter template for building secure and scalable APIs using Express, Node.js, and MongoDB. Includes JWT authentication and Swagger docs.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 4,
    title: "Task Management App",
    category: "Fullstack",
    description: "A beautifully designed Kanban board application for team collaboration. Real-time updates via WebSockets and drag-and-drop functionality.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Socket.io", "Express"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

const categories = ["All", "Frontend", "Fullstack", "API"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section id="projects" className="py-24 bg-transparent overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4 tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground max-w-2xl mx-auto mb-8"
          >
            Here are some of my recent works. You can filter them by category to see specific types of projects.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? "bg-primary text-primary-foreground shadow-md scale-105" 
                    : "bg-background text-foreground border border-surface-border hover:border-foreground hover:scale-105"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                className="bg-background rounded-2xl overflow-hidden border border-surface-border group shadow-sm hover:shadow-2xl hover:border-primary transition-all duration-300"
              >
                {/* Project Image */}
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                </div>
                
                {/* Project Details */}
                <div className="p-8 relative z-20 bg-background transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-foreground font-semibold">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-3 text-foreground">
                      <a href={project.github} target="_blank" rel="noreferrer" className="hover:scale-110 transition-all">
                        <Github size={20} />
                      </a>
                      <a href={project.demo} target="_blank" rel="noreferrer" className="hover:scale-110 transition-all">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-3 py-1 bg-surface border border-surface-border rounded-full text-foreground group-hover:border-foreground transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
