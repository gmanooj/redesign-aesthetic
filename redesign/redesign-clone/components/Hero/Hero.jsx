"use client";

import React from "react";
import Image from "next/image";
import UnderlineLink from "@/components/common/UnderlineLink";

export default function Hero({ className = "" }) {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className={`relative w-full bg-secondary pt-[85px] md:pt-[115.3px] overflow-hidden ${className}`}
    >
      <div className="w-full px-6 py-10 md:px-8 md:py-10 lg:px-0 lg:py-0">
        <div className="fluid-grid-hero w-full h-auto min-h-0 lg:min-h-[688px]">
          {/* Therapist portrait */}
          <div className="hero-media-left w-full h-full">
            <div className="hero-image-landing-1 relative w-full aspect-[4/5] mx-auto lg:max-w-none lg:aspect-auto lg:h-full min-h-0 overflow-hidden sharp-corners shadow-sm">
              <Image
                src="/images/profile/dr-maya-reynolds.png"
                alt="Dr. Maya Reynolds, licensed clinical psychologist in Santa Monica, CA"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover block"
                style={{ objectPosition: "center 20%" }}
                priority
              />
              <div className="media-overlay" />
            </div>
          </div>

          {/* Tagline / Subtitle */}
          <div className="hero-tagline-block">
            <p className="font-body text-[11px] tracking-[0.16em] uppercase text-muted mb-3 leading-relaxed mt-[2.5px]">
              <strong>
                <span className="inline-block">Licensed Clinical Psychologist • Santa Monica, CA • California Telehealth</span>
              </strong>
            </p>
          </div>

          {/* Primary Editorial Headline & Narrative */}
          <div className="hero-headline-block">
            <h1 className="font-heading font-normal md:font-light text-[32px] sm:text-[38px] md:text-[44px] lg:text-[59.9px] leading-[1.18] tracking-[-0.01em] text-ink mb-5">
              Anxiety, Trauma &amp; Burnout Therapy in{" "}
              <span
                style={{ fontFamily: "var(--font-wedding-day), 'WeddingdayPersonal', cursive" }}
                className="font-normal text-accent inline-block ml-2 text-[1.45em] md:text-[1.65em] leading-none transform translate-y-[4px] md:translate-y-[6px]"
              >
                Santa Monica, CA
              </span>
            </h1>
            <p className="font-body font-light text-[14px] sm:text-[16px] lg:text-[16.7px] leading-[1.7] text-body/85 mb-6">
              Evidence-based therapy for high-achieving adults who feel exhausted on the inside. Warm, collaborative care in Santa Monica and by secure telehealth across California, to help you finally exhale.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="hero-cta-block flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <UnderlineLink href="#approach" aria-label="Explore my approach to therapy in Santa Monica">
              Explore my approach
            </UnderlineLink>
          </div>

          {/* Office media asset */}
          <div className="hero-media-right hidden lg:block w-full h-full">
            <div className="hero-image-landing-2 relative w-full h-full min-h-0 overflow-hidden">
              <Image
                src="/images/office/office1.jpeg"
                alt="Quiet, light-filled Santa Monica therapy office with exposed brick wall"
                fill
                sizes="(max-width: 1024px) 50vw, 20vw"
                className="object-cover block"
                style={{ objectPosition: "50% 50%" }}
              />
              <div className="media-overlay" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
