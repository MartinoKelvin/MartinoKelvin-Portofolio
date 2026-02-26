"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="md:w-1/3"
          >
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border border-surface-border relative group">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition duration-500 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600" 
                alt="About me" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition duration-700"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="md:w-2/3"
          >
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold mb-6 text-foreground tracking-tight border-b-2 border-surface-border pb-4 inline-block"
            >
              About Me
            </motion.h2>
            
            <div className="space-y-4 text-foreground text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Hello! I am a software developer who enjoys creating beautiful, performant, and reliable web applications. My journey in web development started with a curiosity about how things work behind the scenes, which led me to dive deep into frontend and backend technologies.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Currently, my main focus is on building accessible, inclusive products and digital experiences for a variety of clients. I thrive in environments where I can combine my technical skills with creative problem-solving.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                When I'm not at my computer, I'm usually exploring new coffee shops, reading tech blogs, or trying out new UI design trends to incorporate into my next project.
              </motion.p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
