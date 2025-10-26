"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d1b35] to-[#0a1628]">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] animate-pulse"
          
        />
        <div
          className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-purple-500/25 rounded-full blur-[130px] animate-pulse"
          
        />
        <div
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[140px] animate-pulse"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-emerald-400/15 rounded-full blur-[100px] animate-pulse"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none" />
      
      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

      {/* Scroll indicator - Fixed position */}
      <div
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-gray-400 animate-bounce">
          <span className="text-xs font-medium">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Greeting text with stagger animation */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8 shadow-lg">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">Open to work</span>
          </div>
        </div>

        {/* Main heading with enhanced gradient */}
        <h1
          className={`text-6xl md:text-8xl font-bold b-6 tracking-tight transition-all duration-1000 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Hi 👋, I&apos;m Farhan
          </span>
        </h1>

        {/* Subheading */}
        <p
          className={`text-xl md:text-3xl text-gray-300 mb-4 font-light transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Full Stack Developer • Automation Enthusiast
        </p>

        {/* Description */}
        <p
          className={`text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Crafting seamless digital experiences with clean code and creative solutions.
          Passionate about building tools that make life easier.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#projects"
            className="group relative bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 text-white py-4 px-10 rounded-full font-semibold shadow-2xl hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Projects
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          
          <a
            href="#contact"
            className="group relative bg-white/5 backdrop-blur-md border-2 border-white/20 text-white py-4 px-10 rounded-full font-semibold hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-2">
              Contact Me
              <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </div>

        {/* Tech stack icons */}
        <div
          className={`flex flex-wrap items-center justify-center gap-6 mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-gray-500 text-sm font-medium">Tech Stack:</div>
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'Laravel', 'Flutter'].map((tech, i) => (
            <div
              key={tech}
              className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-300 text-sm font-medium hover:bg-white/10 hover:border-emerald-400/30 hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {tech}
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 6s linear infinite;
        }
      `}</style>
    </section>
  );
}