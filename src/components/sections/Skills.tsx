"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { skills, skillCategories } from "@/lib/data";

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [flipped, setFlipped] = useState<string | null>(null);

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <SectionWrapper id="skills" className="py-32 px-6">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-white/30">02</span>
          <div className="h-px w-12 bg-white/20" />
          <span className="text-xs tracking-[0.3em] uppercase text-white/30">
            Skills
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Technologies I <span className="text-gradient">work with</span>
        </motion.h2>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {["All", ...skillCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300 ${activeCategory === cat
                  ? "bg-white text-black"
                  : "glass text-white/40 hover:text-white/70"
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="relative h-40"
              style={{ perspective: "1000px" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
              onMouseEnter={() => setFlipped(skill.name)}
              onMouseLeave={() => setFlipped(null)}
            >
              <motion.div
                className="w-full h-full relative"
                animate={{ rotateY: flipped === skill.name ? 180 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 glass rounded-xl flex flex-col items-center justify-center gap-3 p-4"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <span className="text-3xl">
                    <skill.icon className="w-8 h-8" />
                  </span>
                  <span className="text-sm font-medium text-white/70">
                    {skill.name}
                  </span>
                  <span className="text-[10px] tracking-wider uppercase text-white/25">
                    {skill.category}
                  </span>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 glass-strong rounded-xl flex flex-col items-center justify-center gap-4 p-4"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <span className="text-sm font-medium text-white/90">
                    {skill.name}
                  </span>

                  {/* Proficiency bar */}
                  <div className="w-full space-y-2">
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-white/60 rounded-full"
                        initial={{ width: 0 }}
                        animate={
                          flipped === skill.name
                            ? { width: `${skill.proficiency}%` }
                            : { width: 0 }
                        }
                        transition={{ duration: 0.6, delay: 0.2 }}
                      />
                    </div>
                    <div className="text-center text-xs text-white/40">
                      {skill.proficiency}%
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
