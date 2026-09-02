"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function ContactSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const contactLinks = [
    {
      label: "EMAIL_ENDPOINT",
      value: "farhanmedappil@gmail.com",
      url: "mailto:farhanmedappil@gmail.com",
      code: "01"
    },
    {
      label: "LINKEDIN_PROFILE",
      value: "linkedin.com/in/farhanmp",
      url: "https://www.linkedin.com/in/farhanmp",
      code: "02"
    },
    {
      label: "GITHUB_REPOSITORY",
      value: "github.com/FrnMhd",
      url: "https://github.com/FrnMhd",
      code: "03"
    }
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <>
      <section
        id="contact"
        className="py-32 bg-background relative overflow-hidden border-b border-stone-850"
      >
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <Reveal>
            <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between">
              <div>
                <span className="text-[10px] text-brass font-mono uppercase tracking-widest block mb-3">
                  [ 05 / ENDPOINT_TRANSMISSION ]
                </span>
                <h2 className="text-4xl md:text-5xl font-light text-ivory tracking-tight">
                  Get In <span className="font-serif italic font-normal text-accent">Touch</span>
                </h2>
              </div>
              <div className="mt-4 md:mt-0 font-mono text-[10px] uppercase tracking-widest text-stone-500">
                {"// SIGNAL_STRENGTH: 100%"}
              </div>
            </div>
          </Reveal>

          {/* Contact Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side info (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start font-mono text-xs text-sand">
              <p className="leading-relaxed mb-8 max-w-xl text-stone-300">
                Interested in collaboration, backend system integration, or automation pipelines? 
                Feel free to establish communication through the endpoints provided here.
              </p>
              
              {/* Tactical Status Panel */}
              <div className="relative border border-accent/40 bg-surface/20 p-8 w-full max-w-xl shadow-[0_0_20px_rgba(200,112,64,0.08)]">
                {/* Corner Crosshair Reticles */}
                <span className="absolute top-2 left-2 text-accent text-xs">┌</span>
                <span className="absolute top-2 right-2 text-accent text-xs">┐</span>
                <span className="absolute bottom-2 left-2 text-accent text-xs">└</span>
                <span className="absolute bottom-2 right-2 text-accent text-xs">┘</span>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-brass uppercase tracking-widest text-[10px] font-semibold">
                    {"// COMMUNICATIONS_STATUS"}
                  </span>
                  <span className="text-[9px] text-stone-500 uppercase tracking-widest">
                    LATENCY: 12ms
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-accent rounded-full animate-ping" />
                  <span className="text-[11px] text-ivory uppercase tracking-wider font-semibold">
                    Accepting freelance contracts & corporate queries.
                  </span>
                </div>
              </div>
            </div>

            {/* Right side contact links (5 cols) */}
            <div className="lg:col-span-5 font-mono text-xs w-full">
              <div className="border-t border-stone-800 divide-y divide-stone-800">
                {contactLinks.map((link, idx) => (
                  <div
                    key={idx}
                    className="py-5 flex justify-between items-center group hover:bg-surface/20 px-3 transition-colors duration-300 relative"
                  >
                    <div className="flex flex-col">
                      <span className="text-brass uppercase tracking-widest text-[10px] font-semibold flex items-center gap-2">
                        <span className="text-accent">{link.code}.</span>
                        {link.label}
                      </span>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ivory group-hover:text-accent font-mono text-xs transition-colors duration-300 mt-1"
                      >
                        {link.value}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleCopy(link.value, idx)}
                        className="text-[9px] uppercase tracking-wider text-stone-500 hover:text-brass border border-stone-800 px-2 py-1 transition-colors"
                      >
                        {copiedIndex === idx ? "[ COPIED! ]" : "[ COPY ]"}
                      </button>

                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent group-hover:translate-x-1.5 transition-transform"
                      >
                        →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-stone-850 text-center font-mono text-[10px] text-stone-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} Farhan Medappil. Built with Next.js, Tailwind, and Three.js.
          </p>
          <div className="flex items-center gap-4 uppercase tracking-widest text-stone-600">
            <span>[ SYSTEM_ONLINE ]</span>
            <span>•</span>
            <span>[ ALL_RIGHTS_RESERVED ]</span>
          </div>
        </div>
      </footer>
    </>
  );
}
