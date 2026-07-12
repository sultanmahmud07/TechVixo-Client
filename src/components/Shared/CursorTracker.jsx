"use client";

import { useEffect, useState } from "react";

const CursorTracker = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Smooth trail calculation (lerp effect)
  useEffect(() => {
    let animationFrameId;

    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        const speed = 0.15; // Speed factor for lagging trail latency
        return {
          x: prev.x + dx * speed,
          y: prev.y + dy * speed,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };

    animationFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  // Track hover states on links, buttons, and clickable items
  useEffect(() => {
    const addHoverEvents = () => {
      const clickables = document.querySelectorAll(
        'a, button, input[type="submit"], [role="button"], select, textarea, .cursor-pointer'
      );

      clickables.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    addHoverEvents();

    // Re-bind when Next.js dynamically updates DOM page components
    const observer = new MutationObserver(addHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Outer trailing circle */}
      <div
        className={`fixed top-0 left-0 rounded-full border-2 border-primary pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] transition-transform duration-150 ease-out hidden md:block ${
          isHovered ? "w-12 h-12 bg-primary/10 border-green-400 scale-110" : "w-8 h-8 scale-100"
        }`}
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
        }}
      />
      {/* Inner precise dot */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] transition-transform duration-100 hidden md:block ${
          isHovered ? "scale-50 opacity-50" : "scale-100"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CursorTracker;
