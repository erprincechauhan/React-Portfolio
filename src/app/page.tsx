"use client";

import dynamic from "next/dynamic";
import LoadingScreen from "@/components/layout/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

// Dynamically import heavy canvas components to avoid SSR issues
const AnimatedGrid = dynamic(() => import("@/components/ui/AnimatedGrid"), {
  ssr: false,
});
const ParticleField = dynamic(() => import("@/components/ui/ParticleField"), {
  ssr: false,
});
const CustomCursor = dynamic(() => import("@/components/effects/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />

      {/* Background layers */}
      <AnimatedGrid />
      <ParticleField />

      {/* Film grain overlay */}
      <div className="film-grain pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />

          {/* Section dividers between each section */}
          <div className="section-divider max-w-7xl mx-auto" />
          <About />

          <div className="section-divider max-w-7xl mx-auto" />
          <Skills />

          <div className="section-divider max-w-7xl mx-auto" />
          <Projects />

          <div className="section-divider max-w-7xl mx-auto" />
          <Experience />

          <div className="section-divider max-w-7xl mx-auto" />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
