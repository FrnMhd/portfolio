import { useState, useEffect } from "react";
import { FaHome, FaUser, FaCode, FaRocket, FaBriefcase, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home", icon: <FaHome className="w-4 h-4" /> },
    { href: "#about", label: "About", icon: <FaUser className="w-4 h-4" /> },
    { href: "#skills", label: "Skills", icon: <FaCode className="w-4 h-4" /> },
    { href: "#projects", label: "Projects", icon: <FaRocket className="w-4 h-4" /> },
    { href: "#experience", label: "Experience", icon: <FaBriefcase className="w-4 h-4" /> },
    { href: "#contact", label: "Contact", icon: <FaEnvelope className="w-4 h-4" /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-slate-900/95 backdrop-blur-2xl border-b border-slate-700/50 shadow-2xl" 
        : "bg-transparent backdrop-blur-md"
    }`}>
      {/* Animated gradient border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Premium Brand */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center shadow-lg shadow-black-500/20 group-hover:shadow-gray-500/30 transition-all duration-300">
              <FaCode className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-black-200 to-gray-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
          </div>
          
          <div className="flex flex-col">
            {/* <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400"> */}
             <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-light">
              Farhan M
            </span>
            <span className="text-xs text-slate-400 font-medium">Full-Stack Developer</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((link, i) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={i}
                href={link.href}
                className={`relative flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? "text-emerald-400 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10" 
                    : "text-slate-300 hover:text-emerald-300"
                }`}
              >
                <div className={`transition-transform duration-300 ${isActive ? "scale-110" : ""}`}>
                  {link.icon}
                </div>
                <span className="font-medium text-sm">{link.label}</span>
                
                {/* Simple active indicator */}
                <div className={`absolute bottom-0 left-1/2 h-0.5 bg-emerald-400 transition-all duration-300 -translate-x-1/2 ${
                  isActive ? "w-3/4" : "w-0"
                }`}></div>
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        {/* <div className="hidden md:flex items-center space-x-4">
          <a
            href="#contact"
            className="relative group px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-medium text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <FaEnvelope className="w-4 h-4" />
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div> */}

        {/* Mobile menu button */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 group"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6 transition-transform duration-300" />
          ) : (
            <FaBars className="w-6 h-6 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Premium Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-2xl border-t border-slate-700/50 shadow-2xl">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((link, i) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={i}
                  href={link.href}
                  className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/5 group ${
                    isActive ? "text-emerald-400" : "text-slate-300 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className={`transition-transform duration-300 ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`}>
                    {link.icon}
                  </div>
                  <span className="font-medium">{link.label}</span>
                  <div className={`ml-auto w-2 h-2 rounded-full bg-emerald-400 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}></div>
                </a>
              );
            })}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-slate-700/50">
              <a
                href="#contact"
                className="flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-medium shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <FaEnvelope className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}