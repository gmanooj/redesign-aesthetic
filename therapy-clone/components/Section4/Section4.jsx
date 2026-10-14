"use client";

import React from "react";
import Image from "next/image";

/**
 * Section 4: Full-bleed Atmospheric Quote Banner.
 * Emphasizes validation and psychological safety with responsive typography.
 */
export default function Section4({ className = "" }) {
  return (
    <section
      id="quote"
      aria-label="Quote Banner"
      className={`relative w-full overflow-hidden min-h-[66vh] flex items-center bg-[#2B2B2B] ${className}`}
    >
      {/* Background Image Container with gentle atmospheric film overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/images/sections/quote-banner-bg.png"
          alt="Two children running happily along the sandy beach by the ocean shore"
          fill
          sizes="100vw"
          className="object-cover object-center block opacity-50"
        />
        <div className="absolute inset-0 bg-[#2B2B2B]/54" />
      </div>

      <div className="relative z-10 w-full py-[6.6vmax] md:py-[95px]">
        <div className="w-full">
          <div className="fluid-grid-sec4 w-full">
            
            {/* Centered Quotation Text */}
            <div className="sec4-quote-block">
              <div className="h-full flex flex-col justify-end">
                <h2 className="font-heading font-light text-[34.2px] md:text-[47.8px] leading-[1.29] tracking-[-0.01em] text-white m-0">
                  You deserve a place where your story is<br className="hidden sm:inline" /> heard, valued, and understood.{" "}
                  <em className="italic">
                    Nothing will be<br className="hidden sm:inline" /> too heavy for us to carry together.
                  </em>
                </h2>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
