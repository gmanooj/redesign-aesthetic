"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Section 3: Demographic Specializations ("Who We Help").
 * Presents specialized focal areas across adults, couples, and children/teens.
 */
export default function Section3({ className = "" }) {
  return (
    <section
      id="who-we-help"
      aria-label="Who We Help"
      className={`relative w-full bg-white overflow-hidden ${className}`}
    >
      <div className="w-full py-[6.6vmax] md:py-[95.04px]">
        <div className="w-full">
          <div className="fluid-grid-sec3 w-full">
            
            {/* Section Header */}
            <div className="sec3-title-block">
              <div className="h-full flex flex-col justify-center">
                <h2 className="font-heading font-light text-[38px] md:text-[47.8px] leading-[1.29] tracking-[-0.01em] text-brand-heading m-0">
                  Who we{" "}
                  <span className="font-script font-normal text-[1.05em] text-brand-teal inline-block ml-1">
                    help
                  </span>
                </h2>
              </div>
            </div>

            {/* Column 1: Adults Media */}
            <div className="sec3-adults-media w-full h-full">
              <div className="relative w-full h-full min-h-0 overflow-hidden">
                <Image
                  src="/images/sections/adults-therapy.webp"
                  alt="Two individuals resting calmly outdoors near a scenic mountain lake"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover block"
                  style={{ objectPosition: "51.19% 64.8%" }}
                />
                <div className="media-overlay bg-[rgba(255,255,255,0.11)]" />
              </div>
            </div>

            {/* Column 1: Adults Text */}
            <div className="sec3-adults-text">
              <div className="h-full flex flex-col justify-start">
                <h4 className="font-heading font-light text-[22px] md:text-[27px] leading-[1.36] tracking-[-0.01em] text-brand-heading mb-[10px]">
                  Adults
                </h4>
                <p className="font-body font-light text-[16.7px] leading-[1.8] text-brand-heading m-0">
                  Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.
                </p>
              </div>
            </div>

            {/* Column 2: Couples Media */}
            <div className="sec3-couples-media w-full h-full">
              <div className="relative w-full h-full min-h-0 overflow-hidden">
                <Image
                  src="/images/sections/couples-therapy.webp"
                  alt="Couple embracing happily together on the coast"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover object-center block"
                />
                <div className="media-overlay bg-[rgba(255,255,255,0.09)]" />
              </div>
            </div>

            {/* Column 2: Couples Text */}
            <div className="sec3-couples-text">
              <div className="h-full flex flex-col justify-start">
                <h4 className="font-heading font-light text-[22px] md:text-[27px] leading-[1.36] tracking-[-0.01em] text-brand-heading mb-[10px]">
                  <Link
                    href="/couples-therapy"
                    className="text-brand-heading hover:opacity-75 transition-opacity"
                  >
                    Couples
                  </Link>
                </h4>
                <p className="font-body font-light text-[16.7px] leading-[1.8] text-brand-heading m-0">
                  Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.
                </p>
              </div>
            </div>

            {/* Column 3: Children & Teens Media */}
            <div className="sec3-children-media w-full h-full">
              <div className="relative w-full h-full min-h-0 overflow-hidden">
                <Image
                  src="/images/sections/children-therapy.webp"
                  alt="Brother carrying his younger sister happily near the beach"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover object-center block"
                />
                <div className="media-overlay bg-[rgba(255,255,255,0.10)]" />
              </div>
            </div>

            {/* Column 3: Children & Teens Text */}
            <div className="sec3-children-text">
              <div className="h-full flex flex-col justify-start">
                <h4 className="font-heading font-light text-[22px] md:text-[27px] leading-[1.36] tracking-[-0.01em] text-brand-heading mb-[10px]">
                  <Link
                    href="/children-and-teens"
                    className="text-brand-heading hover:opacity-75 transition-opacity"
                  >
                    Children
                  </Link>{" "}
                  &amp; Teens
                </h4>
                <p className="font-body font-light text-[16.7px] leading-[1.8] text-brand-heading m-0">
                  Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
