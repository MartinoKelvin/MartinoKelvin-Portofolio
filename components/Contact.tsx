"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Github } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const contactLinks = [
  {
    name: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    icon: <Mail className="w-6 h-6" />,
    hoverColor: "group-hover:text-red-500",
    hoverBorder: "hover:border-red-500",
    hoverBg: "group-hover:bg-red-500/10",
  },
  {
    name: "Instagram",
    value: "@yourinstagram",
    href: "https://instagram.com/",
    icon: <Instagram className="w-6 h-6" />,
    hoverColor: "group-hover:text-pink-500",
    hoverBorder: "hover:border-pink-500",
    hoverBg: "group-hover:bg-pink-500/10",
  },
  {
    name: "LinkedIn",
    value: "Your Name",
    href: "https://linkedin.com/in/",
    icon: <Linkedin className="w-6 h-6" />,
    hoverColor: "group-hover:text-blue-500",
    hoverBorder: "hover:border-blue-500",
    hoverBg: "group-hover:bg-blue-500/10",
  },
  {
    name: "GitHub",
    value: "yourgithub",
    href: "https://github.com/",
    icon: <Github className="w-6 h-6" />,
    hoverColor: "group-hover:text-foreground",
    hoverBorder: "hover:border-foreground",
    hoverBg: "group-hover:bg-foreground/10",
  },
  {
    name: "WhatsApp",
    value: "+62 812-3456-7890",
    href: "https://wa.me/6281234567890",
    icon: <SiWhatsapp className="w-6 h-6" />,
    hoverColor: "group-hover:text-green-500",
    hoverBorder: "hover:border-green-500",
    hoverBg: "group-hover:bg-green-500/10",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent overflow-hidden relative">
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
              className={`flex items-center gap-5 p-5 bg-surface/40 backdrop-blur-md rounded-2xl border border-surface-border shadow-sm hover:shadow-xl transition-all duration-300 group w-full sm:w-[320px] hover:-translate-y-2 ${link.hoverBorder}`}
            >
              <div className={`w-14 h-14 bg-background/50 rounded-full flex items-center justify-center border border-surface-border transition-colors duration-300 text-foreground ${link.hoverColor} ${link.hoverBg}`}>
                {link.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider font-bold text-foreground opacity-80">
                  {link.name}
                </span>
                <span className="font-semibold text-foreground text-lg transition-colors duration-300 group-hover:text-primary">
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
