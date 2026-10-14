"use client";

import React from "react";
import Image from "next/image";
import PillButton from "@/components/common/PillButton";

/**
 * Section 9: Appointment Booking & Consultation CTA.
 * Encouraging visitors to connect with the right therapist for their needs.
 */
export default function Section9({ className = "" }) {
  return (
    <section
      id="booking"
      aria-label="Schedule an Appointment"
      className={`relative w-full bg-brand-bg overflow-hidden min-h-[66vh] flex items-center ${className}`}
    >
      <div className="w-full py-[6.6vmax] md:py-[95.04px]">
        <div className="w-full">
          <div className="fluid-grid-sec9 w-full">

            {/* Left Media Asset */}
            <div className="sec9-media-left w-full h-full">
              <div className="relative w-full h-full min-h-0 overflow-hidden">
                <Image
                  src="/images/sections/booking-sand-shells.webp"
                  alt="Hands reaching into sand with seashells on the shoreline"
                  fill
                  sizes="(max-width: 768px) 70vw, 20vw"
                  className="object-cover object-center block"
                />
                <div className="media-overlay bg-[rgba(246,244,238,0.33)]" />
              </div>
            </div>

            {/* Eyebrow */}
            <div className="sec9-eyebrow-block">
              <div className="h-full flex flex-col justify-start md:justify-center">
                <p className="font-sans text-[12px] sm:text-[14px] font-normal tracking-[0.14em] uppercase text-brand-heading m-0">
                  SCHEDULE AN APPOINTMENT
                </p>
              </div>
            </div>

            {/* Heading */}
            <div className="sec9-headline-block">
              <div className="h-full flex flex-col justify-start">
                <h2 className="font-heading font-light text-[32px] sm:text-[40px] md:text-[47.8px] leading-[1.29] tracking-[-0.01em] text-brand-heading m-0">
                  Find a therapist who is the right fit for{" "}
                  <span className="font-script text-[42px] sm:text-[52px] md:text-[58px] text-brand-teal font-normal italic inline-block leading-none mx-1 align-baseline">
                    you
                  </span>
                  .
                </h2>
              </div>
            </div>

            {/* Body Copy */}
            <div className="sec9-text-block">
              <div className="h-full flex flex-col justify-start">
                <p className="font-body font-light text-[15px] sm:text-[16.7px] leading-[1.8] text-brand-heading mb-4">
                  Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we&apos;re here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
                </p>
                <p className="font-body font-light text-[15px] sm:text-[16.7px] leading-[1.8] text-brand-heading m-0">
                  Click the button below to schedule an appointment.
                </p>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="sec9-btn-block">
              <div className="h-full flex flex-col justify-center md:justify-start items-start">
                <PillButton href="/contact" className="px-[19.5px] py-[15px]">
                  BOOK NOW
                </PillButton>
              </div>
            </div>

            {/* Right Media Feature */}
            <div className="sec9-media-right w-full h-full">
              <div className="relative w-full h-full min-h-0 overflow-hidden">
                <Image
                  src="/images/sections/booking-beach-shore.webp"
                  alt="Adult and child looking at seashells on the beach"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover block"
                  style={{ objectPosition: "62.86% 52.80%" }}
                />
                <div className="media-overlay bg-[rgba(246,244,238,0.06)]" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
