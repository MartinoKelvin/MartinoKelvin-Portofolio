"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between relative z-10 gap-12 pt-10">
        
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground mb-3 tracking-widest uppercase text-sm font-bold"
          >
            Fullstack Web Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground"
          >
            Building Aesthetic <br className="hidden md:block"/> Digital Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-foreground max-w-xl mb-10 leading-relaxed"
          >
            Hi, I am a passionate developer focused on creating beautiful, functional, and user-centric web applications. Let's build something great together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform shadow-lg hover:shadow-xl text-center"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer border border-surface-border text-foreground px-8 py-4 rounded-full font-medium hover:bg-surface-border transition-colors hover:scale-105 text-center"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
            className="w-72 h-72 md:w-[450px] md:h-[450px] relative group"
          >
            <img 
              src="/hero.png" 
              alt="My Portrait" 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl" 
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-foreground w-6 h-6" />
        </motion.div>
      </div>

      {/* Decorative background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />
    </section>
  );
}
