"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const officeImages = [
  {
    src: "/images/office/office2.jpeg",
    alt: "Quiet, light-filled Santa Monica therapy office with natural light, books, and armchair",
    caption: "Natural Light & Grounding Space",
    subtext: "A quiet, private setting designed to feel calm and grounding.",
  },
  {
    src: "/images/office/office1.jpeg",
    alt: "Sunlit Santa Monica therapy office with exposed brick and comfortable seating",
    caption: "Comfortable & Uncluttered Environment",
    subtext: "Clients often share that the space itself helps them feel more at ease.",
  },
];

const officeFeatures = [
  {
    icon: (
      <svg
        className="w-5 h-5 text-accent flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "123th Street 45 W, Santa Monica, CA 90401",
    subtitle: "Practice Location",
    detail: "In-person sessions at my Santa Monica office",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-accent flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "In-person therapy and secure California telehealth",
    subtitle: "Session Options",
    detail: "Telehealth for clients located in California",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-accent flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Quiet, private, and grounding",
    subtitle: "The Environment",
    detail: "Natural light and a comfortable, uncluttered space",
  },
];

/**
 * Custom Section: "Our Office: A Calm Therapy Space in Santa Monica"
 * Showcases Dr. Maya Reynolds' physical counseling space in Santa Monica.
 */
export default function OurOffice({ className = "" }) {
  return (
    <section
      id="office"
      aria-label="Our Office: A Calm Space for Healing"
      className={`relative w-full bg-secondary py-16 md:py-24 border-t border-line overflow-hidden ${className}`}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="max-w-[760px] mb-12 md:mb-16">
          <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-muted font-medium mb-3 block">
            The Santa Monica practice space
          </span>
          <h2 className="font-heading font-light text-[30px] sm:text-[38px] md:text-[46px] leading-[1.2] text-ink mb-5">
            Our Office: A Calm Therapy Space in{" "}
            <span
              style={{
                fontFamily: "var(--font-wedding-day), 'WeddingdayPersonal', cursive",
              }}
              className="font-normal text-accent inline-block ml-1 text-[1.25em] md:text-[1.38em] leading-none transform translate-y-[2px] md:translate-y-[4px]"
            >
              Santa Monica
            </span>
          </h2>
          <p className="font-body font-light text-[15px] sm:text-[16.5px] leading-[1.75] text-body/85">
            My Santa Monica office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
          </p>
        </div>

        {/* Authentic Office Photography Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16">
          {officeImages.map((img, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white border border-line overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300"
            >
              {/* Image Frame with Aspect Ratio & Sharp Edges */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-secondary">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center block group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="media-overlay" />
              </div>

              {/* Text Card Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <h3 className="font-heading font-normal text-[20px] sm:text-[23px] leading-[1.3] text-ink m-0 mb-2">
                    {img.caption}
                  </h3>
                  <p className="font-body font-light text-[14px] sm:text-[15px] leading-[1.7] text-body/80 m-0">
                    {img.subtext}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Details: Location, Telehealth, and Privacy */}
        <div className="bg-secondary border border-line p-8 sm:p-10 lg:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {officeFeatures.map((feat, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white border border-line rounded-none">
                    {feat.icon}
                  </div>
                  <div>
                    <span className="font-sans text-[10.5px] uppercase tracking-[0.14em] text-muted font-semibold block">
                      {feat.subtitle}
                    </span>
                  </div>
                </div>
                <h3 className="font-heading font-medium text-[17px] sm:text-[18px] text-ink mb-2 leading-snug">
                  {feat.title}
                </h3>
                <p className="font-body font-light text-[13.5px] sm:text-[14px] leading-[1.7] text-body/80">
                  {feat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 border-t border-line">
          <p className="font-body font-light text-[14px] text-muted max-w-[620px]">
            In-person therapy in Santa Monica and secure telehealth for clients located in California.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#booking"
              className="btn-sharp-filled"
            >
              Request an appointment
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
