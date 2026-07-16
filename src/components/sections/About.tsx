"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { personalInfo } from "@/lib/data";
import { SiPython } from "react-icons/si";
import { Brain, BarChart3, Bot } from "lucide-react";

const focusAreas = [
  { label: "AI Engineering", icon: Brain },
  { label: "Data Science", icon: BarChart3 },
  { label: "Python", icon: SiPython },
  { label: "Machine Learning", icon: Bot },
];

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <SectionWrapper id="about" className="py-32 px-6">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-white/30">01</span>
          <div className="h-px w-12 bg-white/20" />
          <span className="text-xs tracking-[0.3em] uppercase text-white/30">About</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div className="space-y-8">
            <motion.h2
              className="text-4xl md:text-5xl font-heading font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Building intelligent{" "}
              <span className="text-gradient">systems</span> that
              matter
            </motion.h2>

            <motion.p
              className="text-white/40 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {personalInfo.bio}
            </motion.p>

            {/* Focus areas */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/60"
                  whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                >
                  <span>{area.icon}</span>
                  <span>{area.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Decorative geometric art */}
          <motion.div
            className="relative aspect-square max-w-md mx-auto w-full"
            style={{ y: parallaxY }}
          >
            {/* Outer frame */}
            <motion.div
              className="absolute inset-0 border border-white/[0.06] rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Inner pattern */}
            <motion.div
              className="absolute inset-8 glass rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Grid pattern */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`rh-${i}`}
                    className="absolute left-0 right-0 h-px bg-white/[0.04]"
                    style={{ top: `${(i + 1) * 14.28}%` }}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.05 }}
                  />
                ))}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`rv-${i}`}
                    className="absolute top-0 bottom-0 w-px bg-white/[0.04]"
                    style={{ left: `${(i + 1) * 14.28}%` }}
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 + i * 0.05 }}
                  />
                ))}
              </div>

              {/* Center accent */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-white/10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/20"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 }}
              />

              {/* Corner brackets */}
              {[
                "top-4 left-4",
                "top-4 right-4 rotate-90",
                "bottom-4 left-4 -rotate-90",
                "bottom-4 right-4 rotate-180",
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${pos}`}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 0.3 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.05 }}
                >
                  <div className="w-6 h-px bg-white" />
                  <div className="w-px h-6 bg-white" />
                </motion.div>
              ))}

              {/* Floating stats */}
              <motion.div
                className="absolute top-6 right-6 text-right"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <div className="text-2xl font-heading font-bold text-white/80">3+</div>
                <div className="text-[10px] tracking-wider uppercase text-white/30">
                  Major Projects
                </div>
              </motion.div>
              {/* <motion.div
                className="absolute top-6 right-6 text-right"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
              <div className="text-2xl font-heading font-bold text-white/80">10+</div>
                <div className="text-[10px] tracking-wider uppercase text-white/30">
                   Projects
                </div>
              </motion.div> */}

              <motion.div
                className="absolute bottom-6 left-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="text-2xl font-heading font-bold text-white/80">3+</div>
                <div className="text-[10px] tracking-wider uppercase text-white/30">
                  Years Coding
                </div>
              </motion.div>
            </motion.div>

            {/* Floating accent line */}
            <motion.div
              className="absolute -right-4 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
