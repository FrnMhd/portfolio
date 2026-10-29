"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'experience', 'projects', 'process', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
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
    { href: "#process", label: "process", num: "04" },
    { href: "#about", label: "about", num: "05" },
    { href: "#contact", label: "contact", num: "06" },
  ];

  const handleReplayIntro = () => {
    window.dispatchEvent(new CustomEvent("replay-hello-intro"));
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-background/95 border-b border-stone-800 shadow-md backdrop-blur-md"
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

          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            title="Toggle Light / Dark Architectural Theme"
            className="flex items-center gap-1.5 px-3 py-1 text-[10px] text-ivory hover:text-accent border border-accent/40 hover:border-accent bg-accent/10 transition-all duration-200 uppercase tracking-widest ml-3 font-mono group"
          >
            <span className="text-accent group-hover:rotate-180 transition-transform duration-500">
              {theme === "dark" ? "☼" : "☾"}
            </span>
            <span>{theme === "dark" ? "[ DAYLIGHT ]" : "[ NIGHTFALL ]"}</span>
          </button>

          {/* Replay Intro Button */}
          <button
            onClick={handleReplayIntro}
            title="Replay intro animation"
            className="flex items-center gap-1.5 px-3 py-1 text-[10px] text-sand hover:text-accent border border-stone-800 hover:border-accent/50 bg-surface/30 transition-all duration-200 uppercase tracking-widest ml-1 font-mono"
          >
            <span className="w-1.5 h-1.5 bg-accent animate-pulse" />
            <span>[ replay ]</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Theme Switch */}
          <button
            onClick={toggleTheme}
            className="text-xs uppercase tracking-widest font-mono text-accent px-2.5 py-1 border border-accent/40 bg-accent/10"
          >
            {theme === "dark" ? "☼ DAY" : "☾ NIGHT"}
          </button>

          {/* Mobile Toggle Button */}
          <button
            className="text-xs uppercase tracking-widest font-mono text-sand hover:text-ivory px-2 py-1 border border-stone-800 bg-surface/50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "[ close ]" : "[ menu ]"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-stone-800 px-6 py-6 font-mono text-xs shadow-xl">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, i) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={i}
                  href={item.href}
                  className={`flex items-center py-2 transition-all duration-200 uppercase tracking-wider ${isActive ? "text-accent font-bold" : "text-sand hover:text-ivory"
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

            <div className="flex items-center justify-between border-t border-stone-800 pt-4 mt-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleReplayIntro();
                }}
                className="flex items-center gap-2 py-2 text-accent uppercase tracking-widest font-mono text-xs"
              >
                <span className="w-1.5 h-1.5 bg-accent animate-pulse" />
                <span>[ replay intro ]</span>
              </button>

              <button
                onClick={(e) => {
                  setIsOpen(false);
                  toggleTheme(e);
                }}
                className="flex items-center gap-2 py-2 text-ivory uppercase tracking-widest font-mono text-xs px-3 border border-accent/40 bg-accent/10"
              >
                <span>{theme === "dark" ? "☼ DAYLIGHT" : "☾ NIGHTFALL"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}