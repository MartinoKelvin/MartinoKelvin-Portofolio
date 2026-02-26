import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SplashCursor from "@/components/SplashCursor";
import { BackgroundPaths } from "@/components/BackgroundPaths";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-accent selection:text-foreground overflow-x-hidden">
      {/* Background Effect */}
      <BackgroundPaths className="opacity-70 dark:opacity-40" />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <SplashCursor />
    </main>
  );
}
