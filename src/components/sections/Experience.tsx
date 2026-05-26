"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { timeline } from "@/lib/data";

export default function Experience() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <SectionWrapper id="experience" className="py-32 px-6">
      <div ref={containerRef} className="max-w-4xl mx-auto">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-white/30">04</span>
          <div className="h-px w-12 bg-white/20" />
          <span className="text-xs tracking-[0.3em] uppercase text-white/30">
            Journey
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Learning <span className="text-gradient">journey</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[18px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-white/[0.06]">
            <motion.div
              className="w-full bg-gradient-to-b from-white/20 via-white/10 to-transparent origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-16">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              >
                {/* Dot */}
                <div className="absolute left-[13px] md:left-1/2 md:-translate-x-1/2 top-2">
                  <motion.div
                    className="w-3 h-3 rounded-full border-2 border-white/20 bg-black"
                    whileInView={{ borderColor: "rgba(255,255,255,0.5)" }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Year label - mobile inline, desktop positioned */}
                <div
                  className={`hidden md:block md:w-1/2 ${
                    i % 2 === 0 ? "text-right pr-12" : "text-left pl-12"
                  }`}
                >
                  <span className="text-sm font-heading font-bold text-white/20 tracking-wider">
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`ml-10 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  }`}
                >
                  <motion.div
                    className="glass rounded-xl p-6 group hover:border-white/10 transition-colors duration-300"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="md:hidden text-xs font-heading font-bold text-white/20 tracking-wider mb-2">
                      {item.year}
                    </div>

                    <h3 className="text-lg font-heading font-semibold tracking-tight mb-3 group-hover:text-gradient transition-all">
                      {item.title}
                    </h3>

                    <p className="text-sm text-white/35 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[10px] tracking-wider uppercase text-white/25 border border-white/[0.05]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
