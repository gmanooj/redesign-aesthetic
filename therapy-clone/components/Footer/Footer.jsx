"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  { name: "Jennifer Anderson", href: "/jennifer-anderson" },
  { name: "Heather Williams-Baumgart", href: "/heather-williams-baumgart" },
  { name: "Autumn Bodily", href: "/autumn-bodily" },
  { name: "Candace Bletscher", href: "/candace-bletscher" },
  { name: "Samantha Johnson", href: "/samantha-johnson" },
  { name: "Rosa Gomez", href: "/rosa-gomez" },
  { name: "Chad Flores", href: "/chad-flores" },
  { name: "Simran Sidhu", href: "/simran-sidhu" },
  { name: "Jessica Jauregui", href: "/jessica-jauregui" },
];

/**
 * Site Footer containing contact information, practice locations,
 * clinician directory, office hours, and legal disclaimers.
 */
export default function Footer({ className = "" }) {
  return (
    <footer id="footer" aria-label="Site Footer" className={`w-full bg-white ${className}`}>
      {/* Main Footer Section */}
      <section className="relative w-full bg-white overflow-hidden">
        <div
          className="w-full"
          style={{
            paddingTop: "calc(45vmax / 10)",
            paddingBottom: "calc(45vmax / 10)",
          }}
        >
          <div className="w-full">
            <div className="fluid-grid-footer w-full">
              
              {/* Brand Logo */}
              <div className="footer-logo-block w-full h-full">
                <div className="h-full flex flex-col justify-center md:justify-start items-center md:items-start">
                  <Link href="/" className="block w-full max-w-[372px]" aria-label="Conejo Valley Family Counseling">
                    <Image
                      src="/images/icons/brand-logo.png"
                      alt="Conejo Valley Family Counseling"
                      width={1500}
                      height={438}
                      className="w-full h-auto object-contain block"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </Link>
                </div>
              </div>

              {/* Tagline / Office Availability */}
              <div className="footer-tagline-block">
                <div className="h-full flex flex-col justify-start">
                  <p className="font-body font-light text-[16.7px] leading-[1.8] text-brand-heading m-0 max-w-[425px]">
                    We want to make getting started simple. You&apos;re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.
                  </p>
                </div>
              </div>

              {/* Navigation Column */}
              <div className="footer-nav-block">
                <div className="h-full flex flex-col justify-start">
                  <p className="font-sans text-[15px] font-light tracking-[0.14em] uppercase text-brand-heading mb-[15px]">
                    NAVIGATE
                  </p>
                  <ul className="list-none p-0 m-0">
                    <li>
                      <Link href="/" className="font-body font-light text-[15.1px] leading-[1.8] text-brand-heading hover:text-brand-teal transition-colors duration-200 block">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/therapists-newbury-park" className="font-body font-light text-[15.1px] leading-[1.8] text-brand-heading hover:text-brand-teal transition-colors duration-200 block">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/faqs" className="font-body font-light text-[15.1px] leading-[1.8] text-brand-heading hover:text-brand-teal transition-colors duration-200 block">
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="font-body font-light text-[15.1px] leading-[1.8] text-brand-heading hover:text-brand-teal transition-colors duration-200 block">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Information Column */}
              <div className="footer-contact-block">
                <div className="h-full flex flex-col justify-start">
                  <p className="font-sans text-[15px] font-light tracking-[0.14em] uppercase text-brand-heading mb-[15px]">
                    CONTACT
                  </p>
                  <div className="font-body font-light text-[15.1px] leading-[1.8] text-brand-heading mb-[15px]">
                    <p className="m-0">925 Broadbeck Dr</p>
                    <p className="m-0">Suites 200 and 225</p>
                    <p className="m-0">Newbury Park, CA 91320</p>
                    <a href="mailto:info@conejovalleycounseling.com" className="text-brand-heading hover:text-brand-teal transition-colors duration-200 block">
                      info@conejovalleycounseling.com
                    </a>
                    <a href="tel:8052423120" className="text-brand-heading hover:text-brand-teal transition-colors duration-200 block">
                      805.242.3120
                    </a>
                  </div>
                  <p className="font-body text-[15.1px] leading-[1.8] text-brand-heading font-light max-w-[265px] m-0">
                    <em>Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp; Simi Valley</em>
                  </p>
                </div>
              </div>

              {/* Team Members Column */}
              <div className="footer-hours-block">
                <div className="h-full flex flex-col justify-start">
                  <p className="font-sans text-[15px] font-light tracking-[0.14em] uppercase text-brand-heading mb-[15px]">
                    OUR TEAM
                  </p>
                  <ul className="list-none p-0 m-0">
                    {teamMembers.map((member) => (
                      <li key={member.name}>
                        <Link href={member.href} className="font-body font-light text-[15.1px] leading-[1.8] text-brand-heading hover:text-brand-teal transition-colors duration-200 block">
                          {member.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Sub-footer Legal Bar */}
      <section className="relative w-full bg-[#86b3b3] overflow-hidden">
        <div
          className="w-full"
          style={{
            paddingTop: "calc(5vmax / 10)",
            paddingBottom: "calc(5vmax / 10)",
          }}
        >
          <div className="w-full">
            <div className="fluid-grid-subfooter w-full">
              <div className="subfooter-content-block w-full">
                <div className="h-full flex flex-col justify-center items-start">
                  <div className="text-left">
                    <p className="font-body font-light text-[15.1px] leading-[1.8] tracking-wide text-white m-0 py-2 sm:py-1">
                      <Link href="/terms" className="text-white hover:underline underline-offset-4 transition-all">
                        Terms
                      </Link>
                      <span className="text-white/80 mx-2">|</span>
                      <Link href="/privacy-policy" className="text-white hover:underline underline-offset-4 transition-all">
                        Privacy Policy
                      </Link>
                      <span className="text-white/80 mx-2">|</span>
                      <Link href="/disclaimer" className="text-white hover:underline underline-offset-4 transition-all">
                        Disclaimer
                      </Link>
                      <span className="text-white/80 mx-2">|</span>
                      <span>Website by </span>
                      <a
                        href="https://walkerstrategyco.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:underline underline-offset-4 transition-all"
                      >
                        Walker Strategy Co.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
