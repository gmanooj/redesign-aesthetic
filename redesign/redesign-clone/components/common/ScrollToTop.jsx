"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Permanent floating "Scroll to Top" button.
 * Uses high-performance IntersectionObserver on the Hero section to toggle visibility.
 * Smoothly scrolls back to the top of the homepage using Lenis with guaranteed non-immediate physics.
 */
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      const onScroll = () => setIsVisible(window.scrollY > 400);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    // High performance: IntersectionObserver runs off main thread without layout reflows
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When hero is visible, hide button; when scrolled past hero, show button
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-60px 0px 0px 0px",
      }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "";
    }

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    if (window.__lenis) {
      window.__lenis.scrollTo(0, {
        duration: 3.5, // 3.5s slow, serene glide back to top
        easing: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2), // Gentle cubic ease-in-out
        immediate: false,
        lock: true,
        force: true,
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      title="Back to top"
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-surface/95 hover:bg-primary text-ink hover:text-white border border-line hover:border-primary shadow-[0_4px_16px_rgba(43,45,47,0.1)] hover:shadow-[0_8px_25px_rgba(168,100,75,0.35)] backdrop-blur-md cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <ArrowUp
        className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-y-0.5"
        strokeWidth={2}
      />
      <span className="sr-only">Scroll to top</span>
    </button>
  );
}
