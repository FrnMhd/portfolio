"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ThreeScene to prevent SSR/hydration issues with WebGL
const ThreeScene = dynamic(() => import("./ThreeScene"), { ssr: false });

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 border-b border-stone-800"
    >
      {/* Editorial layout: 2 columns on medium+ screens */}
      <div className="max-w-6xl w-full mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column: Text & Content */}
        <div className="md:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/40 bg-accentDark/50 text-[10px] uppercase tracking-widest text-accent font-mono mb-8 rounded-none">
            <span className="w-1.5 h-1.5 bg-accent inline-block" />
            <span>Active / Open for Opportunities</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-ivory tracking-tight leading-[1.05] mb-6">
            Farhan M. <br />
            <span className="font-serif italic text-accent font-normal">
              Software Developer
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xs uppercase tracking-widest text-brass font-mono mb-6">
            Full-Stack Systems & Automation Architect
          </p>

          {/* Description */}
          <p className="text-sm md:text-base text-sand max-w-xl leading-relaxed mb-10 font-mono">
            Focusing on clean, structural code, system integration, and robust backends. 
            I build digital environments defined by functionality, precision, and logical design.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 font-mono text-xs uppercase tracking-wider">
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
          </div>

          {/* Core Technologies Index */}
          <div className="mt-16 border-t border-stone-850 pt-6 w-full max-w-lg font-mono text-[10px] text-sand">
            <span className="text-brass uppercase tracking-widest block mb-3 font-semibold">[CORE_SYSTEMS]</span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <div>// NEXT.JS</div>
              <div>// LARAVEL</div>
              <div>// PYTHON</div>
              <div>// NODEJS</div>
              <div>// API_SYSTEMS</div>
            </div>
          </div>

        </div>

        {/* Right Column: 3D interactive mesh */}
        <div className="md:col-span-5 w-full h-[350px] md:h-[480px] flex items-center justify-center relative p-4">
          {mounted && (
            <div className="w-full h-full border border-stone-800 bg-surface/10 relative flex items-center justify-center">
              {/* Drafting plus signs in all 4 corners */}
              <span className="absolute -top-1.5 -left-1.5 text-stone-600 font-mono text-xs select-none">+</span>
              <span className="absolute -top-1.5 -right-1.5 text-stone-600 font-mono text-xs select-none">+</span>
              <span className="absolute -bottom-1.5 -left-1.5 text-stone-600 font-mono text-xs select-none">+</span>
              <span className="absolute -bottom-1.5 -right-1.5 text-stone-600 font-mono text-xs select-none">+</span>

              {/* Technical framing labels */}
              <div className="absolute top-3 left-4 text-[8px] font-mono text-brass tracking-wider uppercase select-none">
                // system_simulation: active
              </div>
              <div className="absolute bottom-3 right-4 text-[8px] font-mono text-stone-500 tracking-wider uppercase select-none">
                3d_ref: [gimbal_system_01]
              </div>
              
              <div className="w-full h-full">
                <ThreeScene />
              </div>
            </div>
          )}
        </div>

      </div>
      
      {/* Decorative technical line */}
      <div className="absolute right-12 top-0 bottom-0 w-px bg-stone-850/50 hidden lg:block pointer-events-none" />
    </section>
  );
}