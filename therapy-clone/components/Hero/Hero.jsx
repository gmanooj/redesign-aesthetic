"use client";

import React from "react";
import Image from "next/image";
import UnderlineLink from "@/components/common/UnderlineLink";

/**
 * Above-the-fold Hero section introducing the core brand promise,
 * featuring optimized prioritized imagery and fluid editorial grid.
 */
export default function Hero({ className = "" }) {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className={`relative w-full bg-brand-bg pt-[115.3px] overflow-hidden ${className}`}
    >
      <div className="w-full">
        <div className="fluid-grid-hero w-full min-h-[688px]">
          
          {/* Primary Left Media Asset */}
          <div className="hero-media-left w-full h-full">
            <div className="relative w-full h-full min-h-0 overflow-hidden">
              <Image
                src="/images/hero/hero-family-beach.webp"
                alt="Family embracing outdoors on a serene beach"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center block"
                priority
              />
              <div className="media-overlay bg-[rgba(227,217,202,0.07)]" />
            </div>
          </div>

          {/* Tagline / Subtitle */}
          <div className="hero-tagline-block">
            <p className="font-body text-[15px] font-normal leading-[1.8] tracking-[0.12em] uppercase text-brand-heading mt-[2.5px]">
              <strong>
                <span className="inline-block sm:whitespace-nowrap">ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY</span>
                <br />
                <span className="inline-block sm:whitespace-nowrap">PARK &amp; ACROSS CA</span>
              </strong>
            </p>
          </div>

          {/* Primary Editorial Headline & Narrative */}
          <div className="hero-headline-block">
            <h1 className="font-heading font-light text-[38px] md:text-[50px] lg:text-[59.9px] leading-[1.25] tracking-[-0.01em] text-brand-heading mb-[30px]">
              Rebuild your foundation<br />
              on solid ground and finally<br />
              begin to&nbsp;
              <span className="font-script font-normal text-[1em] text-brand-teal inline-block ml-2">
                thrive
              </span>
              .&nbsp;
            </h1>
            <p className="font-body font-light text-[16.7px] leading-[1.8] text-brand-heading">
              Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
            </p>
          </div>

          {/* Action Underline Link */}
          <div className="hero-cta-block flex items-start">
            <UnderlineLink href="/contact">
              Book an Appointment
            </UnderlineLink>
          </div>

          {/* Secondary Right Accent Media Asset */}
          <div className="hero-media-right w-full h-full">
            <div className="relative w-full h-full min-h-0 overflow-hidden">
              <Image
                src="/images/hero/hero-child-beach.webp"
                alt="Child playing gently on the beach"
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover block"
                style={{ objectPosition: "87.29% 56%" }}
                priority
              />
              <div className="media-overlay bg-[rgba(227,217,202,0.14)]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
