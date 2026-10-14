"use client";

import React from "react";
import Image from "next/image";
import ImageReveal from "@/components/common/ImageReveal";
import UnderlineLink from "@/components/common/UnderlineLink";

export default function Section7({ className = "" }) {
  return (
    <section
      id="about"
      aria-label="About Dr. Maya Reynolds"
      className={`relative w-full bg-secondary overflow-hidden min-h-0 lg:min-h-[66vh] flex items-center ${className}`}
    >
      <div className="w-full px-6 py-10 md:px-8 md:py-10 lg:px-0 lg:py-[95.04px]">
        <div className="w-full">
          <div className="fluid-grid-sec7 w-full">

            {/* Left Media Asset (Aspect 4/3 on mobile) */}
            <div className="sec7-media-block w-full h-full">
              <ImageReveal className="relative w-full aspect-[4/3] md:aspect-[4/3] lg:aspect-auto lg:h-full min-h-0 overflow-hidden mb-6 md:mb-0">
                <Image
                  src="/images/sections/maya-coastal-grounding.jpg"
                  alt="Woman standing on a coastal path overlooking the ocean"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center block"
                />
                <div className="media-overlay" />
              </ImageReveal>
            </div>

            {/* Right Content Block */}
            <div className="sec7-headline-block">
              <div className="h-full flex flex-col justify-center">
                <p className="font-sans text-[12px] sm:text-[13px] font-medium tracking-[0.14em] uppercase text-muted mb-3">
                  About Dr. Maya Reynolds
                </p>
                <h2 className="font-heading font-light text-[28px] sm:text-[36px] md:text-[42px] leading-[1.25] tracking-[-0.01em] text-ink mb-4">
                  Meet Dr.{" "}
                  <span
                    style={{
                      fontFamily: "var(--font-wedding-day), 'WeddingdayPersonal', cursive",
                    }}
                    className="font-normal text-accent inline-block text-[1.25em] md:text-[1.35em] leading-none transform translate-y-[2px] md:translate-y-[4px]"
                  >
                    Maya Reynolds
                  </span>
                  , Psychologist in Santa Monica
                </h2>
                <p className="font-body font-light text-[14px] sm:text-[15.5px] leading-[1.75] text-body mb-4">
                  I&apos;m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
                </p>
                <p className="font-body font-light text-[14px] sm:text-[15.5px] leading-[1.75] text-body mb-6">
                  I take a warm, collaborative, and grounded approach. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I believe therapy works best when clients feel respected, understood, and actively involved in the process—helping you develop insight, resilience, and a stronger relationship with yourself over time.
                </p>
                <div>
                  <UnderlineLink
                    href="#approach"
                    aria-label="Explore my approach to therapy and personal growth"
                    className="text-primary"
                  >
                    Explore my approach
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
