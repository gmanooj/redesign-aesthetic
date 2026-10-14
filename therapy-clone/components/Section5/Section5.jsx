"use client";

import React from "react";
import Link from "next/link";

/**
 * Section 5: Areas of Expertise.
 * Multi-column divider grid listing specialized treatment domains.
 */
export default function Section5({ className = "" }) {
  return (
    <section
      id="expertise"
      aria-label="Areas of Expertise"
      className={`relative w-full bg-white overflow-hidden ${className}`}
    >
      <div
        className="w-full relative z-10"
        style={{
          paddingTop: "calc(80vmax / 10)",
          paddingBottom: "calc(80vmax / 10)",
        }}
      >
        <div className="w-full">
          <div className="fluid-grid-sec5 w-full">
            
            {/* Title: Our areas of expertise */}
            <div className="sec5-title-block">
              <div className="h-full flex flex-col justify-start">
                <h3 className="font-heading font-light text-[32px] sm:text-[39.2px] leading-[1.32] tracking-[-0.01em] text-brand-heading m-0">
                  Our areas of{" "}
                  <span className="font-script text-[36px] sm:text-[45px] text-brand-teal font-normal italic inline-block leading-none ml-1 sm:ml-0 md:block md:mt-1">
                    expertise
                  </span>
                </h3>
              </div>
            </div>

            {/* Column 1: Items & Dividers */}

            {/* 1. Dissociation */}
            <div className="sec5-item-1">
              <div className="h-full flex flex-col justify-center">
                <p className="font-sans text-[15px] leading-[27px] font-normal tracking-[0.12em] text-brand-heading uppercase m-0">
                  <Link
                    href="/dissociative-identity-disorder-therapist-newbury-park"
                    className="hover:text-brand-teal transition-colors duration-200"
                  >
                    Dissociation
                  </Link>
                </p>
              </div>
            </div>

            {/* Divider 1 */}
            <div className="sec5-divider-1 flex items-center">
              <div className="w-full h-[1px] bg-[#E3D9CA]/50" />
            </div>

            {/* 2. Trauma */}
            <div className="sec5-item-2">
              <div className="h-full flex flex-col justify-center">
                <p className="font-sans text-[15px] leading-[27px] font-normal tracking-[0.12em] text-brand-heading uppercase m-0">
                  <Link
                    href="/trauma-counseling-newbury-park"
                    className="hover:text-brand-teal transition-colors duration-200"
                  >
                    Trauma
                  </Link>
                </p>
              </div>
            </div>

            {/* Divider 2 */}
            <div className="sec5-divider-2 flex items-center">
              <div className="w-full h-[1px] bg-[#E3D9CA]/50" />
            </div>

            {/* 3. Family Conflict */}
            <div className="sec5-item-3">
              <div className="h-full flex flex-col justify-center">
                <p className="font-sans text-[15px] leading-[27px] font-normal tracking-[0.12em] text-brand-heading uppercase m-0">
                  Family conflict
                </p>
              </div>
            </div>

            {/* Divider 3 */}
            <div className="sec5-divider-3 flex items-center">
              <div className="w-full h-[1px] bg-[#E3D9CA]/50" />
            </div>

            {/* 4. Special Needs Parenting */}
            <div className="sec5-item-4">
              <div className="h-full flex flex-col justify-center">
                <p className="font-sans text-[15px] leading-[27px] font-normal tracking-[0.12em] text-brand-heading uppercase m-0">
                  <Link
                    href="/counseling-special-needs-parents-newbury-park"
                    className="hover:text-brand-teal transition-colors duration-200"
                  >
                    Special needs parenting
                  </Link>
                </p>
              </div>
            </div>

            {/* Divider 4 */}
            <div className="sec5-divider-4 flex items-center">
              <div className="w-full h-[1px] bg-[#E3D9CA]/50" />
            </div>

            {/* 5. Depression */}
            <div className="sec5-item-5">
              <div className="h-full flex flex-col justify-center">
                <p className="font-sans text-[15px] leading-[27px] font-normal tracking-[0.12em] text-brand-heading uppercase m-0">
                  <Link
                    href="/anxiety-depression"
                    className="hover:text-brand-teal transition-colors duration-200"
                  >
                    Depression
                  </Link>
                </p>
              </div>
            </div>

            {/* Divider 5 */}
            <div className="sec5-divider-5 flex items-center">
              <div className="w-full h-[1px] bg-[#E3D9CA]/50" />
            </div>

            {/* 6. Marriage */}
            <div className="sec5-item-6">
              <div className="h-full flex flex-col justify-center">
                <p className="font-sans text-[15px] leading-[27px] font-normal tracking-[0.12em] text-brand-heading uppercase m-0">
                  <Link
                    href="/couples-therapy"
                    className="hover:text-brand-teal transition-colors duration-200"
                  >
                    Marriage
                  </Link>
                </p>
              </div>
            </div>

            {/* Column 2: Items & Dividers */}

            {/* 7. Anxiety */}
            <div className="sec5-item-7">
              <div className="h-full flex flex-col justify-center">
                <p className="font-sans text-[15px] leading-[27px] font-normal tracking-[0.12em] text-brand-heading uppercase m-0">
                  <Link
                    href="/anxiety-depression"
                    className="hover:text-brand-teal transition-colors duration-200"
                  >
                    Anxiety
                  </Link>
                </p>
              </div>
            </div>

            {/* Divider 6 */}
            <div className="sec5-divider-6 flex items-center">
              <div className="w-full h-[1px] bg-[#E3D9CA]/50" />
            </div>

            {/* 8. Relationships */}
            <div className="sec5-item-8">
              <div className="h-full flex flex-col justify-center">
                <p className="font-sans text-[15px] leading-[27px] font-normal tracking-[0.12em] text-brand-heading uppercase m-0">
                  Relationships
                </p>
              </div>
            </div>

            {/* Divider 7 */}
            <div className="sec5-divider-7 flex items-center">
              <div className="w-full h-[1px] bg-[#E3D9CA]/50" />
            </div>

            {/* 9. Children */}
            <div className="sec5-item-9">
              <div className="h-full flex flex-col justify-center">
                <p className="font-sans text-[15px] leading-[27px] font-normal tracking-[0.12em] text-brand-heading uppercase m-0">
                  <Link
                    href="/children-and-teens"
                    className="hover:text-brand-teal transition-colors duration-200"
                  >
                    Children
                  </Link>
                </p>
              </div>
            </div>

            {/* Divider 8 */}
            <div className="sec5-divider-8 flex items-center">
              <div className="w-full h-[1px] bg-[#E3D9CA]/50" />
            </div>

            {/* 10. Teens */}
            <div className="sec5-item-10">
              <div className="h-full flex flex-col justify-center">
                <p className="font-sans text-[15px] leading-[27px] font-normal tracking-[0.12em] text-brand-heading uppercase m-0">
                  <Link
                    href="/children-and-teens"
                    className="hover:text-brand-teal transition-colors duration-200"
                  >
                    Teens
                  </Link>
                </p>
              </div>
            </div>

            {/* Divider 9 */}
            <div className="sec5-divider-9 flex items-center">
              <div className="w-full h-[1px] bg-[#E3D9CA]/50" />
            </div>

            {/* 11. Intimacy & Connection */}
            <div className="sec5-item-11">
              <div className="h-full flex flex-col justify-center">
                <p className="font-sans text-[15px] leading-[27px] font-normal tracking-[0.12em] text-brand-heading uppercase m-0">
                  <Link
                    href="/couples-therapy"
                    className="hover:text-brand-teal transition-colors duration-200"
                  >
                    Intimacy &amp; connection
                  </Link>
                </p>
              </div>
            </div>

            {/* Divider 10 */}
            <div className="sec5-divider-10 flex items-center">
              <div className="w-full h-[1px] bg-[#E3D9CA]/50" />
            </div>

            {/* 12. …and more. */}
            <div className="sec5-item-12">
              <div className="h-full flex flex-col justify-center">
                <p className="font-sans text-[15px] leading-[27px] font-normal tracking-[0.12em] text-brand-heading uppercase m-0">
                  …and more.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
