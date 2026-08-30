"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'experience', 'projects', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold slightly
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "home", num: "01" },
    { href: "#experience", label: "experience", num: "02" },
    { href: "#projects", label: "projects", num: "03" },
    { href: "#about", label: "about", num: "04" },
    { href: "#contact", label: "contact", num: "05" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-background/95 border-b border-stone-800"
        : "bg-transparent border-b border-transparent"
      }`}>
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between font-mono">

        {/* Brand */}
        <a href="#home" className="group flex flex-col items-start leading-none">
          <span className="font-serif font-bold text-xl tracking-wider text-ivory">
            FARHAN M.
          </span>
          <span className="text-[10px] text-accent font-mono mt-1 tracking-widest uppercase">
            [software_engineer]
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2 text-xs">
          {navItems.map((item, i) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={i}
                href={item.href}
                className={`relative px-4 py-2 transition-all duration-200 uppercase tracking-wider ${isActive
                    ? "text-accent font-semibold"
                    : "text-sand hover:text-ivory"
                  }`}
              >
                <span className="text-[10px] text-brass mr-1 font-mono">{item.num}.</span>
                <span>{item.label}</span>

                {/* Active indicator - sharp flat line */}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-accent" />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-xs uppercase tracking-widest font-mono text-sand hover:text-ivory px-2 py-1 border border-stone-850 hover:border-stone-700 bg-surface/50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "[ close ]" : "[ menu ]"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-stone-800 px-6 py-6 font-mono text-xs">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, i) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={i}
                  href={item.href}
                  className={`flex items-center py-2 transition-all duration-205 uppercase tracking-wider ${isActive ? "text-accent font-bold" : "text-sand hover:text-ivory"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[9px] text-brass mr-2 font-mono">{item.num} /</span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="ml-2 w-1.5 h-1.5 bg-accent" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}