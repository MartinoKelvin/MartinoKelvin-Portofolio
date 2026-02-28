import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SplashCursor from "@/components/SplashCursor";
import Preloader from "@/components/Preloader";
import { BackgroundPaths } from "@/components/BackgroundPaths";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-accent selection:text-foreground overflow-x-hidden">
      <Preloader />

      {/* Background Effect */}
      <BackgroundPaths className="opacity-70 dark:opacity-40" />

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <SplashCursor />
    </main>
  );
}
