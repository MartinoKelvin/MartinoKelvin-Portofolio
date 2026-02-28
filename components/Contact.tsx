"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Github } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const contactLinks = [
  {
    name: "Email",
    value: "martino.123140165@student.itera.ac.id",
    href: "mailto:martino.123140165@student.itera.ac.id",
    icon: <Mail className="w-6 h-6" />,
    hoverColor: "group-hover:text-red-500",
    hoverBorder: "hover:border-red-500",
    hoverBg: "group-hover:bg-red-500/10",
  },
  {
    name: "Instagram",
    value: "@martinokelvin_",
    href: "https://instagram.com/martinokelvin_",
    icon: <Instagram className="w-6 h-6" />,
    hoverColor: "group-hover:text-pink-500",
    hoverBorder: "hover:border-pink-500",
    hoverBg: "group-hover:bg-pink-500/10",
  },
  {
    name: "LinkedIn",
    value: "Martino Kelvin",
    href: "https://linkedin.com/in/martino-kelvin/",
    icon: <Linkedin className="w-6 h-6" />,
    hoverColor: "group-hover:text-blue-500",
    hoverBorder: "hover:border-blue-500",
    hoverBg: "group-hover:bg-blue-500/10",
  },
  {
    name: "GitHub",
    value: "MartinoKelvin",
    href: "https://github.com/MartinoKelvin",
    icon: <Github className="w-6 h-6" />,
    hoverColor: "group-hover:text-foreground",
    hoverBorder: "hover:border-foreground",
    hoverBg: "group-hover:bg-foreground/10",
  },
  {
    name: "WhatsApp",
    value: "+62 895-6213-66589",
    href: "https://wa.me/62895621366589",
    icon: <SiWhatsapp className="w-6 h-6" />,
    hoverColor: "group-hover:text-green-500",
    hoverBorder: "hover:border-green-500",
    hoverBg: "group-hover:bg-green-500/10",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-transparent overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="text-3xl font-bold mb-4 tracking-tight"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hi? Feel free to reach out across any of these platforms.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", bounce: 0.4 }}
              className={`flex items-center gap-5 p-5 bg-surface/40 backdrop-blur-md rounded-2xl border border-surface-border shadow-sm hover:shadow-xl transition-all duration-300 group w-full sm:w-auto sm:min-w-[320px] max-w-full hover:-translate-y-2 ${link.hoverBorder}`}
            >
              <div className={`w-14 h-14 bg-background/50 rounded-full flex items-center justify-center border border-surface-border transition-colors duration-300 text-foreground shrink-0 ${link.hoverColor} ${link.hoverBg}`}>
                {link.icon}
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-xs uppercase tracking-wider font-bold text-foreground opacity-80">
                  {link.name}
                </span>
                <span className="font-semibold text-foreground text-base sm:text-lg transition-colors duration-300 group-hover:text-primary truncate" title={link.value}>
                  {link.value}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      
      {/* Decorative dot grid background on contact section for premium feel */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]" 
        style={{ backgroundImage: "radial-gradient(var(--foreground) 1px, transparent 1px)", backgroundSize: "32px 32px"}} 
      />
    </section>
  );
}
