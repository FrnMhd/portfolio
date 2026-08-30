"use client";

import Reveal from "@/components/Reveal";

export default function ContactSection() {
  const contactLinks = [
    {
      label: "EMAIL",
      value: "farhanmedappil@gmail.com",
      url: "mailto:farhanmedappil@gmail.com"
    },
    {
      label: "LINKEDIN",
      value: "linkedin.com/in/farhanmp",
      url: "https://www.linkedin.com/in/farhanmp"
    },
    {
      label: "GITHUB",
      value: "github.com/FrnMhd",
      url: "https://github.com/FrnMhd"
    }
  ];

  return (
    <>
      <section
        id="contact"
        className="py-32 bg-background relative overflow-hidden border-b border-stone-850"
      >
        <div className="max-w-6xl mx-auto px-6 relative">
          
          {/* Section Header */}
          <Reveal>
            <div className="mb-20">
              <span className="text-[10px] text-brass font-mono uppercase tracking-widest block mb-3">
                [ 05 / contact ]
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-ivory tracking-tight">
                Get In <span className="font-serif italic font-normal text-accent">Touch</span>
              </h2>
            </div>
          </Reveal>

          {/* Contact Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side info (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start font-mono text-xs text-sand">
              <p className="leading-relaxed mb-8 max-w-xl">
                Interested in collaboration, backend system integration, or automation pipelines? 
                Feel free to establish communication through the endpoints provided here.
              </p>
              
              <div className="border border-stone-850 bg-surface/10 p-8 w-full max-w-xl">
                <span className="text-brass uppercase tracking-widest text-[10px] font-semibold block mb-4">
                  // COMMUNICATIONS_STATUS
                </span>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent inline-block animate-pulse" />
                  <span className="text-[11px] text-ivory uppercase tracking-wider">
                    Accepting freelance contracts & corporate queries.
                  </span>
                </div>
              </div>
            </div>

            {/* Right side contact links (5 cols) */}
            <div className="lg:col-span-5 font-mono text-xs w-full">
              <div className="border-t border-stone-800 divide-y divide-stone-800">
                {contactLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-5 flex justify-between items-center group hover:bg-surface/10 px-2 transition-colors duration-300"
                  >
                    <span className="text-brass uppercase tracking-widest text-[10px] font-semibold">
                      {link.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-sand group-hover:text-ivory transition-colors duration-300">
                        {link.value}
                      </span>
                      <span className="text-accent group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-transparent text-center font-mono text-[10px] text-stone-600">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} Farhan Medappil. Built with Next.js, Tailwind, and Three.js.
          </p>
          <p className="uppercase tracking-widest text-stone-700">
            [ ALL_RIGHTS_RESERVED ]
          </p>
        </div>
      </footer>
    </>
  );
}
