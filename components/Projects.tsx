"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 4,
    title: "KM - ITERA Website",
    category: ["Organization", "Frontend", "Backend", "Fullstack"],
    description: "Official website for Keluarga Mahasiswa (KM) ITERA.",
    image: "/KM.png",
    tech: ["Web", "Laravel", "Taiwind", "MySQL","php"],
    github: "",
    demo: "https://km-itera.com/"
  },
  {
    id: 5,
    title: "KMK Website",
    category: ["Organization", "Frontend", "Backend", "Fullstack"],
    description: "Official website for Keluarga Mahasiswa Katolik (KMK) ITERA.",
    image: "/kmk.jpg",
    tech: ["Web", "Nextjs", "firebase"],
    github: "",
    demo: "https://kmkitera.com/"
  },
  {
    id: 1,
    title: "HMIF Website",
    category: ["Organization", "Frontend", "Backend", "Fullstack"],
    description: "Website for Himpunan Mahasiswa Teknik Informatika (HMIF).",
    image: "/hmif.png",
    tech: ["Web", "Frontend", "Filament", "React js"],
    github: "",
    demo: "https://hmif-itera.com/"
  },
  {
    id: 2,
    title: "Website Artikel Technology Information",
    category: ["Fullstack", "Frontend", "Backend"],
    description: "A technology information article website.",
    image: "/berita.png",
    tech: ["Web","Laravel React Starter kit","php","MySQL","tailwind"],
    github: "https://github.com/MartinoKelvin/article_news",
    demo: ""
  },
  {
    id: 3,
    title: "Wonderfull Inn",
    category: ["Frontend", "Fullstack"],
    description: "Travel agency website to explore and book your next destination.",
    image: "/wonderfullin.png",
    tech: ["Web", "React js", "Python Pyramid", "Postgre"],
    github: "https://github.com/MartinoKelvin/uas-paw-kelompok-6",
    demo: "https://wonderfull-inn.vercel.app/"
  },
  {
    id: 11,
    title: "Top Up Game",
    category: ["Fullstack", "Frontend", "Backend"],
    description: "A game top-up platform built with Laravel API and React Frontend.",
    image: "/top-up-game.png",
    tech: ["React", "Laravel api", "React js", "tailwind", "MySql"],
    github: "https://github.com/MartinoKelvin/top-up-game-laravel-api-react-fe",
    demo: ""
  },
  {
    id: 6,
    title: "Birthday Website",
    category: ["Frontend"],
    description: "A special birthday website created for someone special.",
    image: "/ultah.jpg",
    tech: ["HTML", "CSS"],
    github: "",
    demo: "https://happybirthdayyaasayang.vercel.app/"
  },
  {
    id: 7,
    title: "SiCheCo Website Client",
    category: [ "Frontend"],
    description: "SICHECO is a website for a company that sells various types of products.",
    image: "/sicheco.jpg",
    tech: ["Web", "NextJs", "tailwind"],
    github: "",
    demo: "https://sicheco.my.id/"
  },
  {
    id: 8,
    title: "Search Engine Film",
    category: ["Fullstack"],
    description: "A search engine for finding your favorite films.",
    image: "/film.jpg",
    tech: ["Web", "html", "css3", "Javascript"],
    github: "https://github.com/MartinoKelvin/Search-Engine-Film",
    demo: ""
  },
  {
    id: 16,
    title: "Bot Collect Diamond",
    category: ["Other"],
    description: "A Python bot designed to automatically collect diamonds in-game.",
    image: "/bot-collect-diamond.png",
    tech: ["Python", "Game", "Bot"],
    github: "https://github.com/MartinoKelvin/Tubes1_BrainNotFound",
    demo: ""
  },
  {
    id: 17,
    title: "Juppa Jungle",
    category: ["Other"],
    description: "An entertaining game titled Juppa Jungle built using Object-Oriented principles.",
    image: "/juppa-junggle.png",
    tech: ["Game", "OOP"],
    github: "https://github.com/MartinoKelvin/Tubes_PBO",
    demo: ""
  },
  {
    id: 9,
    title: "Game Suit againt a bot",
    category: ["Other"],
    description: "A Rock-Paper-Scissors (Suit) game played against a computer bot.",
    image: "/suit.jpg",
    tech: ["Web", "Game", "html", "css3", "Javascript"],
    github: "https://github.com/MartinoKelvin/Game-Suit",
    demo: ""
  },
  {
    id: 10,
    title: "Gallery Photo your idol",
    category: ["Frontend"],
    description: "A photo gallery application to showcase pictures of your idols.",
    image: "/idol.jpg",
    tech: ["Web", "html", "css3", "Javascript"],
    github: "https://github.com/MartinoKelvin/Myidolss",
    demo: ""
  },
  {
    id: 12,
    title: "Healthyu",
    category: ["UI/UX"],
    description: "A comprehensive health and wellness UI/UX prototype.",
    image: "/Healthyu.png",
    tech: ["Figma", "UI/UX"],
    github: "",
    demo: "https://www.figma.com/proto/KLeSIsjXvtusdcp0eAoY3E/Tugas-Besar-Interaction-Design?node-id=141-151&starting-point-node-id=425%3A969"
  },
  {
    id: 13,
    title: "Sigap",
    category: ["UI/UX"],
    description: "An interactive prototype focusing on responsive functionality.",
    image: "/sigap.png",
    tech: ["Figma", "UI/UX"],
    github: "",
    demo: "https://www.figma.com/proto/V8i7aGaBq5g7MJnmrenqL3/SIGAP-HI?node-id=10-4&node-type=frame&t=fNTtoZaS23wXLmrf-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=10%3A4&show-proto-sidebar=1"
  },
  {
    id: 14,
    title: "McLaren",
    category: ["UI/UX"],
    description: "An aesthetic design prototype centered around the McLaren concept.",
    image: "/mclaren.png",
    tech: ["Figma", "UI/UX"],
    github: "",
    demo: "https://www.figma.com/design/RkVeCbcl6EMIlEefuMb2ue/hack?node-id=0-1&p=f&t=hUA8T39yPliOzRd5-0"
  },
  {
    id: 15,
    title: "Kelola keuangan filament",
    category: ["Fullstack"],
    description: "A fullstack financial management application built with Filament PHP.",
    image: "/keuangan.png",
    tech: ["PHP", "Filament", "MySQL"],
    github: "https://github.com/MartinoKelvin/Kelola-keuangan-filament",
    demo: ""
  },
  {
    id: 18,
    title: "Redeploy Website if.itera.ac.id",
    category: ["Backend", "Other"],
    description: "Redeploying the Informatics Engineering ITERA website to a new server.",
    image: "/if-itera.png",
    tech: ["Server", "Deployment"],
    github: "",
    demo: "https://if.itera.ac.id/"
  }
];

const categories = ["All", "Organization", "Fullstack", "Frontend", "Backend", "UI/UX", "Other"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    setVisibleCount(6);
  };

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category.includes(filter)
  );

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="projects" className="py-16 md:py-24 bg-transparent overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
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
            className="flex flex-wrap justify-center gap-2 md:gap-4"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
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
            {displayedProjects.map((project, index) => (
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
                        {project.category.join(', ')}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-3 text-foreground">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="hover:scale-110 transition-all">
                          <Github size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="hover:scale-110 transition-all">
                          <ExternalLink size={20} />
                        </a>
                      )}
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

        {filteredProjects.length > visibleCount && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 pb-8 flex justify-center relative z-20"
          >
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              More Projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
