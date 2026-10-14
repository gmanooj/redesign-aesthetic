"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import NavDropdown from "./NavDropdown";
import MobileDrawer from "./MobileDrawer";

const specialtiesLinks = [
  { name: "Anxiety & Panic", href: "/#specialties" },
  { name: "Trauma & EMDR", href: "/#specialties" },
  { name: "Burnout & Perfectionism", href: "/#specialties" },
];

/**
 * Site Navigation Header with desktop dropdowns and responsive mobile drawer.
 */
export default function Header({ className = "" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFolder, setActiveFolder] = useState(null);
  const menuButtonRef = useRef(null);

  const toggleMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      setActiveFolder(null);
    } else {
      setMobileMenuOpen(true);
    }
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveFolder(null);
  };

  const handleNavClick = (sectionId) => (e) => {
    e.preventDefault();
    closeMenu();
    if (typeof window !== "undefined") {
      if (window.__scrollToSection) {
        window.__scrollToSection(sectionId);
      } else if (window.__lenis) {
        const el = document.getElementById(sectionId);
        if (el) {
          window.__lenis.scrollTo(el, {
            offset: 0,
            duration: 5.0,
            easing: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
            immediate: false,
            lock: true,
            force: true,
          });
        }
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    closeMenu();
    if (typeof window !== "undefined") {
      if (window.__scrollToTop) {
        window.__scrollToTop();
      } else if (window.__lenis) {
        window.__lenis.scrollTo(0, {
          duration: 3.5,
          easing: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
          immediate: false,
          lock: true,
          force: true,
        });
      }
    }
  };

  return (
    <>
      <header
        className={`${
          mobileMenuOpen ? "fixed z-[60] shadow-xs" : "absolute z-40"
        } top-0 left-0 right-0 w-full max-w-full box-border bg-secondary pointer-events-auto transition-colors duration-700 ${className}`}
      >
        {/* Navigation Bar Container */}
        <div className="w-full max-w-full box-border px-[6vw] py-[6vw] md:px-[5vw] md:py-[1.4vw] flex items-center justify-between">
          
          {/* Brand Logo / Text */}
          <div className="flex-1 min-w-0 leading-none mr-2 sm:mr-4">
            <Link
              href="/"
              scroll={false}
              onClick={handleLogoClick}
              className="inline-block leading-tight group max-w-full"
              aria-label="Dr. Maya Reynolds, PsyD"
            >
              <span className="font-heading text-[17px] sm:text-[21px] md:text-[22px] tracking-[0.05em] sm:tracking-[0.06em] text-ink font-normal uppercase block">
                DR. MAYA REYNOLDS, PSYD
              </span>
              <span className="font-sans text-[10px] md:text-[10.5px] tracking-[0.06em] sm:tracking-[0.14em] md:tracking-[0.2em] text-muted uppercase font-medium block mt-[3px] whitespace-normal leading-tight">
                LICENSED CLINICAL PSYCHOLOGIST • SANTA MONICA, CA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center text-right font-[family-name:var(--font-body)]">
              <div>
                <Link
                  href="/#about"
                  scroll={false}
                  onClick={handleNavClick("about")}
                  className="text-[12.5px] lg:text-[13.3px] uppercase tracking-[0.1em] leading-[1.8em] text-ink font-normal hover:opacity-75 transition-opacity whitespace-nowrap"
                >
                  About
                </Link>
              </div>

              <NavDropdown title="Specialties" links={specialtiesLinks} id="specialties-dropdown" />

              <div className="ml-[1.5vw] lg:ml-[2.5vw]">
                <Link
                  href="/#approach"
                  scroll={false}
                  onClick={handleNavClick("approach")}
                  className="text-[12.5px] lg:text-[13.3px] uppercase tracking-[0.1em] leading-[1.8em] text-ink font-normal hover:opacity-75 transition-opacity whitespace-nowrap"
                >
                  Approach
                </Link>
              </div>

              <div className="ml-[1.5vw] lg:ml-[2.5vw]">
                <Link
                  href="/#office"
                  scroll={false}
                  onClick={handleNavClick("office")}
                  className="text-[12.5px] lg:text-[13.3px] uppercase tracking-[0.1em] leading-[1.8em] text-ink font-normal hover:opacity-75 transition-opacity whitespace-nowrap"
                >
                  Office
                </Link>
              </div>
            </nav>

            {/* Desktop Action CTA */}
            <div className="ml-[1.5vw] lg:ml-[2.5vw]">
              <Link
                href="/#booking"
                scroll={false}
                onClick={handleNavClick("booking")}
                className="btn-sharp-filled inline-block text-[12.5px] lg:text-[13px] font-semibold tracking-[0.14em] text-on-primary uppercase bg-primary border-2 border-primary rounded-none px-8 py-3.5 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-primary-hover hover:border-primary-hover hover:-translate-y-[2px] hover:shadow-[0_8px_15px_rgba(168,100,75,0.35)] active:translate-y-0 active:shadow-none cursor-pointer"
              >
                BOOK NOW
              </Link>
            </div>
          </div>

          {/* Mobile & Tablet Hamburger / X Toggle Button with smooth animation */}
          <div className="lg:hidden flex-shrink-0 flex items-center z-50 ml-1">
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              className="min-w-[44px] min-h-[44px] p-2 text-ink focus:outline-none flex flex-col justify-center items-center cursor-pointer relative"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-[32px] h-[20px] relative flex flex-col justify-between items-center py-[1px]">
                {/* 1st Line (Top) - Rotates 45deg down to form \ slowly over 400ms */}
                <span
                  style={{
                    transitionProperty: "transform",
                    transitionDuration: "400ms",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  className={`w-[32px] h-[1.5px] bg-ink block origin-center ${
                    mobileMenuOpen
                      ? "translate-y-[8.5px] rotate-45"
                      : "translate-y-0 rotate-0"
                  }`}
                />
                
                {/* 2nd Line (Middle) - Slowly fades out over 400ms */}
                <span
                  style={{
                    transitionProperty: "opacity, transform",
                    transitionDuration: "400ms",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  className={`w-[32px] h-[1.5px] bg-ink block origin-center ${
                    mobileMenuOpen
                      ? "opacity-0 scale-x-0"
                      : "opacity-100 scale-x-100"
                  }`}
                />
                
                {/* 3rd Line (Bottom) - Rotates -45deg up to form / slowly over 400ms */}
                <span
                  style={{
                    transitionProperty: "transform",
                    transitionDuration: "400ms",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  className={`w-[32px] h-[1.5px] bg-ink block origin-center ${
                    mobileMenuOpen
                      ? "-translate-y-[8.5px] -rotate-45"
                      : "translate-y-0 rotate-0"
                  }`}
                />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={closeMenu}
        activeFolder={activeFolder}
        setActiveFolder={setActiveFolder}
        specialtiesLinks={specialtiesLinks}
        menuButtonRef={menuButtonRef}
      />
    </>
  );
}
