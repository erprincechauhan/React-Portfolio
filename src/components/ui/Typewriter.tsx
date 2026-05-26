"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  texts: string[];
  delay?: number;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function Typewriter({
  texts,
  delay = 0,
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
  className = "",
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [started, setStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Wait for initial delay before starting
  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const currentText = texts[textIndex];

  const tick = useCallback(() => {
    if (!started || isPaused) return;

    if (!isDeleting) {
      // Typing
      if (displayedText.length < currentText.length) {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      } else {
        // Finished typing — pause then start deleting
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting
      if (displayedText.length > 0) {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
      } else {
        // Finished deleting — move to next text
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [started, isPaused, isDeleting, displayedText, currentText, texts.length, pauseDuration]);

  useEffect(() => {
    if (!started || isPaused) return;
    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [started, isPaused, tick, isDeleting, typeSpeed, deleteSpeed]);

  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span>{displayedText || "\u00A0"}</span>
      {started && (
        <motion.span
          className="inline-block w-[3px] md:w-[5px] self-stretch bg-white/80 ml-1 md:ml-2 rounded-full"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          style={{ minHeight: "0.8em" }}
        />
      )}
    </span>
  );
}
