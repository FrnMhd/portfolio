"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import ArchitecturalTitleHover from "./ArchitecturalTitleHover";

// Dynamically import ThreeScene to prevent SSR/hydration issues with WebGL
const ThreeScene = dynamic(() => import("./ThreeScene"), { ssr: false });

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Track scroll progress of the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // 1. Staggered Scroll Parallax (each element translates at a different speed)
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const descY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const btnsY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const techY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const webglY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // 2. Staggered Scroll Fade-outs (elements dissolve progressively)
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const descOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const btnsOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const techOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const webglOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  // Easing definitions for intro load
  const easeCurve = [0.16, 1, 0.3, 1] as const; // Premium snappy cubic-bezier

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 border-b border-stone-800"
    >
      {/* Layout grid */}
      <div className="max-w-6xl w-full mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">

        {/* Left Column: Text & Content */}
        <div className="md:col-span-7 flex flex-col items-start text-left">

          {/* Status Badge (Staggered Scroll & Quick Fade) */}
          <motion.div
            style={{ y: badgeY, opacity: badgeOpacity }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 border border-accent/40 bg-accentDark/50 text-[10px] uppercase tracking-widest text-accent font-mono mb-8 rounded-none"
          >
            <span className="w-1.5 h-1.5 bg-accent inline-block" />
            <span>Active / Open for Opportunities</span>
          </motion.div>

          {/* Masked Heading Reveal with Clean Architectural Hover Kinetics */}
          <motion.div style={{ y: titleY, opacity: titleOpacity }} className="w-full">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-ivory tracking-tight leading-[1.05] mb-6 flex flex-col items-start gap-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: easeCurve, delay: 0.2 }}
              >
                <ArchitecturalTitleHover text="Farhan M." />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: easeCurve, delay: 0.35 }}
              >
                <ArchitecturalTitleHover
                  text="Software Developer"
                  isItalic={true}
                  className="text-accent"
                />
              </motion.div>
            </h1>
          </motion.div>

          {/* Subheading & Description */}
          <motion.div
            style={{ y: descY, opacity: descOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: easeCurve, delay: 0.5 }}
            className="w-full"
          >
            <p className="text-xs uppercase tracking-widest text-brass font-mono mb-6">
              Full-Stack Systems & Automation Architect
            </p>
            <p className="text-sm md:text-base text-sand max-w-xl leading-relaxed mb-10 font-mono">
              Focusing on clean, structural code, system integration, and robust backends.
              I build digital environments defined by functionality, precision, and logical design.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            style={{ y: btnsY, opacity: btnsOpacity }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: easeCurve, delay: 0.65 }}
            className="flex flex-wrap gap-4 font-mono text-xs uppercase tracking-wider"
          >
            <a
              href="#projects"
              className="bg-accent text-background px-6 py-3.5 hover:bg-brass hover:text-background transition-colors duration-300 font-semibold"
            >
              [ View Projects ]
            </a>

            <a
              href="#contact"
              className="border border-stone-750 text-ivory px-6 py-3.5 hover:border-ivory transition-colors duration-300"
            >
              [ Connect ]
            </a>
          </motion.div>

          {/* Core Technologies Index (with bottom line animation) */}
          <motion.div
            style={{ y: techY, opacity: techOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: easeCurve, delay: 0.8 }}
            className="mt-16 pt-6 w-full max-w-lg font-mono text-[10px] text-sand relative"
          >
            {/* Horizontal divider line drawing itself */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: easeCurve, delay: 0.6 }}
              className="absolute top-0 left-0 w-full h-px bg-stone-850 origin-left"
            />
            <span className="text-brass uppercase tracking-widest block mb-3 font-semibold">[CORE_SYSTEMS]</span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <div>{"// NEXT.JS"}</div>
              <div>{"// LARAVEL"}</div>
              <div>{"// PYTHON"}</div>
              <div>{"// NODEJS"}</div>
              <div>{"// API_SYSTEMS"}</div>
            </div>
          </motion.div>

        </div>

        {/* Right Column: 3D interactive mesh */}
        <motion.div 
          style={{ y: webglY, opacity: webglOpacity }}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: easeCurve, delay: 0.4 }}
          className="md:col-span-5 w-full h-[350px] md:h-[480px] flex items-center justify-center relative p-4"
        >
          {mounted && (
            <div className="w-full h-full border border-stone-800 bg-surface/10 relative flex items-center justify-center">
              {/* Drafting plus signs in all 4 corners */}
              <span className="absolute -top-1.5 -left-1.5 text-stone-600 font-mono text-xs select-none">+</span>
              <span className="absolute -top-1.5 -right-1.5 text-stone-600 font-mono text-xs select-none">+</span>
              <span className="absolute -bottom-1.5 -left-1.5 text-stone-600 font-mono text-xs select-none">+</span>
              <span className="absolute -bottom-1.5 -right-1.5 text-stone-600 font-mono text-xs select-none">+</span>

              {/* Technical framing labels */}
              <div className="absolute top-3 left-4 text-[8px] font-mono text-brass tracking-wider uppercase select-none">
                {"// system_simulation: active"}
              </div>
              <div className="absolute bottom-3 right-4 text-[8px] font-mono text-stone-500 tracking-wider uppercase select-none">
                3d_ref: [gimbal_system_01]
              </div>

              <div className="w-full h-full">
                <ThreeScene />
              </div>
            </div>
          )}
        </motion.div>

      </div>

      {/* Decorative vertical blueprint line drawing itself */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2.0, ease: easeCurve, delay: 0.1 }}
        className="absolute right-12 top-0 bottom-0 w-px bg-stone-850/50 hidden lg:block pointer-events-none origin-top"
      />
    </section>
  );
}