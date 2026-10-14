"use client";

import React from "react";
import Image from "next/image";

export default function Section4({ className = "" }) {
  return (
    <section
      id="quote"
      aria-label="Quote Banner"
      className={`relative w-full overflow-hidden min-h-[66vh] flex items-center bg-ink ${className}`}
    >
      {/* Background quote banner image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/images/sections/quote-pacific-shoreline.jpg"
          alt="Misty coastal hills and gentle tide along the shoreline"
          fill
          sizes="100vw"
          className="object-cover object-center block"
          style={{ objectPosition: "50% 50%" }}
        />
        <div className="media-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-scrim/45 via-scrim/40 to-scrim/55" />
      </div>

      <div className="relative z-10 w-full px-6 py-12 md:px-0 md:py-[95px]">
        <div className="w-full">
          <div className="fluid-grid-sec4 w-full">
            
            {/* Centered Quotation Text */}
            <div className="sec4-quote-block">
              <div className="h-full flex flex-col justify-end">
                <blockquote className="font-heading font-light text-[30px] sm:text-[38px] md:text-[44px] leading-[1.35] tracking-[-0.01em] text-white m-0 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
                  &ldquo;Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.&rdquo;
                </blockquote>
                <p className="font-sans text-[12px] sm:text-[13px] tracking-[0.16em] uppercase text-white/90 font-normal mt-6 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
                  — Dr. Maya Reynolds, PsyD • Santa Monica, California
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
