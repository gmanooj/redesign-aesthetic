"use client";

import React from "react";
import Link from "next/link";

const clinicalFocus = [
  { name: "Anxiety & Panic", href: "/specialties/anxiety-panic" },
  { name: "Trauma & PTSD (EMDR)", href: "/specialties/trauma-emdr" },
  { name: "Executive Burnout", href: "/specialties/burnout-perfectionism" },
  { name: "Somatic Regulation", href: "/specialties/somatic-regulation" },
  { name: "Cognitive Behavioral Therapy (CBT)", href: "/methods/cbt" },
  { name: "Mindfulness Practices", href: "/methods/mindfulness" },
];

/**
 * Site Footer containing contact information, practice locations,
 * clinical focus, office hours, and legal disclaimers.
 */
export default function Footer({ className = "" }) {
  return (
    <footer id="footer" aria-label="Site Footer" className={`w-full bg-ink ${className}`}>
      {/* Main Footer Section - Deep Charcoal with clean light typography */}
      <section className="relative w-full bg-ink overflow-hidden">
        <div className="w-full px-6 py-10 md:px-8 md:py-10 lg:px-0 lg:py-[calc(45vmax/10)]">
          <div className="w-full">
            <div className="fluid-grid-footer w-full">
              
              {/* Brand Practice Name */}
              <div className="footer-logo-block w-full h-full">
                <div className="h-full flex flex-col justify-start items-start text-left">
                  <Link href="/" className="block w-full max-w-[372px]" aria-label="Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist">
                    <span className="font-heading text-[18px] sm:text-[21px] font-normal tracking-[0.06em] uppercase text-white block">
                      DR. MAYA REYNOLDS, PSYD
                    </span>
                    <span className="font-sans text-[11px] sm:text-[12px] tracking-[0.16em] uppercase text-line font-medium block mt-1">
                      Licensed Clinical Psychologist • Santa Monica, CA
                    </span>
                  </Link>
                </div>
              </div>

              {/* Tagline / Office Availability & Disclaimer */}
              <div className="footer-tagline-block">
                <div className="h-full flex flex-col justify-start">
                  <p className="font-body font-light text-[15px] sm:text-[16.7px] leading-[1.8] text-white/85 m-0 max-w-[425px]">
                    In-person therapy in Santa Monica and secure telehealth for clients in California.
                  </p>
                  <p className="font-sans text-[12px] sm:text-[13px] leading-[1.6] text-white/60 font-normal m-0 mt-3 max-w-[425px]">
                    Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in California.
                  </p>
                </div>
              </div>

              {/* Navigation Column */}
              <div className="footer-nav-block">
                <div className="h-full flex flex-col justify-start">
                  <p className="font-sans text-[13px] sm:text-[14px] font-medium tracking-[0.14em] uppercase text-white mb-[12px]">
                    NAVIGATE
                  </p>
                  <ul className="list-none p-0 m-0 space-y-1">
                    <li>
                      <Link href="/#about" className="font-body font-light text-[14.5px] leading-[1.75] text-white/80 hover:text-primary transition-colors duration-200 block">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/#specialties" className="font-body font-light text-[14.5px] leading-[1.75] text-white/80 hover:text-primary transition-colors duration-200 block">
                        Specialties
                      </Link>
                    </li>
                    <li>
                      <Link href="/#approach" className="font-body font-light text-[14.5px] leading-[1.75] text-white/80 hover:text-primary transition-colors duration-200 block">
                        Approach
                      </Link>
                    </li>
                    <li>
                      <Link href="/#office" className="font-body font-light text-[14.5px] leading-[1.75] text-white/80 hover:text-primary transition-colors duration-200 block">
                        Office
                      </Link>
                    </li>
                    <li>
                      <Link href="/#booking" className="font-body font-light text-[14.5px] leading-[1.75] text-white/80 hover:text-primary transition-colors duration-200 block">
                        Schedule a Consultation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Information Column */}
              <div className="footer-contact-block">
                <div className="h-full flex flex-col justify-start">
                  <p className="font-sans text-[13px] sm:text-[14px] font-medium tracking-[0.14em] uppercase text-white mb-[12px]">
                    CONTACT &amp; LOCATION
                  </p>
                  <div className="font-body font-light text-[14.5px] leading-[1.75] text-white/80 mb-[10px]">
                    <p className="m-0 font-medium text-white">Santa Monica Practice</p>
                    <p className="m-0">123th Street 45 W</p>
                    <p className="m-0">Santa Monica, CA 90401</p>
                    <Link
                      href="/#booking"
                      className="text-white/80 hover:text-primary transition-colors duration-200 block mt-2"
                    >
                      Inquiries via consultation booking form
                    </Link>
                  </div>
                </div>
              </div>

              {/* Hours Column */}
              <div className="footer-hours-block">
                <div className="h-full flex flex-col justify-start">
                  <p className="font-sans text-[13px] sm:text-[14px] font-medium tracking-[0.14em] uppercase text-white mb-[12px]">
                    HOURS
                  </p>
                  <div className="font-body font-light text-[14.5px] leading-[1.75] text-white/80">
                    <p className="m-0">
                      In-person in Santa Monica &bull; Secure telehealth across California
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Sub-footer Legal Bar - Grounding Terracotta Token */}
      <section className="relative w-full bg-primary overflow-hidden">
        <div className="w-full px-6 py-4 md:px-0 md:py-[calc(5vmax/10)]">
          <div className="w-full">
            <div className="fluid-grid-subfooter w-full">
              <div className="subfooter-content-block w-full">
                <div className="h-full flex flex-col justify-center items-start">
                  <div className="text-left">
                    <p className="font-body font-light text-[14px] sm:text-[15.1px] leading-[1.8] tracking-wide text-white m-0 py-2 sm:py-1">
                      <Link href="/terms" className="text-white hover:underline underline-offset-4 transition-all">
                        Terms
                      </Link>
                      <span className="text-white/80 mx-2">|</span>
                      <Link href="/privacy-policy" className="text-white hover:underline underline-offset-4 transition-all">
                        Privacy Policy
                      </Link>
                      <span className="text-white/80 mx-2">|</span>
                      <Link href="/disclaimer" className="text-white hover:underline underline-offset-4 transition-all">
                        Disclaimer
                      </Link>
                      <span className="text-white/80 mx-2">|</span>
                      <span>&copy; 2026 Dr. Maya Reynolds, PsyD</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
