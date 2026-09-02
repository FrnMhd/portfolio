"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ArchitecturalTitleHoverProps {
  text: string;
  isItalic?: boolean;
  className?: string;
}

// Architectural / Monospace scramble characters
const SCRAMBLE_CHARS = "0123456789ABCDEF///[]{}#$_<>";

export default function ArchitecturalTitleHover({
  text,
  isItalic = false,
  className = "",
}: ArchitecturalTitleHoverProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const scrambleIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Trigger high-tech character scramble on hover
  const triggerScramble = () => {
    if (scrambleIntervalRef.current) clearInterval(scrambleIntervalRef.current);

    let iteration = 0;
    const maxIterations = text.length * 3;

    scrambleIntervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration / 3) return text[index];
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
          .join("")
      );

      iteration += 1;
      if (iteration >= maxIterations) {
        if (scrambleIntervalRef.current) clearInterval(scrambleIntervalRef.current);
        setDisplayText(text);
      }
    }, 28);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    triggerScramble();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredIndex(null);
    setMousePos({ x: -1000, y: -1000 });
    if (scrambleIntervalRef.current) clearInterval(scrambleIntervalRef.current);
    setDisplayText(text);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Determine which character is currently under cursor
    const charWidth = rect.width / text.length;
    const idx = Math.floor(x / charWidth);
    setHoveredIndex(Math.max(0, Math.min(text.length - 1, idx)));
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={`relative inline-block cursor-pointer select-none group py-2 px-1 ${className}`}
    >
      {/* Clean Character Kinetic Layout */}
      <div className="relative z-10 flex flex-wrap items-center">
        {displayText.split("").map((char, index) => {
          if (char === " ") {
            return (
              <span key={index} className="inline-block w-[0.25em]">
                &nbsp;
              </span>
            );
          }

          const isCharHovered = hoveredIndex === index;

          return (
            <motion.span
              key={index}
              animate={{
                y: isCharHovered ? -6 : isHovered ? -2 : 0,
                scale: isCharHovered ? 1.12 : 1,
                color: isCharHovered
                  ? "#c87040"
                  : isItalic
                  ? "#c87040"
                  : "var(--text-ivory)",
              }}
              transition={{ type: "spring", stiffness: 450, damping: 25 }}
              className={`inline-block transition-shadow ${
                isItalic ? "font-serif italic" : ""
              }`}
              style={{
                textShadow: isCharHovered
                  ? "0 0 16px rgba(200, 112, 64, 0.7)"
                  : "none",
              }}
            >
              {char}
            </motion.span>
          );
        })}
      </div>

      {/* Architectural Spotlight & Monospace Coordinates Badge */}
      <AnimatePresence>
        {isHovered && mousePos.x > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute z-20 flex flex-col items-center justify-center"
            style={{
              top: mousePos.y - 45,
              left: mousePos.x - 45,
            }}
          >
            {/* Minimalist Architectural Target Circle with Crosshairs */}
            <div className="relative w-20 h-20 rounded-full border border-accent/60 bg-accent/5 backdrop-blur-[2px] flex items-center justify-center shadow-[0_0_20px_rgba(200,112,64,0.3)]">
              {/* Horizontal & Vertical Crosshairs */}
              <div className="absolute w-full h-[1px] bg-accent/30" />
              <div className="absolute h-full w-[1px] bg-accent/30" />
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </div>

            {/* Architectural Coordinate Tag */}
            <span className="mt-1 px-1.5 py-0.5 bg-surface/90 border border-accent/40 text-[9px] font-mono tracking-widest text-accent shadow-md uppercase">
              SYS::{(mousePos.x).toFixed(0)}.{ (mousePos.y).toFixed(0) }
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle Metallic Sheen Underline Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-accent via-brass to-accent origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
