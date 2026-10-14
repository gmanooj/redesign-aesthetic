"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Shared gentle cubic ease-in-out curve and 3.5s duration:
 * Delivers a majestic, serene glide for both section autoscrolling and scroll-to-top.
 */
const SCROLL_DURATION = 3.5;
const smoothCubicEase = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/**
 * Global smooth scroll provider using Lenis.
 * Delivers continuous buttery inertia for manual user scrolling (wheel & touch),
 * and cinematic, easing-driven smooth auto-scrolling for all anchor links and scroll-to-top.
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Enforce manual scroll restoration so the browser never restores mid-page scroll on reload
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Always reset to top of the page on load / reload
    window.scrollTo(0, 0);

    // Strip any residual hash on reload so browser doesn't perform native anchor jump
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    // Initialize Lenis with smooth physics
    // Set respectReducedMotion: false so programmatic scroll animations are never forced to instant jumps
    const lenis = new Lenis({
      duration: 1.6, // Smooth glide duration for wheel scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Luxurious exponential decay for wheel inertia
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
      respectReducedMotion: false,
    });

    // Expose lenis instance globally
    window.__lenis = lenis;

    // Direct programmatic smooth scroll to top (matches arrow button physics)
    window.__scrollToTop = () => {
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = "";
      }
      lenis.start();
      lenis.scrollTo(0, {
        duration: SCROLL_DURATION,
        easing: smoothCubicEase,
        immediate: false,
        lock: true,
        force: true,
        onComplete: () => {
          if (window.location.hash) {
            window.history.replaceState(null, "", window.location.pathname);
          }
        },
      });
    };

    // Direct programmatic smooth scroll to section (exact same 3.5s duration and cubic easing)
    window.__scrollToSection = (targetId) => {
      if (!targetId) return;
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = "";
      }
      const targetElement =
        document.getElementById(targetId) ||
        document.querySelector(`[id="${targetId}"]`) ||
        document.querySelector(`#${targetId}`);

      if (!targetElement) return;
      lenis.start();

      lenis.scrollTo(targetElement, {
        offset: 0,
        duration: SCROLL_DURATION,
        easing: smoothCubicEase,
        immediate: false,
        lock: true,
        force: true,
        onComplete: () => {
          if (window.history && window.history.pushState) {
            window.history.pushState(null, "", `#${targetId}`);
          }
        },
      });
    };

    // RAF loop
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Reset scroll to 0 before the page unloads
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Global anchor link smooth scroll interceptor (handles #target and /#target)
    const handleAnchorClick = (e) => {
      // Don't intercept modifier clicks (new tab / window)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = e.target.closest("a");
      if (!anchor) return;

      const rawHref = anchor.getAttribute("href");
      if (!rawHref) return;

      const currentPath = window.location.pathname;
      const isHome = currentPath === "/" || currentPath === "";

      // 1. Logo / Home link click when already on homepage -> smooth glide to top
      if ((rawHref === "/" || rawHref === "#hero" || rawHref === "#top") && isHome) {
        e.preventDefault();
        if (document.body.style.overflow === "hidden") {
          document.body.style.overflow = "";
        }
        lenis.start();

        const currentScroll = lenis.scroll ?? window.scrollY ?? 0;
        if (currentScroll < 10) return; // Already at top

        lenis.scrollTo(0, {
          duration: SCROLL_DURATION,
          easing: smoothCubicEase,
          immediate: false,
          lock: true,
          force: true,
          onComplete: () => {
            if (window.location.hash) {
              window.history.replaceState(null, "", window.location.pathname);
            }
          },
        });
        return;
      }

      // 2. Target anchor identification (#section or /#section)
      let targetId = null;
      if (rawHref.startsWith("#") && rawHref.length > 1) {
        targetId = rawHref.slice(1);
      } else if (rawHref.startsWith("/#") && rawHref.length > 2 && isHome) {
        targetId = rawHref.slice(2);
      } else if (
        anchor.hash &&
        (anchor.pathname === currentPath || anchor.pathname === "" || (anchor.pathname === "/" && isHome))
      ) {
        targetId = anchor.hash.replace(/^#/, "");
      }

      if (targetId) {
        const targetElement =
          document.getElementById(targetId) ||
          document.querySelector(`[id="${targetId}"]`) ||
          document.querySelector(`#${targetId}`);

        if (targetElement) {
          e.preventDefault();

          if (document.body.style.overflow === "hidden") {
            document.body.style.overflow = "";
          }
          lenis.start();

          lenis.scrollTo(targetElement, {
            offset: 0, // Aligns clean top section boundary
            duration: SCROLL_DURATION,
            easing: smoothCubicEase,
            immediate: false,
            lock: true, // Prevents trackpad jitters or mouse wheel ticks from interrupting or stuttering the motion
            force: true,
            onComplete: () => {
              // Ensure history URL bar updates without triggering native browser jump
              if (window.history && window.history.pushState) {
                window.history.pushState(null, "", `#${targetId}`);
              }
            },
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      window.removeEventListener("beforeunload", handleBeforeUnload);
      lenis.destroy();
      delete window.__lenis;
      delete window.__scrollToTop;
      delete window.__scrollToSection;
    };
  }, []);

  return <>{children}</>;
}
