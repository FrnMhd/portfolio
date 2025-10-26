"use client";
import { useEffect, useState } from "react";

export default function CursorTrail() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail particle
      setTrails(prev => [...prev, {
        x: e.clientX,
        y: e.clientY,
        id: Date.now() + Math.random()
      }].slice(-20));
    };

    const checkHover = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkHover);
    
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);
    };
  }, []);

  return (
    <>
      {/* Trail particles */}
      {trails.map((trail, i) => (
        <div
          key={trail.id}
          className="fixed pointer-events-none w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 z-50"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: (i / trails.length) * 0.5,
            transform: `scale(${(i / trails.length) * 0.8})`,
            transition: 'opacity 0.5s ease-out, transform 0.3s ease-out'
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: position.x,
          top: position.y,
          transition: 'transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`
        }}
      >
        <div className="relative">
          {/* Outer ring */}
          <div 
            className="absolute inset-0 w-10 h-10 rounded-full border-2 border-white/30 -translate-x-1/2 -translate-y-1/2"
            style={{
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              transform: `translate(-50%, -50%) scale(${isHovering ? 1.8 : 1})`,
              opacity: isHovering ? 0.8 : 0.4
            }}
          />
          
          {/* Middle glow */}
          <div 
            className="absolute w-6 h-6 rounded-full -translate-x-1/2 -translate-y-1/2 blur-md"
            style={{
              background: 'radial-gradient(circle, rgba(96, 165, 250, 0.6) 0%, rgba(147, 51, 234, 0.4) 50%, transparent 70%)',
              transition: 'all 0.2s ease-out'
            }}
          />
          
          {/* Inner dot */}
          <div 
            className="absolute w-2 h-2 rounded-full bg-white shadow-lg -translate-x-1/2 -translate-y-1/2"
            style={{
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(96, 165, 250, 0.5)',
              transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              transform: `translate(-50%, -50%) scale(${isHovering ? 0.5 : 1})`
            }}
          />
        </div>
      </div>

      <style jsx>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}