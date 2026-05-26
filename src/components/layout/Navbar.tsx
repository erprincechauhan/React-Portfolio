"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    const activeLink = navRef.current.querySelector(
      `[data-section="${activeSection}"]`
    ) as HTMLElement | null;

    if (activeLink && indicatorRef.current) {
      const { offsetLeft, offsetWidth } = activeLink;
      indicatorRef.current.style.left = `${offsetLeft}px`;
      indicatorRef.current.style.width = `${offsetWidth}px`;
      indicatorRef.current.style.opacity = "1";
    }
  }, [activeSection]);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 1.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-xl font-heading font-bold tracking-tighter relative z-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="text-gradient">Prince</span>
          <span className="text-white/40">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <nav ref={navRef} className="hidden md:flex items-center gap-1 relative">
          {/* Active indicator */}
          <div
            ref={indicatorRef}
            className="absolute bottom-0 h-px bg-white transition-all duration-300 ease-out opacity-0"
          />

          {navLinks.map((link) => (
            <button
              key={link.href}
              data-section={link.href.slice(1)}
              onClick={() => handleClick(link.href)}
              className={`px-4 py-2 text-sm tracking-wide transition-colors duration-300 relative ${
                activeSection === link.href.slice(1)
                  ? "text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden relative z-10 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-6 h-px bg-white"
            animate={mobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-px bg-white"
            animate={mobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={false}
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      >
        <nav className="flex flex-col px-6 pb-6">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="py-3 text-left text-lg text-white/60 hover:text-white transition-colors border-b border-white/5"
              initial={{ x: -20, opacity: 0 }}
              animate={mobileOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              {link.label}
            </motion.button>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}
