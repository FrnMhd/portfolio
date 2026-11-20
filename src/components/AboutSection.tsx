"use client";

import Reveal from "@/components/Reveal";

export default function AboutSection() {
  const categories = [
    {
      title: "LANGUAGES",
      items: ["JavaScript", "Java", "Go", "PHP", "Python", "SQL"]
    },
    {
      title: "BACKEND & RUNTIMES",
      items: ["Node.js", "Spring Boot", "Laravel", "Express.js", "Next.js", "Flask"]
    },
    {
      title: "INFRASTRUCTURE & DB",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Docker", "Linux VPS", "Git"]
    }
  ];

  return (
    <section
      id="about"
      className="py-32 bg-background relative overflow-hidden border-b border-stone-800"
    >
      <div className="max-w-6xl mx-auto px-6 relative">
        
        {/* Section Header */}
        <Reveal>
          <div className="mb-20">
            <span className="text-[10px] text-brass font-mono uppercase tracking-widest block mb-3">
              [ 05 / ABOUT ]
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-ivory tracking-tight">
              About <span className="font-serif italic font-normal text-accent">Me</span>
            </h2>
          </div>
        </Reveal>

        {/* Biography & Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Biography Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6 font-sans text-sm md:text-base text-sand leading-relaxed">
            <Reveal delay={0.2}>
              <div>
                <span className="font-mono text-brass uppercase tracking-widest text-[10px] font-semibold block mb-2">{"// BACKGROUND"}</span>
                <p>
                  I am a backend-focused software engineer building resilient APIs, asynchronous job processing engines, and media streaming gateways. 
                  Rather than being tied to any single language, I approach engineering through core system fundamentals — concurrency, data consistency, caching, and clean service decoupling.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div>
                <span className="font-mono text-brass uppercase tracking-widest text-[10px] font-semibold block mb-2">{"// FOCUS"}</span>
                <p>
                  My hands-on production experience spans high-traffic platforms serving 20,000+ active users. 
                  Currently expanding across Java, Spring Boot, and Go while shipping robust Node.js and PHP/Laravel backend services.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Technical Matrix Table (5 cols) */}
          <div className="lg:col-span-5 font-mono text-xs">
            <Reveal delay={0.4}>
              <div>
                <span className="text-brass uppercase tracking-widest text-[10px] font-semibold block mb-4">{"// CORE_SKILLS"}</span>
                
                <div className="border-t border-stone-800 divide-y divide-stone-800">
                  {categories.map((cat, idx) => (
                    <div key={idx} className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
                      
                      {/* Left category title */}
                      <div className="sm:col-span-4 text-accent font-semibold tracking-wider uppercase text-[10px]">
                        {cat.title}
                      </div>

                      {/* Right list items */}
                      <div className="sm:col-span-8 flex flex-wrap gap-2">
                        {cat.items.map((item, itemIdx) => (
                          <span 
                            key={itemIdx}
                            className="px-2 py-0.5 border border-stone-850 bg-surface/20 text-ivory text-[10px] tracking-wide"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}