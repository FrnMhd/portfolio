"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function AboutSection() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  const skills = [
    { 
        name: "Frontend Development", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        description: "React, Next.js, Tailwind CSS" 
    },
    { 
        name: "Backend Development", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        description: "Node.js, Laravel, APIs" 
    },
    { 
        name: "Mobile Development", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        description: "Flutter, Cross-platform" 
    },
    { 
        name: "Python Scripting", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        description: "Automation, Data Processing" 
    },
    ];

  const techStack = [
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Laravel", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/laravel/laravel-original.svg" },
    { name: "Tailwind", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "APIs", icon: "https://img.icons8.com/fluency/48/api-settings.png" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  ];

  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-[#0a1628] via-[#0d1b35] to-[#0a1628] relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-emerald-400/8 blur-[100px] rounded-full animate-pulse"
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
              About Me
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left side - Text content */}
          <Reveal delay={0.2}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-400/20 backdrop-blur-sm mb-4">
                <span className="text-2xl">👨‍💻</span>
                <span className="text-sm font-medium text-blue-300">Full Stack Developer</span>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate developer with hands-on experience in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
                  full-stack development
                </span>
                , web technologies, and Python scripting. Proficient in building responsive designs, 
                integrating RESTful APIs, and using version control systems like Git.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Eager to contribute as a Web or Full-Stack Developer with a focus on{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-semibold">
                  practical problem-solving
                </span>{" "}
                and clean code.
              </p>
            </div>
          </Reveal>

          {/* Right side - Skills grid */}
          <Reveal delay={0.4}>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 cursor-default"
                  onMouseEnter={() => setHoveredSkill(i)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Gradient glow effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-500 -z-10 blur-xl ${
                      hoveredSkill === i ? "opacity-30" : ""
                    }`}
                  />

                  <div className="text-5xl mb-4 transform group-hover:scale-105 transition-transform duration-300">
                    <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-32">
          <Reveal>
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Tech Stack
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full" />
            </div>
          </Reveal>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {techStack.map((tech, i) => (
              <Reveal delay={i * 0.05} key={tech.name}>
                <div
                  className="group relative flex flex-col items-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-emerald-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 cursor-default"
                  onMouseEnter={() => setHoveredTech(i)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  {/* Gradient glow effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-400/20 opacity-0 transition-opacity duration-500 -z-10 blur-xl ${
                      hoveredTech === i ? "opacity-100" : ""
                    }`}
                  />

                  <div
                    className="w-12 h-12 mb-3 transition-transform duration-300"
                    style={{
                      transform: hoveredTech === i ? 'rotateY(360deg) scale(1.1)' : 'rotateY(0deg) scale(1)',
                    }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-300 text-center font-medium group-hover:text-emerald-400 transition-colors duration-300">
                    {tech.name}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}