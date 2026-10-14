"use client";

import React from "react";
import Image from "next/image";
import ImageReveal from "@/components/common/ImageReveal";
import UnderlineLink from "@/components/common/UnderlineLink";

export default function Section3({ className = "" }) {
  return (
    <section
      id="who-we-help"
      aria-label="Who We Help"
      className={`relative w-full bg-white overflow-hidden ${className}`}
    >
      <div className="w-full px-6 py-10 md:px-8 md:py-10 lg:px-0 lg:py-[95.04px]">
        <div className="w-full">
          <div className="fluid-grid-sec3 w-full">
            
            {/* Section Header */}
            <div className="sec3-title-block">
              <div className="h-full flex flex-col justify-center">
                <h2 className="font-heading font-light text-[28px] sm:text-[38px] md:text-[42px] lg:text-[47.8px] leading-[1.29] tracking-[-0.01em] text-ink m-0 mb-6 md:mb-6 text-center sm:text-left">
                  Who I Help
                </h2>
              </div>
            </div>

            {/* Column 1: Image (Aspect 4/3) */}
            <div className="sec3-adults-media w-full h-full">
              <ImageReveal delay={0} className="relative w-full aspect-[4/3] md:aspect-[4/3] lg:aspect-auto lg:h-full min-h-0 overflow-hidden mb-3 md:mb-3">
                <Image
                  src="/images/sections/anxiety-overthinking.webp"
                  alt="Thoughtful person resting quietly in reflection"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover block"
                  style={{ objectPosition: "50% 30%" }}
                />
                <div className="media-overlay" />
              </ImageReveal>
            </div>

            {/* Column 1: Direct Content (No Card Container) */}
            <div className="sec3-adults-text w-full h-full mb-10 md:mb-0">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-[20px] md:text-[22px] lg:text-[27px] font-medium leading-[1.36] tracking-[-0.01em] text-ink mb-2.5">
                    Anxiety &amp; Panic Therapy
                  </h3>
                  <p className="font-body font-light text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16.7px] leading-[1.7] text-body/85 m-0 mb-4">
                    For constant worry, overthinking, and tension in the body. I use CBT and body-oriented tools to ease both the thoughts and the physical stress.
                  </p>
                </div>
                <div className="pt-2 md:pt-4 mt-auto">
                  <UnderlineLink
                    href="#specialties"
                    aria-label="Learn about anxiety and panic therapy in Santa Monica"
                    className="text-primary"
                  >
                    Learn about anxiety therapy
                  </UnderlineLink>
                </div>
              </div>
            </div>

            {/* Column 2: Image (Aspect 4/3) */}
            <div className="sec3-couples-media w-full h-full">
              <ImageReveal delay={120} className="relative w-full aspect-[4/3] md:aspect-[4/3] lg:aspect-auto lg:h-full min-h-0 overflow-hidden mb-3 md:mb-3">
                <Image
                  src="/images/sections/trauma-emdr-stabilization.webp"
                  alt="Person seated in a grounded, calm posture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover object-center block"
                />
                <div className="media-overlay" />
              </ImageReveal>
            </div>

            {/* Column 2: Direct Content (No Card Container) */}
            <div className="sec3-couples-text w-full h-full mb-10 md:mb-0">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-[20px] md:text-[22px] lg:text-[27px] font-medium leading-[1.36] tracking-[-0.01em] text-ink mb-2.5">
                    Trauma &amp; EMDR Therapy
                  </h3>
                  <p className="font-body font-light text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16.7px] leading-[1.7] text-body/85 m-0 mb-4">
                    For single-incident trauma and long-standing patterns from childhood, relationships, or chronic stress, paced carefully with safety and stabilization first.
                  </p>
                </div>
                <div className="pt-2 md:pt-4 mt-auto">
                  <UnderlineLink
                    href="#specialties"
                    aria-label="Explore EMDR and trauma therapy in Santa Monica"
                    className="text-primary"
                  >
                    Explore EMDR therapy
                  </UnderlineLink>
                </div>
              </div>
            </div>

            {/* Column 3: Image (Aspect 4/3) */}
            <div className="sec3-children-media w-full h-full">
              <ImageReveal delay={240} className="relative w-full aspect-[4/3] md:aspect-[4/3] lg:aspect-auto lg:h-full min-h-0 overflow-hidden mb-3 md:mb-3">
                <Image
                  src="/images/sections/burnout-sustainable-living.webp"
                  alt="Person taking a restful pause to decompress"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover object-center block"
                />
                <div className="media-overlay" />
              </ImageReveal>
            </div>

            {/* Column 3: Direct Content (No Card Container) */}
            <div className="sec3-children-text w-full h-full">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-[20px] md:text-[22px] lg:text-[27px] font-medium leading-[1.36] tracking-[-0.01em] text-ink mb-2.5">
                    Burnout &amp; Perfectionism Therapy
                  </h3>
                  <p className="font-body font-light text-[14px] sm:text-[15px] md:text-[16.7px] leading-[1.7] text-body/85 m-0 mb-4">
                    For entrepreneurs, creatives, and professionals who feel disconnected after years of pushing through stress.
                  </p>
                </div>
                <div className="pt-2 md:pt-4 mt-auto">
                  <UnderlineLink
                    href="#specialties"
                    aria-label="Learn about burnout and perfectionism therapy in Santa Monica"
                    className="text-primary"
                  >
                    Learn about burnout therapy
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
