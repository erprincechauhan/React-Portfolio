"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
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
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        {/* Circles */}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/[0.03]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-white/[0.04]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-white/[0.03]" />

        {/* Horizontal */}

        <motion.div
          className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1.5,
            delay: 1,
            ease: "easeOut",
          }}
        />

        {/* Vertical */}

        <motion.div
          className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 1.5,
            delay: 1.2,
            ease: "easeOut",
          }}
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
            transition={{
              duration: 0.5,
              delay: 1.5 + i * 0.1,
            }}
          >
            <div className="w-full h-px bg-white/10" />
            <div className="w-px h-full bg-white/10" />
          </motion.div>
        ))}
      </motion.div>

      {/* CONTENT */}

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12"
      >
        <div className="grid lg:grid-cols-[60%_40%] items-center gap-6">

          {/* LEFT SIDE */}

          <div className="text-center lg:text-left order-2 lg:order-1">

            {/* Badge */}

            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 1.2,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />

              <span className="text-xs tracking-[0.25em] uppercase text-white/50">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-8xl font-heading font-bold tracking-tighter leading-[0.9] mb-2 min-h-[1.4em]">
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
              className="max-w-xl text-lg md:text-xl text-white/45 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 2.8,
              }}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Buttons */}

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-9"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 3,
              }}
            >
              <MagneticButton
                href="#projects"
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Projects
              </MagneticButton>

              <a
                href="/Princeresume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagneticButton>
                  Resume
                </MagneticButton>
              </a>

              <MagneticButton
                href="#contact"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact
              </MagneticButton>
            </motion.div>

          </div>

          {/* RIGHT SIDE */}
          <motion.div
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end lg:translate-x-20 xl:translate-x-24"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.6,
            }}
          >
            {/* Glow */}
            <div className="absolute w-[340px] h-[340px] rounded-full bg-white/5 blur-[120px]" />

            {/* Portrait */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <Image
                src="/images/prince.png"
                alt="Prince Chauhan"
                width={900}
                height={1200}
                priority
                className="
                  w-72
                  sm:w-80
                  md:w-96
                  lg:w-[430px]
xl:w-[500px]
                  h-auto
                  object-contain
                  pointer-events-none
                  select-none
                  [mask-image:linear-gradient(to_bottom,black_88%,transparent)]
                "
              />
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      {/* SCROLL INDICATOR */}

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 3.2,
        }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown
            size={14}
            className="text-white/20"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}