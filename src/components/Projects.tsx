"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(0);

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
      <div className="max-w-6xl mx-auto px-6 relative">
        
        {/* Section Header */}
        <Reveal>
          <div className="mb-20">
            <span className="text-[10px] text-brass font-mono uppercase tracking-widest block mb-3">
              [ 03 / work ]
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-ivory tracking-tight">
              Selected <span className="font-serif italic font-normal text-accent">Projects</span>
            </h2>
          </div>
        </Reveal>

        {/* Interactive List (Accordion Rows) */}
        <div className="mt-12 border-t border-stone-800">
          {projects.map((project, i) => {
            const isExpanded = activeProject === i;
            return (
              <div
                key={i}
                className="border-b border-stone-800 transition-colors duration-300"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => setActiveProject(isExpanded ? null : i)}
                  className="w-full py-8 flex flex-col md:flex-row md:items-center justify-between text-left group focus:outline-none"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-xs text-accent">
                      {project.num}/
                    </span>
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
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? "max-h-[500px] opacity-100 pb-12" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-stone-850/50">
                    
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
                            className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider text-accent border border-stone-800 bg-surface/30"
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
                        className="font-mono text-xs uppercase tracking-wider text-ivory border border-stone-750 px-5 py-3 hover:border-accent hover:text-accent transition-all duration-300"
                      >
                        [ launch project ]
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
              className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-sand hover:text-ivory py-2"
            >
              <span>[ view more code archives on github ]</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}