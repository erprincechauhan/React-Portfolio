"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export default function Projects() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" className="py-32 px-6">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-white/30">03</span>
          <div className="h-px w-12 bg-white/20" />
          <span className="text-xs tracking-[0.3em] uppercase text-white/30">
            Projects
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Selected <span className="text-gradient">works</span>
        </motion.h2>

        <motion.p
          className="text-white/30 text-lg mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A collection of AI-powered applications and full-stack projects I&apos;ve built.
        </motion.p>

        {/* Featured projects — Bento grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <SpotlightCard className="glass h-full">
                <div className={`p-8 md:p-10 h-full flex flex-col ${i === 0 ? "md:flex-row md:items-center md:gap-12" : ""}`}>
                  {/* Project visual placeholder */}
                  <div
                    className={`relative rounded-xl overflow-hidden glass mb-6 ${
                      i === 0 ? "md:mb-0 md:w-1/2 aspect-video" : "aspect-video"
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Decorative code-like content */}
                      <div className="text-white/[0.06] font-mono text-xs leading-6 p-4 overflow-hidden whitespace-pre">
                        {`const ${project.id.replace(/-/g, "_")} = {\n  model: "${project.techStack[0]}",\n  pipeline: "production",\n  status: "deployed"\n}`}
                      </div>
                    </div>

                    {/* Floating accent */}
                    <div className="absolute top-3 right-3 flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-white/10" />
                      <div className="w-2 h-2 rounded-full bg-white/10" />
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute bottom-3 left-3 text-[10px] tracking-wider uppercase text-white/20">
                      {project.techStack[0]}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col gap-4 ${i === 0 ? "md:w-1/2" : ""} flex-1`}>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] tracking-wider uppercase text-white/20 px-2 py-0.5 rounded-full border border-white/10">
                        Featured
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-heading font-bold tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-white/35 leading-relaxed text-sm">
                      {project.longDescription}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs text-white/40 border border-white/[0.06] hover:border-white/20 hover:text-white/60 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 mt-2">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors group"
                        whileHover={{ x: 4 }}
                      >
                        <GithubIcon size={14} />
                        <span>Source</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      </motion.a>

                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors group"
                          whileHover={{ x: 4 }}
                        >
                          <ExternalLink size={14} />
                          <span>Live Demo</span>
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                            →
                          </span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Other projects — smaller grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {others.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.5 + featured.length * 0.1 + i * 0.1,
              }}
            >
              <SpotlightCard className="glass h-full">
                <div className="p-6 h-full flex flex-col gap-4">
                  {/* Top accent */}
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/30">
                      <span className="text-lg">⌘</span>
                    </div>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/20 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <GithubIcon size={16} />
                    </motion.a>
                  </div>

                  <h3 className="text-lg font-heading font-semibold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm text-white/30 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] tracking-wider uppercase text-white/25"
                      >
                        {tech}
                        {project.techStack.indexOf(tech) < Math.min(2, project.techStack.length - 1) && (
                          <span className="ml-1.5 text-white/10">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
