"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function ExperienceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: "Full Stack / Backend Developer Intern",
      company: "Trogon Media Calicut",
      period: "Jun 2025 - Present",
      points: [
        "Developed SaaS dashboards and web applications using Bootstrap, CodeIgniter/Laravel, and API integration.",
        "Integrated payment gateways and CRM systems to streamline business operations.",
      ],
      tags: ["Laravel", "Bootstrap", "API Integration"],
    },
    {
      title: "Flutter Developer",
      company: "Maitexa Solutions Calicut",
      period: "Jul 2024 - Aug 2024",
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
      className="py-32 bg-gradient-to-b from-[#0a1628] via-[#0d1b35] to-[#0a1628] relative overflow-hidden"
    >
      {/* Background accents matching hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-emerald-500/8 blur-[100px] rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-0 right-1/3 w-80 h-80 bg-teal-400/8 blur-[100px] rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Experience
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full" />
            {/* <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto rounded-full" /> */}
          </div>
        </Reveal>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical timeline line with gradient */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/40 via-purple-500/40 via-emerald-400/40 to-teal-400/40 transform md:-translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <Reveal key={i} delay={i * 0.2}>
                <div
                  className={`relative flex ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center`}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Timeline dot with pulsing animation */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className="relative">
                      {/* Outer pulsing ring */}
                      <div
                        className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 animate-ping opacity-75`}
                      />
                      {/* Inner dot */}
                      <div
                        className={`relative w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 shadow-lg transition-all duration-300 ${
                          hoveredIndex === i
                            ? "scale-150 shadow-purple-500/60"
                            : ""
                        }`}
                      >
                        {/* Emerald/Teal accent glow on hover */}
                        {hoveredIndex === i && (
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 blur-sm animate-pulse" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    } pl-20 md:pl-0`}
                  >
                    <div
                      className={`group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/10 transition-all duration-500 ${
                        hoveredIndex === i
                          ? "shadow-2xl shadow-purple-500/20 -translate-y-2 scale-[1.02] border-purple-500/30"
                          : "hover:-translate-y-1 hover:border-white/20"
                      }`}
                    >
                      {/* Gradient border glow effect */}
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 via-emerald-400/20 to-teal-400/20 opacity-0 transition-opacity duration-500 -z-10 blur-xl ${
                          hoveredIndex === i ? "opacity-30" : ""
                        }`}
                      />

                      {/* Period badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mb-4 border border-blue-400/20 backdrop-blur-sm">
                        <svg
                          className="w-4 h-4 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-sm font-medium text-blue-300">
                          {exp.period}
                        </span>
                      </div>

                      {/* Title and Company */}
                      <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
                        {exp.company}
                      </p>

                      {/* Points */}
                      <ul className="space-y-3 mb-6">
                        {exp.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <svg
                              className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags with emerald/teal accents */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/10 hover:border-emerald-400/50 hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-teal-400/10 transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternate sides */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}