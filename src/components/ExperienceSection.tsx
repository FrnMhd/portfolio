"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function ExperienceSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const experiences = [
    {
      title: "Full Stack / Backend Developer",
      company: "Trogon Media Calicut",
      period: "Jun 2025 - Present",
      type: "Full-Time",
      loc: "Calicut, IN",
      points: [
        "Developed SaaS dashboards and web applications, LMS Systems using Laravel, CodeIgniter, and API integration.",
        "Integrated payment gateways and CRM systems to streamline business operations.",
      ],
      tags: ["Laravel", "Bootstrap", "API Integration"],
    },
    {
      title: "Flutter Developer Intern",
      company: "Maitexa Solutions Calicut",
      period: "Jul 2024 - Aug 2024",
      type: "Internship",
      loc: "Calicut, IN",
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
              [ 02 / history ]
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-ivory tracking-tight">
              Professional <span className="font-serif italic font-normal text-accent">Experience</span>
            </h2>
          </div>
        </Reveal>

        {/* Industrial Log List */}
        <div className="mt-12 border-t border-stone-800">
          {experiences.map((exp, i) => {
            const isHovered = hoveredIdx === i;

            return (
              <Reveal key={i} delay={i * 0.15}>
                <div
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`relative py-12 border-b border-stone-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-start transition-all duration-300 px-4 ${
                    isHovered ? "bg-surface/20 border-accent/40" : ""
                  }`}
                >
                  {/* Left Column: Dates & Company (4 cols) */}
                  <div className="md:col-span-4 font-mono relative">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-2 h-2 rounded-full ${isHovered ? "bg-accent animate-ping" : "bg-brass"}`} />
                      <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                        {exp.period}
                      </span>
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
                    <h3 className="font-serif text-2xl font-light text-ivory mb-4 tracking-wide">
                      {exp.title}
                    </h3>

                    {/* Points */}
                    <ul className="space-y-3 mb-6 font-mono text-xs text-sand">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent mr-3 flex-shrink-0 select-none">-</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider transition-colors duration-200 ${
                            isHovered
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