"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import MagneticButton from "@/components/ui/MagneticButton";
import { personalInfo } from "@/lib/data";
import { Mail, Send, ArrowUpRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

// API key loaded from .env → configured in package.json "config.web3formsKeyEnv"
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const socialLinks = [
    {
      icon: GithubIcon,
      label: "GitHub",
      href: personalInfo.github,
      handle: "@erprincechauhan",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      href: personalInfo.linkedin,
      handle: "Prince Chauhan",
    },
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${personalInfo.email}`,
      handle: personalInfo.email,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `Portfolio Contact from ${formState.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        // Reset back to idle after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const isFormDisabled = status === "sending" || status === "success";

  return (
    <SectionWrapper id="contact" className="py-32 px-6">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-white/30">05</span>
          <div className="h-px w-12 bg-white/20" />
          <span className="text-xs tracking-[0.3em] uppercase text-white/30">
            Contact
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — Info */}
          <div className="space-y-8">
            <motion.h2
              className="text-4xl md:text-5xl font-heading font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Let&apos;s build something{" "}
              <span className="text-gradient">together</span>
            </motion.h2>

            <motion.p
              className="text-white/35 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </motion.p>

            {/* Social links */}
            <div className="space-y-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass group hover:border-white/10 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                    <link.icon size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs tracking-wider uppercase text-white/25">
                      {link.label}
                    </div>
                    <div className="text-sm text-white/60 group-hover:text-white transition-colors">
                      {link.handle}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-white/10 group-hover:text-white/40 transition-colors"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center gap-6 py-20 rounded-2xl glass"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 12 }}
                  >
                    <CheckCircle size={56} className="text-green-400" />
                  </motion.div>
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-heading font-bold text-white">
                      Message sent!
                    </h3>
                    <p className="text-white/40 text-sm max-w-xs">
                      Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Error banner */}
                  <AnimatePresence>
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        className="flex items-center gap-3 p-4 rounded-xl border border-red-500/20 bg-red-500/5"
                      >
                        <AlertCircle size={18} className="text-red-400 shrink-0" />
                        <p className="text-sm text-red-300">{errorMessage}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Name field */}
                  <div className="relative">
                    <motion.label
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focused === "name" || formState.name
                          ? "top-2 text-[10px] tracking-wider uppercase text-white/30"
                          : "top-4 text-sm text-white/20"
                      }`}
                    >
                      Name
                    </motion.label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      disabled={isFormDisabled}
                      className="w-full px-4 pt-6 pb-3 rounded-xl glass bg-transparent text-white text-sm focus:outline-none focus:border-white/20 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <motion.label
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focused === "email" || formState.email
                          ? "top-2 text-[10px] tracking-wider uppercase text-white/30"
                          : "top-4 text-sm text-white/20"
                      }`}
                    >
                      Email
                    </motion.label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      disabled={isFormDisabled}
                      className="w-full px-4 pt-6 pb-3 rounded-xl glass bg-transparent text-white text-sm focus:outline-none focus:border-white/20 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                      required
                    />
                  </div>

                  {/* Message field */}
                  <div className="relative">
                    <motion.label
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focused === "message" || formState.message
                          ? "top-2 text-[10px] tracking-wider uppercase text-white/30"
                          : "top-4 text-sm text-white/20"
                      }`}
                    >
                      Message
                    </motion.label>
                    <textarea
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      rows={5}
                      disabled={isFormDisabled}
                      className="w-full px-4 pt-6 pb-3 rounded-xl glass bg-transparent text-white text-sm focus:outline-none focus:border-white/20 transition-colors duration-300 resize-none disabled:opacity-40 disabled:cursor-not-allowed"
                      required
                    />
                  </div>

                  <MagneticButton
                    onClick={() => {}}
                  >
                    <span className="flex items-center gap-2">
                      {status === "sending" ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Send Message
                        </>
                      )}
                    </span>
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
