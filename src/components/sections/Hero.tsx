"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Typewriter from "@/components/ui/Typewriter";
import MagneticButton from "@/components/ui/MagneticButton";
import { personalInfo } from "@/lib/data";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative elements */}
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        {/* Large circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-white/[0.03]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-white/[0.05]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full border border-white/[0.03]" />

        {/* Horizontal line */}
        <motion.div
          className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
        />

        {/* Vertical line */}
        <motion.div
          className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
        />

        {/* Corner accents */}
        {[
          "top-[15%] left-[10%]",
          "top-[15%] right-[10%]",
          "bottom-[15%] left-[10%]",
          "bottom-[15%] right-[10%]",
        ].map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute ${pos} w-8 h-8`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
          >
            <div className="w-full h-px bg-white/10" />
            <div className="w-px h-full bg-white/10" />
          </motion.div>
        ))}
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl"
        style={{ opacity }}
      >
        {/* Small badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-xs tracking-[0.2em] uppercase text-white/50">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name — typing animation */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tighter leading-[0.9] mb-6 min-h-[1.8em]">
          <Typewriter
            texts={["Prince Chauhan"]}
            delay={1.4}
            typeSpeed={100}
            deleteSpeed={50}
            pauseDuration={2500}
          />
        </h1>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl text-white/40 tracking-wide max-w-xl mx-auto mb-12 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          <MagneticButton
            href="#projects"
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </MagneticButton>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagneticButton
            >
              Resume
            </MagneticButton>
          </a>
          <MagneticButton
            href="#contact"
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.5 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
