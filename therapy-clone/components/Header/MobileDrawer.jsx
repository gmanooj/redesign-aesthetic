"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Fullscreen mobile drawer with animated multi-level folder transitions.
 */
export default function MobileDrawer({
  isOpen,
  onClose,
  activeFolder,
  setActiveFolder,
  ourTeamLinks,
  specialtiesLinks,
  methodsLinks,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-brand-bg flex flex-col justify-between overflow-y-auto font-[family-name:var(--font-body)]">
      {/* Top Bar with Logo & Close 'X' */}
      <div className="w-full px-[6vw] py-[6vw] flex items-center justify-between flex-shrink-0">
        <Link href="/" onClick={onClose} className="inline-block leading-none" aria-label="Conejo Valley Family Counseling">
          <Image
            src="/images/icons/brand-logo.png"
            alt="Conejo Valley Family Counseling"
            width={1500}
            height={438}
            className="h-[48px] w-auto object-contain block"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        <button
          onClick={onClose}
          className="p-1 text-brand-heading focus:outline-none cursor-pointer"
          aria-label="Close Menu"
        >
          <div className="w-[35px] h-[35px] relative flex items-center justify-center">
            <span className="absolute w-[28px] h-[1px] bg-brand-heading rotate-45" />
            <span className="absolute w-[28px] h-[1px] bg-brand-heading -rotate-45" />
          </div>
        </button>
      </div>

      {/* Navigation Body */}
      <div className="px-[8vw] py-6 flex-1 flex flex-col justify-center">
        {activeFolder === null ? (
          /* Main Menu */
          <div className="flex flex-col space-y-6 text-left">
            <div>
              <Link
                href="/therapists-newbury-park"
                onClick={onClose}
                className="font-heading text-[26px] sm:text-[30px] uppercase tracking-[0.06em] text-brand-heading font-light hover:text-brand-teal transition-colors"
              >
                About
              </Link>
            </div>

            <div>
              <button
                onClick={() => setActiveFolder("team")}
                className="font-heading text-[26px] sm:text-[30px] uppercase tracking-[0.06em] text-brand-heading font-light hover:text-brand-teal transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Our Team</span>
                <span className="text-[20px] font-light text-brand-heading/60 font-sans">&gt;</span>
              </button>
            </div>

            <div>
              <button
                onClick={() => setActiveFolder("specialties")}
                className="font-heading text-[26px] sm:text-[30px] uppercase tracking-[0.06em] text-brand-heading font-light hover:text-brand-teal transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Specialties</span>
                <span className="text-[20px] font-light text-brand-heading/60 font-sans">&gt;</span>
              </button>
            </div>

            <div>
              <button
                onClick={() => setActiveFolder("methods")}
                className="font-heading text-[26px] sm:text-[30px] uppercase tracking-[0.06em] text-brand-heading font-light hover:text-brand-teal transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Methods</span>
                <span className="text-[20px] font-light text-brand-heading/60 font-sans">&gt;</span>
              </button>
            </div>

            <div>
              <Link
                href="/faqs"
                onClick={onClose}
                className="font-heading text-[26px] sm:text-[30px] uppercase tracking-[0.06em] text-brand-heading font-light hover:text-brand-teal transition-colors"
              >
                FAQs
              </Link>
            </div>
          </div>
        ) : (
          /* Subfolder View */
          <div className="flex flex-col text-left">
            <button
              onClick={() => setActiveFolder(null)}
              className="border border-brand-heading px-4 py-1.5 text-[14px] uppercase tracking-[0.1em] text-brand-heading inline-flex items-center gap-2 mb-8 self-start cursor-pointer hover:bg-brand-heading hover:text-white transition-colors"
            >
              <span className="text-[12px]">&lt;</span>
              <span>Back</span>
            </button>

            <div className="flex flex-col space-y-4">
              {activeFolder === "team" &&
                ourTeamLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="font-heading text-[20px] sm:text-[24px] uppercase tracking-[0.06em] text-brand-heading font-light hover:text-brand-teal transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}

              {activeFolder === "specialties" &&
                specialtiesLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="font-heading text-[20px] sm:text-[24px] uppercase tracking-[0.06em] text-brand-heading font-light hover:text-brand-teal transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}

              {activeFolder === "methods" &&
                methodsLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="font-heading text-[20px] sm:text-[24px] uppercase tracking-[0.06em] text-brand-heading font-light hover:text-brand-teal transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action CTA */}
      <div className="px-[8vw] pb-10 flex-shrink-0 text-center">
        <Link
          href="/contact"
          onClick={onClose}
          className="inline-block border border-brand-heading rounded-[100%] px-12 py-3.5 text-[12.4px] uppercase tracking-[0.14em] text-brand-heading hover:bg-brand-heading hover:text-white transition-colors duration-200"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
