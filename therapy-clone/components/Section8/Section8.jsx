"use client";

import React from "react";
import Link from "next/link";

/**
 * Section 8: Specialties Grid.
 * Multi-column feature cards presenting specialized therapy modalities.
 */
export default function Section8({ className = "" }) {
  return (
    <section
      id="specialties"
      aria-label="Our Specialties"
      className={`relative w-full bg-white overflow-hidden ${className}`}
    >
      <div className="w-full py-0">
        <div className="w-full">
          <div className="fluid-grid-sec8 w-full">

            {/* Left Title "Our specialties include…" */}
            <div className="sec8-title-block">
              <div className="h-full flex flex-col justify-start md:justify-center">
                <h3 className="font-heading font-light text-[30px] sm:text-[36px] md:text-[39.2px] leading-[1.32] tracking-[-0.01em] text-brand-heading m-0">
                  Our{" "}
                  <span className="font-script text-[28px] sm:text-[34px] md:text-[38px] text-brand-teal font-normal italic inline-block leading-none mx-1 align-baseline">
                    specialties
                  </span>{" "}
                  include…
                </h3>
              </div>
            </div>

            {/* Specialty 1: Trauma */}
            <div className="sec8-specialty1-text">
              <div className="h-full flex flex-col justify-start">
                <h4 className="font-heading font-light text-[24px] sm:text-[27px] leading-[1.3] text-brand-heading mb-[28px] md:mb-[30px]">
                  Trauma
                </h4>
                <p className="font-body font-light text-[15px] sm:text-[16.7px] leading-[1.8] text-brand-heading m-0">
                  We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.
                </p>
              </div>
            </div>

            <div className="sec8-specialty1-btn">
              <div className="h-full flex flex-col justify-center md:justify-start items-start">
                <Link
                  href="/trauma-counseling-newbury-park"
                  className="inline-block border-b border-brand-heading pb-[2px] font-sans text-[12px] sm:text-[12.4px] tracking-[0.12em] font-normal uppercase text-brand-heading hover:opacity-70 transition-opacity duration-200"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* Specialty 2: Dissociation */}
            <div className="sec8-specialty2-text">
              <div className="h-full flex flex-col justify-start">
                <h4 className="font-heading font-light text-[24px] sm:text-[27px] leading-[1.3] text-brand-heading mb-[28px] md:mb-[30px]">
                  Dissociation
                </h4>
                <p className="font-body font-light text-[15px] sm:text-[16.7px] leading-[1.8] text-brand-heading m-0">
                  The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.
                </p>
              </div>
            </div>

            <div className="sec8-specialty2-btn">
              <div className="h-full flex flex-col justify-center md:justify-start items-start">
                <Link
                  href="/dissociative-identity-disorder-therapist-newbury-park"
                  className="inline-block border-b border-brand-heading pb-[2px] font-sans text-[12px] sm:text-[12.4px] tracking-[0.12em] font-normal uppercase text-brand-heading hover:opacity-70 transition-opacity duration-200"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* Specialty 3: EMDR */}
            <div className="sec8-specialty3-text">
              <div className="h-full flex flex-col justify-start">
                <h4 className="font-heading font-light text-[24px] sm:text-[27px] leading-[1.3] text-brand-heading mb-[28px] md:mb-[30px]">
                  EMDR
                </h4>
                <p className="font-body font-light text-[15px] sm:text-[16.7px] leading-[1.8] text-brand-heading m-0">
                  Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.
                </p>
              </div>
            </div>

            <div className="sec8-specialty3-btn">
              <div className="h-full flex flex-col justify-center md:justify-start items-start">
                <Link
                  href="/emdr-therapy-newbury-park"
                  className="inline-block border-b border-brand-heading pb-[2px] font-sans text-[12px] sm:text-[12.4px] tracking-[0.12em] font-normal uppercase text-brand-heading hover:opacity-70 transition-opacity duration-200"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* Specialty 4: Special Needs Parenting */}
            <div className="sec8-specialty4-text">
              <div className="h-full flex flex-col justify-start">
                <h4 className="font-heading font-light text-[24px] sm:text-[27px] leading-[1.3] text-brand-heading mb-[28px] md:mb-[30px]">
                  Special Needs Parenting
                </h4>
                <p className="font-body font-light text-[15px] sm:text-[16.7px] leading-[1.8] text-brand-heading m-0">
                  Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.
                </p>
              </div>
            </div>

            <div className="sec8-specialty4-btn">
              <div className="h-full flex flex-col justify-center md:justify-start items-start">
                <Link
                  href="/counseling-special-needs-parents-newbury-park"
                  className="inline-block border-b border-brand-heading pb-[2px] font-sans text-[12px] sm:text-[12.4px] tracking-[0.12em] font-normal uppercase text-brand-heading hover:opacity-70 transition-opacity duration-200"
                >
                  Learn more
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
