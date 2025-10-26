"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Sales Intelligence Dashboard",
      desc: "Forecasting sales trends and business insights using Tailwind CSS, and Chart.js; backend using Express/Node.js with JWT authentication and Python (Prophet) ML.",
      tech: ["Tailwind", "NodeJS", "Pandas", "Python (Prophet)"],
      link: "https://github.com/FrnMhd/BI-Vision-sales-forecasting",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "BuildTrack - Construction Management",
      desc: "Platform for tracking workers, wages, and inventory at construction sites, improving site efficiency and transparency.",
      tech: ["PHP", "MySQL", "Bootstrap"],
      link: "https://github.com/FrnMhd",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Custom Admin Dashboard and CMS System",
      desc: "A custom admin dashboard and CMS for managing the college's official website using PHP, Bootstrap, and MySQL.",
      tech: ["PHP", "Bootstrap", "MySQL"],
      link: "http://cuiet.info/",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 bg-gradient-to-b from-[#0a1628] via-[#0d1b35] to-[#0a1628] relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-pink-500/8 blur-[100px] rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Featured Projects
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              A showcase of my recent work in web development, automation, and data-driven solutions
            </p>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div
                className="group relative h-full"
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Card */}
                <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col">
                  {/* Gradient glow effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 -z-10 blur-xl ${
                      hoveredProject === i ? "opacity-10" : ""
                    }`}
                  />

                  {/* Top gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} rounded-t-2xl`} />

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                      {project.desc}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/10 hover:border-emerald-400/50 hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-teal-400/10 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      <span>View Project</span>
                      <svg
                        className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                      <svg
                        className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>

                  {/* Corner accent */}
                  <div
                    className={`absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.6}>
          <div className="text-center mt-16">
            <a
              href="https://github.com/FrnMhd"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md border-2 border-white/20 text-white rounded-full font-semibold hover:bg-white/10 hover:border-emerald-400/50 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View All Projects on GitHub
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}