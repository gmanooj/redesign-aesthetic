"use client";

import React from "react";
import UnderlineLink from "@/components/common/UnderlineLink";

const specialtiesColumn1 = [
  "Constant Worry & Overthinking",
  "Anxiety & Panic",
  "Body Tension & Physical Stress",
  "Difficulty Sleeping",
  "Single-Incident Trauma",
  "Complex & Long-Standing Trauma",
];

const specialtiesColumn2 = [
  "EMDR Trauma Therapy",
  "Professional Burnout",
  "Perfectionism",
  "High Internal Pressure",
  "Stress Regulation & Stabilization",
  "Mindfulness-Based Practices",
];

export default function Section5({ className = "" }) {
  return (
    <section
      id="expertise"
      aria-label="Areas of Expertise"
      className={`relative w-full bg-secondary overflow-hidden ${className}`}
    >
      <div className="w-full relative z-10 px-6 py-12 md:px-8 md:py-12 lg:px-0 lg:py-[calc(80vmax/10)]">
        <div className="w-full">
          <div className="fluid-grid-sec5 w-full">
            <div className="sec5-title-block">
              <div className="h-full flex flex-col justify-start">
                <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-muted font-medium mb-3 block">
                  Supporting adults in Santa Monica &amp; across California
                </span>
                <h2 className="font-heading font-light text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.28] tracking-[-0.01em] text-ink m-0">
                  Therapy Specialties Rooted in Evidence &amp;{" "}
                  <span
                    style={{ fontFamily: "var(--font-wedding-day), 'WeddingdayPersonal', cursive" }}
                    className="font-normal text-accent inline-block ml-1 text-[1.25em] sm:text-[1.38em] leading-none transform translate-y-[2px] sm:translate-y-[4px]"
                  >
                    Warmth
                  </span>
                </h2>
              </div>
            </div>

            {/* Specialties 2-Column Balanced Grid */}
            <div className="sec5-content-block w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-y-3 lg:gap-x-12 w-full">
                
                {/* Column 1 */}
                <div className="flex flex-col w-full">
                  {specialtiesColumn1.map((item, idx) => (
                    <div
                      key={idx}
                      className="py-3.5 md:py-[18px] border-b border-line flex items-center min-h-[46px] md:min-h-[58px]"
                    >
                      <UnderlineLink
                        href="#specialties"
                        className="font-sans text-[12px] sm:text-[13.5px] md:text-[14.5px] leading-[1.4] font-normal tracking-[0.14em] text-ink uppercase transition-colors duration-200 hover:text-accent block w-full"
                      >
                        {item}
                      </UnderlineLink>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col w-full">
                  {specialtiesColumn2.map((item, idx) => (
                    <div
                      key={idx}
                      className="py-3.5 md:py-[18px] border-b border-line flex items-center min-h-[46px] md:min-h-[58px]"
                    >
                      <UnderlineLink
                        href="#specialties"
                        className="font-sans text-[12px] sm:text-[13.5px] md:text-[14.5px] leading-[1.4] font-normal tracking-[0.14em] text-ink uppercase transition-colors duration-200 hover:text-accent block w-full"
                      >
                        {item}
                      </UnderlineLink>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
