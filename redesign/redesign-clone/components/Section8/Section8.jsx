"use client";

import React from "react";
import UnderlineLink from "@/components/common/UnderlineLink";

export default function Section8({ className = "" }) {
  return (
    <section
      id="specialties"
      aria-label="Clinical Modalities"
      className={`relative w-full bg-white overflow-hidden ${className}`}
    >
      <div className="w-full px-6 py-10 md:px-8 md:py-10 lg:px-0 lg:py-0">
        <div className="w-full">
          <div className="fluid-grid-sec8 w-full">

            {/* Left Title "My Therapy Methods Include…" */}
            <div className="sec8-title-block">
              <div className="h-full flex flex-col justify-start md:justify-center">
                <h2 className="font-heading font-light text-[30px] sm:text-[36px] md:text-[39.2px] leading-[1.32] tracking-[-0.01em] text-ink m-0">
                  My Therapy Methods Include…
                </h2>
              </div>
            </div>

            {/* Modality Item 1: Cognitive Behavioral Therapy (CBT) */}
            <div className="sec8-card-1 flex flex-col items-start py-4 md:py-2">
              <div>
                <h3 className="font-heading font-light text-[20px] sm:text-[22px] md:text-[25px] leading-[1.3] text-ink mb-[10px]">
                  Cognitive Behavioral Therapy (CBT)
                </h3>
                <p className="font-body font-light text-[14px] sm:text-[15px] md:text-[16px] leading-[1.75] text-ink m-0">
                  Practical tools to understand how your thoughts, emotions, and stress connect, and to ease worry and overthinking.
                </p>
              </div>
              <div className="mt-3 md:mt-4 pt-1">
                <UnderlineLink
                  href="#approach"
                  aria-label="Learn more about Cognitive Behavioral Therapy (CBT)"
                  className="text-primary text-[12.5px] sm:text-[13px] tracking-[0.1em] uppercase"
                >
                  Learn more
                </UnderlineLink>
              </div>
            </div>

            {/* Modality Item 2: Body-Oriented Techniques */}
            <div className="sec8-card-2 flex flex-col items-start py-4 md:py-2">
              <div>
                <h3 className="font-heading font-light text-[20px] sm:text-[22px] md:text-[25px] leading-[1.3] text-ink mb-[10px]">
                  Body-Oriented Techniques
                </h3>
                <p className="font-body font-light text-[14px] sm:text-[15px] md:text-[16px] leading-[1.75] text-ink m-0">
                  Ways to notice tension, understand the physical side of stress, and feel more regulated.
                </p>
              </div>
              <div className="mt-3 md:mt-4 pt-1">
                <UnderlineLink
                  href="#approach"
                  aria-label="Learn more about Body-Oriented Techniques"
                  className="text-primary text-[12.5px] sm:text-[13px] tracking-[0.1em] uppercase"
                >
                  Learn more
                </UnderlineLink>
              </div>
            </div>

            {/* Modality Item 3: EMDR Therapy */}
            <div className="sec8-card-3 flex flex-col items-start py-4 md:py-2">
              <div>
                <h3 className="font-heading font-light text-[20px] sm:text-[22px] md:text-[25px] leading-[1.3] text-ink mb-[10px]">
                  EMDR Therapy
                </h3>
                <p className="font-body font-light text-[14px] sm:text-[15px] md:text-[16px] leading-[1.75] text-ink m-0">
                  Trauma-focused work, paced carefully with safety and stabilization first.
                </p>
              </div>
              <div className="mt-3 md:mt-4 pt-1">
                <UnderlineLink
                  href="#approach"
                  aria-label="Learn more about EMDR Therapy"
                  className="text-primary text-[12.5px] sm:text-[13px] tracking-[0.1em] uppercase"
                >
                  Learn more
                </UnderlineLink>
              </div>
            </div>

            {/* Modality Item 4: Mindfulness-Based Practices */}
            <div className="sec8-card-4 flex flex-col items-start py-4 md:py-2">
              <div>
                <h3 className="font-heading font-light text-[20px] sm:text-[22px] md:text-[25px] leading-[1.3] text-ink mb-[10px]">
                  Mindfulness-Based Practices
                </h3>
                <p className="font-body font-light text-[14px] sm:text-[15px] md:text-[16px] leading-[1.75] text-ink m-0">
                  Tools to slow down, reconnect, and feel more grounded.
                </p>
              </div>
              <div className="mt-3 md:mt-4 pt-1">
                <UnderlineLink
                  href="#approach"
                  aria-label="Learn more about Mindfulness-Based Practices"
                  className="text-primary text-[12.5px] sm:text-[13px] tracking-[0.1em] uppercase"
                >
                  Learn more
                </UnderlineLink>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
