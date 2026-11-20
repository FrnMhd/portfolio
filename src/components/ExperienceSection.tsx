"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { motion, AnimatePresence } from "framer-motion";

export default function ExperienceSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mousePositions, setMousePositions] = useState<{
    [key: number]: { x: number; y: number };
  }>({});

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    idx: number
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePositions((prev) => ({
      ...prev,
      [idx]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  const experiences = [
    {
      title: "Backend / Full-Stack Developer",
      company: "Trogon Media",
      period: "Jun 2025 - Present",
      type: "Full-Time",
      loc: "Calicut, IN",
      isCurrent: true,
      points: [
        "Architect and maintain production backend modules and RESTful APIs serving 20,000+ users across educational platforms.",
        "Engineered role-based access control (RBAC), secure payment gateway integrations, and data-driven administrative workflows.",
        "Spearheaded database schema design, query optimization, and cross-client API contracts for web and mobile consumers.",
      ],
      tags: ["PHP", "Laravel", "REST APIs", "MySQL", "RBAC", "Payments"],
    },
    {
      title: "Flutter Developer Intern",
      company: "Maitexa Solutions Calicut",
      period: "Jul 2024 - Aug 2024",
      type: "Internship",
      loc: "Calicut, IN",
      isCurrent: false,
      points: [
        "Developed cross-platform mobile applications for notes management using Flutter and Dart.",
        "Implemented user authentication, data storage, and real-time updates using Firebase.",
      ],
      tags: ["Flutter", "Dart", "Firebase"],
    },
    {
      title: "Freelance Developer",
      company: "Independent",
      period: "Mar 2020 - Present",
      type: "Freelance",
      loc: "Remote",
      isCurrent: false,
      points: [
        "Integrated and deployed websites using modern HTML, CSS, and JavaScript technologies.",
        "Created powerful Content Management Systems to serve as client interfaces.",
      ],
      tags: ["HTML", "CSS", "JavaScript", "CMS"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-32 bg-background relative overflow-hidden border-b border-stone-800"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <Reveal>
          <div className="mb-20">
            <span className="text-[10px] text-brass font-mono uppercase tracking-widest block mb-3">
              [ 02 / EXPERIENCE ]
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-ivory tracking-tight">
              Professional <span className="font-serif italic font-normal text-accent">Experience</span>
            </h2>
          </div>
        </Reveal>

        {/* Industrial Timeline Container */}
        <div className="mt-12 border-t border-stone-800 relative">

          {/* Subtle Vertical Copper Timeline Line */}
          <div className="absolute left-6 top-8 bottom-12 w-px bg-gradient-to-b from-accent via-stone-800 to-transparent pointer-events-none hidden md:block" />

          {experiences.map((exp, i) => {
            const isHovered = hoveredIdx === i;
            const mousePos = mousePositions[i];

            return (
              <Reveal key={i} delay={i * 0.15}>
                <div
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onMouseMove={(e) => handleMouseMove(e, i)}
                  style={{
                    background:
                      isHovered && mousePos
                        ? `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(200, 112, 64, 0.08), transparent 65%)`
                        : undefined,
                  }}
                  className={`relative py-12 border-b border-stone-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-start transition-all duration-300 px-6 ${isHovered
                      ? "bg-surface/25 border-accent/40 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                      : "hover:bg-surface/10"
                    }`}
                >
                  {/* Tactical Reticle Lock Corner Brackets on Hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <>
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute top-2 left-2 text-accent font-mono text-xs select-none pointer-events-none"
                        >
                          ┌
                        </motion.span>
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute top-2 right-2 text-accent font-mono text-xs select-none pointer-events-none"
                        >
                          ┐
                        </motion.span>
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute bottom-2 left-2 text-accent font-mono text-xs select-none pointer-events-none"
                        >
                          └
                        </motion.span>
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute bottom-2 right-2 text-accent font-mono text-xs select-none pointer-events-none"
                        >
                          ┘
                        </motion.span>
                      </>
                    )}
                  </AnimatePresence>

                  {/* Left Column: Dates & Company (4 cols) */}
                  <div className="md:col-span-4 font-mono relative md:pl-6">
                    {/* Timeline Node Dot */}
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <div className="relative flex items-center justify-center">
                        {exp.isCurrent ? (
                          <>
                            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping absolute" />
                            <span className="w-2.5 h-2.5 rounded-full bg-accent relative z-10" />
                          </>
                        ) : (
                          <span
                            className={`w-2 h-2 rounded-full transition-colors duration-200 ${isHovered ? "bg-accent" : "bg-brass/80"
                              }`}
                          />
                        )}
                      </div>

                      <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                        {exp.period}
                      </span>

                      {/* Active Production Beacon Tag */}
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 border border-accent/40 bg-accent/10 text-[9px] uppercase tracking-wider text-accent font-mono font-semibold">
                          <span className="w-1 h-1 bg-accent rounded-full animate-pulse" />
                          ACTIVE
                        </span>
                      )}
                    </div>

                    <div className="text-ivory text-sm uppercase tracking-widest font-semibold mb-1">
                      {exp.company}
                    </div>

                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-stone-400">
                      <span>{exp.loc}</span>
                      <span>•</span>
                      <span className="text-brass font-semibold">{exp.type}</span>
                    </div>
                  </div>

                  {/* Right Column: Title, Points, Tags (8 cols) */}
                  <div className="md:col-span-8">
                    <h3 className="font-serif text-2xl font-light text-ivory mb-4 tracking-wide group-hover:text-brass transition-colors">
                      {exp.title}
                    </h3>

                    {/* Points */}
                    <ul className="space-y-3 mb-6 font-sans text-sm text-sand leading-relaxed">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent mr-3 flex-shrink-0 select-none">
                            -
                          </span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider transition-colors duration-200 ${isHovered
                              ? "text-accent border border-accent/40 bg-accent/10"
                              : "text-brass border border-stone-800 bg-surface/30"
                            }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
