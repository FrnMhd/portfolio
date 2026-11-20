"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const projects = [
    {
      title: "Sales Intelligence Dashboard",
      desc: "Forecasting sales trends and business insights using Tailwind CSS, and Chart.js; backend using Express/Node.js with JWT authentication and Python (Prophet) ML.",
      tech: ["Tailwind", "NodeJS", "Pandas", "Python"],
      link: "https://github.com/FrnMhd/BI-Vision-sales-forecasting",
      num: "01",
    },
    {
      title: "BuildTrack - Construction",
      desc: "Platform for tracking workers, wages, and inventory at construction sites, improving site efficiency and transparency.",
      tech: ["PHP", "MySQL", "Bootstrap"],
      link: "https://github.com/FrnMhd",
      num: "02",
    },
    {
      title: "Admin Dashboard and CMS",
      desc: "A custom admin dashboard and CMS for managing the college's official website using PHP, Bootstrap, and MySQL.",
      tech: ["PHP", "Bootstrap", "MySQL"],
      link: "http://cuiet.info/",
      num: "03",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 bg-background relative overflow-hidden border-b border-stone-800"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <Reveal>
          <div className="mb-20">
            <span className="text-[10px] text-brass font-mono uppercase tracking-widest block mb-3">
              [ 03 / PROJECTS ]
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-ivory tracking-tight">
              Selected <span className="font-serif italic font-normal text-accent">Projects</span>
            </h2>
          </div>
        </Reveal>

        {/* Interactive List (Accordion Rows with Tactical Reticle Brackets) */}
        <div className="mt-12 border-t border-stone-800">
          {projects.map((project, i) => {
            const isExpanded = activeProject === i;
            const isHovered = hoveredIdx === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative border-b border-stone-800 transition-all duration-300 ${
                  isExpanded ? "bg-surface/20" : isHovered ? "bg-surface/10" : ""
                }`}
              >
                {/* Tactical Reticle Lock Corner Brackets on Hover/Expand */}
                <AnimatePresence>
                  {(isExpanded || isHovered) && (
                    <>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute top-2 left-2 text-accent font-mono text-xs select-none pointer-events-none z-20"
                      >
                        ┌
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute top-2 right-2 text-accent font-mono text-xs select-none pointer-events-none z-20"
                      >
                        ┐
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute bottom-2 left-2 text-accent font-mono text-xs select-none pointer-events-none z-20"
                      >
                        └
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute bottom-2 right-2 text-accent font-mono text-xs select-none pointer-events-none z-20"
                      >
                        ┘
                      </motion.span>
                    </>
                  )}
                </AnimatePresence>

                {/* Accordion Trigger Header */}
                <button
                  onClick={() => setActiveProject(isExpanded ? null : i)}
                  className="w-full py-8 px-4 flex flex-col md:flex-row md:items-center justify-between text-left group focus:outline-none relative z-10"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-accent font-bold">
                        {project.num}/
                      </span>
                      {isHovered && (
                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
                      )}
                    </div>
                    
                    <span className="font-serif text-3xl md:text-4xl font-light text-ivory group-hover:text-brass transition-colors duration-300">
                      {project.title}
                    </span>
                  </div>
                  
                  <div className="mt-4 md:mt-0 font-mono text-[10px] uppercase tracking-wider text-sand group-hover:text-accent transition-colors duration-300">
                    {isExpanded ? "[ collapse ]" : "[ expand ]"}
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out px-4 ${
                    isExpanded ? "max-h-[500px] opacity-100 pb-12" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-stone-800/80">
                    
                    {/* Left details (8 cols) */}
                    <div className="md:col-span-8 flex flex-col justify-between">
                      <p className="font-mono text-xs text-sand leading-relaxed max-w-2xl mb-6">
                        {project.desc}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider text-accent border border-accent/30 bg-accent/5 hover:border-accent transition-colors duration-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right link action (4 cols) */}
                    <div className="md:col-span-4 flex md:justify-end items-end">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ivory border border-accent/50 px-6 py-3 hover:bg-accent hover:text-background transition-all duration-300 shadow-[0_0_15px_rgba(200,112,64,0.15)]"
                      >
                        <span>[ open project ]</span>
                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* GitHub link button */}
        <Reveal delay={0.4}>
          <div className="mt-16 text-left">
            <a
              href="https://github.com/FrnMhd"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-sand hover:text-accent transition-colors py-2"
            >
              <span>[ view more code archives on github ]</span>
              <span className="group-hover:translate-x-1.5 transition-transform text-accent">→</span>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}