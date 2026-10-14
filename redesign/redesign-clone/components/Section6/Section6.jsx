"use client";

import React from "react";
import Image from "next/image";
import ImageReveal from "@/components/common/ImageReveal";
import UnderlineLink from "@/components/common/UnderlineLink";

export default function Section6({ className = "" }) {
  return (
    <section
      id="approach"
      aria-label="Clinical Methodology"
      className={`relative w-full bg-white overflow-hidden ${className}`}
    >
      <div className="w-full px-6 py-10 md:px-8 md:py-10 lg:px-0 lg:py-0">
        <div className="w-full">
          <div className="fluid-grid-sec6 w-full">

            {/* Eyebrow "My approach to therapy" */}
            <div className="sec6-eyebrow-block">
              <div className="h-full flex flex-col justify-center md:justify-start">
                <p className="font-sans text-[11px] sm:text-[14px] font-normal tracking-[0.14em] uppercase text-ink m-0 mb-2">
                  My approach to therapy
                </p>
              </div>
            </div>

            {/* Heading */}
            <div className="sec6-headline-block">
              <div className="h-full flex flex-col justify-center">
                <h2 className="font-heading font-light text-[24px] sm:text-[34px] md:text-[40px] lg:text-[47.8px] leading-[1.25] tracking-[-0.01em] text-ink m-0 mb-4">
                  Structured enough to feel supportive. Deep enough to create lasting change.
                </h2>
              </div>
            </div>

            {/* Media Asset (Supportive Therapy Armchair & Sanctuary Detail - Aspect 4/3) */}
            <div className="sec6-media-block w-full h-full">
              <ImageReveal className="relative w-full aspect-[4/3] md:aspect-[4/3] lg:aspect-auto lg:h-full min-h-0 overflow-hidden my-6 md:my-0">
                <Image
                  src="/images/sections/therapeutic-sanctuary-armchair.jpg"
                  alt="Comfortable armchair and potted houseplant with natural light"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover block"
                  style={{ objectPosition: "center 50%" }}
                />
                <div className="media-overlay" />
              </ImageReveal>
            </div>

            {/* Left Narrative Column */}
            <div className="sec6-col1-text">
              <div className="h-full flex flex-col justify-start">
                <p className="font-body font-light text-[14px] sm:text-[16.7px] leading-[1.7] text-ink m-0 mb-3 md:mb-0">
                  I combine evidence-based methods (CBT, EMDR, and mindfulness-based practices) with body-oriented techniques, so we look at both your thought patterns and the physical signals your body uses to alert you to stress.
                </p>
              </div>
            </div>

            {/* Second Narrative Column */}
            <div className="sec6-col2-text">
              <div className="h-full flex flex-col justify-start">
                <p className="font-body font-light text-[14px] sm:text-[16.7px] leading-[1.7] text-ink m-0 mb-6 md:mb-0">
                  I pace sessions carefully, with an emphasis on safety and stabilization, so you feel more regulated and grounded in daily life, not just during sessions.
                </p>
              </div>
            </div>

            {/* Underline CTA Link */}
            <div className="sec6-cta-block">
              <div className="h-full flex flex-col justify-center md:justify-start items-start">
                <UnderlineLink
                  href="#about"
                  aria-label="Learn more about Dr. Maya Reynolds and her clinical approach"
                  className="text-primary"
                >
                  Learn more about Dr. Reynolds
                </UnderlineLink>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
