"use client";

import React from "react";
import Image from "next/image";

/**
 * Section 2: Narrative Philosophy & Hope.
 * Side-by-side editorial layout presenting the practice's empathetic philosophy.
 */
export default function Section2({ className = "" }) {
  return (
    <section
      id="philosophy"
      aria-label="Philosophy & Hope"
      className={`relative w-full bg-brand-bg overflow-hidden ${className}`}
    >
      <div
        className="w-full"
        style={{
          paddingTop: "calc(70vmax / 10)",
          paddingBottom: "calc(70vmax / 10)",
        }}
      >
        <div className="w-full">
          <div className="fluid-grid-sec2 w-full">
            
            {/* Headline */}
            <div className="sec2-headline-block">
              <div className="h-full flex flex-col justify-start md:justify-center">
                <h2 className="font-heading font-light text-[32px] sm:text-[40px] md:text-[47.8px] leading-[1.29] tracking-[-0.01em] text-brand-heading m-0">
                  You’re holding onto hope that life<br className="hidden md:inline" /> can be better than it is right now.
                </h2>
              </div>
            </div>

            {/* Left Narrative Column */}
            <div className="sec2-text-left-block">
              <div className="h-full flex flex-col justify-start">
                <p className="font-body text-[15px] font-normal leading-[1.8] tracking-[0.12em] uppercase text-brand-heading mb-[15px]">
                  <strong>At Conejo Valley Family Counseling we want to make that hope a reality.</strong>
                </p>
                <p className="font-body font-light text-[16.7px] leading-[1.8] text-brand-heading m-0">
                  Whether you&apos;re an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life&apos;s ups and downs.
                </p>
              </div>
            </div>

            {/* Right Narrative Column */}
            <div className="sec2-text-right-block">
              <div className="h-full flex flex-col justify-start">
                <p className="font-body font-light text-[16.7px] leading-[1.8] text-brand-heading m-0">
                  First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
                </p>
              </div>
            </div>

            {/* Right Media Feature */}
            <div className="sec2-media-block w-full h-full">
              <div className="relative w-full h-full min-h-0 overflow-hidden">
                <Image
                  src="/images/sections/hope-beach-landscape.webp"
                  alt="Sandy beach with gentle ocean waves under an open sky"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center block"
                />
                <div className="media-overlay bg-[rgba(227,217,202,0.18)]" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
