"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * SEO-Friendly Editorial Image Reveal Component
 * Animates images into view with opposite motion physics when configured:
 * - direction="up" (default): reveals smoothly from bottom to top
 * - direction="down": reveals smoothly from top to bottom
 * Ensures zero layout shift (CLS = 0) and graceful degradation.
 */
export default function ImageReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    const currentEl = ref.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
      observer.disconnect();
    };
  }, []);

  const dirClass = direction === "down" ? "reveal-down" : "reveal-up";

  return (
    <div
      ref={ref}
      style={{
        animationDelay: delay ? `${delay}ms` : undefined,
      }}
      className={`image-landing-reveal ${dirClass} ${isVisible ? "is-revealed" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
