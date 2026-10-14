"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Section 6: Process & Philosophy ("How We Work").
 * Multi-column editorial layout detailing client-centered care.
 */
export default function Section6({ className = "" }) {
  return (
    <section
      id="how-we-work"
      aria-label="How We Work"
      className={`relative w-full bg-[#E3D9CA] overflow-hidden ${className}`}
    >
      <div className="w-full py-0">
        <div className="w-full">
          <div className="fluid-grid-sec6 w-full">

            {/* Eyebrow "HOW WE WORK" */}
            <div className="sec6-eyebrow-block">
              <div className="h-full flex flex-col justify-center md:justify-start">
                <p className="font-sans text-[12px] sm:text-[14px] font-normal tracking-[0.14em] uppercase text-brand-heading m-0">
                  HOW WE WORK
                </p>
              </div>
            </div>

            {/* Heading "We’re here to make a difference." */}
            <div className="sec6-headline-block">
              <div className="h-full flex flex-col justify-center">
                <h2 className="font-heading font-light text-[32px] sm:text-[40px] md:text-[47.8px] leading-[1.29] tracking-[-0.01em] text-brand-heading m-0">
                  We’re here to make a difference.
                </h2>
              </div>
            </div>

            {/* Media Asset (Mother and daughter dancing by the dunes) */}
            <div className="sec6-media-block w-full h-full">
              <div className="relative w-full h-full min-h-0 overflow-hidden">
                <Image
                  src="/images/sections/philosophy-dunes.webp"
                  alt="Mother and daughter dancing joyfully on the beach by the dunes at sunset"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover block"
                  style={{ objectPosition: "21.6% 45.6%" }}
                />
                <div className="media-overlay bg-[rgba(227,217,202,0.14)]" />
              </div>
            </div>

            {/* Left Narrative Column */}
            <div className="sec6-col1-text">
              <div className="h-full flex flex-col justify-start">
                <p className="font-sans text-[13px] sm:text-[14px] font-bold leading-[1.6] tracking-[0.08em] uppercase text-brand-heading mb-4">
                  The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.
                </p>
                <p className="font-body font-light text-[15px] sm:text-[16.7px] leading-[1.8] text-brand-heading m-0">
                  Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.
                </p>
              </div>
            </div>

            {/* Second Narrative Column */}
            <div className="sec6-col2-text">
              <div className="h-full flex flex-col justify-start">
                <p className="font-body font-light text-[15px] sm:text-[16.7px] leading-[1.8] text-brand-heading m-0">
                  Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.
                </p>
              </div>
            </div>

            {/* Underline CTA Link */}
            <div className="sec6-cta-block">
              <div className="h-full flex flex-col justify-center md:justify-start items-start">
                <Link
                  href="/therapists-newbury-park"
                  className="inline-block border-b border-brand-heading pb-[2px] font-sans text-[12px] sm:text-[13px] tracking-[0.14em] font-normal uppercase text-brand-heading hover:opacity-70 transition-opacity duration-200"
                >
                  Learn more about us
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
