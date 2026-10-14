"use client";

import React from "react";
import Image from "next/image";
import ImageReveal from "@/components/common/ImageReveal";
import UnderlineLink from "@/components/common/UnderlineLink";

export default function Section2({ className = "" }) {
  return (
    <section
      id="intro"
      aria-label="Philosophy & Approach"
      className={`relative w-full bg-secondary overflow-hidden ${className}`}
    >
      <div className="w-full px-6 py-10 md:px-8 md:py-10 lg:px-0 lg:py-[calc(70vmax/10)]">
        <div className="w-full">
          <div className="fluid-grid-sec2 w-full">
            <div className="sec2-headline-block">
              <div className="h-full flex flex-col justify-start md:justify-center">
                <p className="font-body text-[11px] sm:text-[14px] font-semibold leading-[1.8] tracking-[0.14em] uppercase text-accent mb-3">
                  A grounded, collaborative approach
                </p>
                <h2 className="font-heading font-light text-[26px] sm:text-[34px] md:text-[40px] lg:text-[47.8px] leading-[1.25] tracking-[-0.01em] text-ink m-0 mb-5">
                  Anxiety &amp; Burnout Therapy for Adults Who Look{" "}
                  <span
                    style={{ fontFamily: "var(--font-wedding-day), 'WeddingdayPersonal', cursive" }}
                    className="font-normal text-accent inline-block ml-1.5 text-[1.25em] md:text-[1.38em] leading-none transform translate-y-[2px] md:translate-y-[4px]"
                  >
                    Functional on the Outside
                  </span>
                </h2>
              </div>
            </div>

            {/* Left Narrative Column */}
            <div className="sec2-text-left-block">
              <div className="h-full flex flex-col justify-start">
                <p className="font-body font-light text-[14px] sm:text-[16px] lg:text-[16.7px] leading-[1.7] text-ink m-0 mb-6">
                  Many of the people I work with are high-achieving, thoughtful, and self-aware, yet feel exhausted, stuck in overthinking, or emotionally on edge. Inside, there may be constant worry, tension in your body, difficulty sleeping, and the sense that you&apos;re always bracing for something to go wrong.
                </p>
              </div>
            </div>

            {/* Grounding Coastal Pause Image (Aspect 4/3 mobile, Aspect 16/9 tablet) + UnderlineLink */}
            <div className="sec2-media-block w-full h-full">
              <ImageReveal className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-full min-h-0 overflow-hidden mb-4 md:mb-4 lg:mb-0">
                <Image
                  src="/images/sections/sec2-grounding-relief.jpg"
                  alt="Woman pausing in quiet reflection on a coastal bluff in morning light"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center block"
                />
                <div className="media-overlay" />
              </ImageReveal>
              <div className="lg:hidden mt-2">
                <UnderlineLink
                  href="#about"
                  aria-label="Read about Dr. Reynolds and practice background"
                  className="text-primary"
                >
                  Read about Dr. Reynolds
                </UnderlineLink>
              </div>
            </div>

            {/* Right Narrative Column */}
            <div className="sec2-text-right-block">
              <div className="flex flex-col justify-start">
                <p className="font-body font-light text-[14px] sm:text-[16.7px] leading-[1.7] text-ink mb-6">
                  I integrate CBT, EMDR, mindfulness-based practices, and body-oriented techniques to help you understand both the emotional and physical sides of what you&apos;re experiencing. I offer in-person therapy in Santa Monica and secure telehealth for clients located in California.
                </p>
                <div className="hidden lg:block mt-1 md:mt-2">
                  <UnderlineLink
                    href="#about"
                    aria-label="Read about Dr. Reynolds and practice background"
                    className="text-primary"
                  >
                    Read about Dr. Reynolds
                  </UnderlineLink>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
