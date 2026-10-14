"use client";

import React from "react";
import Image from "next/image";

/**
 * Section 7: Narrative Transition ("Honoring Where You've Been").
 * Visual storytelling linking therapeutic history to future growth.
 */
export default function Section7({ className = "" }) {
  return (
    <section
      id="honoring"
      aria-label="Honoring Where You Have Been"
      className={`relative w-full bg-white overflow-hidden min-h-[66vh] flex items-center ${className}`}
    >
      <div className="w-full py-[6.6vmax] md:py-[95.04px]">
        <div className="w-full">
          <div className="fluid-grid-sec7 w-full">

            {/* Left Family Media Asset */}
            <div className="sec7-media-block w-full h-full">
              <div className="relative w-full h-full min-h-0 overflow-hidden">
                <Image
                  src="/images/sections/honoring-family.webp"
                  alt="Family of four standing together on a beach facing the sunset"
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover object-center block"
                />
                <div className="media-overlay bg-[rgba(255,255,255,0.11)]" />
              </div>
            </div>

            {/* Right Headline Block */}
            <div className="sec7-headline-block">
              <div className="h-full flex flex-col justify-start md:justify-end">
                <h2 className="font-heading font-light text-[32px] sm:text-[40px] md:text-[47.8px] leading-[1.29] tracking-[-0.01em] text-brand-heading m-0">
                  Honoring where you’ve<br />
                  been{" "}
                  <span className="font-script text-[38px] sm:text-[48px] md:text-[54px] text-brand-teal font-normal italic inline-block leading-none mx-1 align-baseline">
                    &amp;
                  </span>{" "}
                  helping shape<br />
                  where you’re headed.
                </h2>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
