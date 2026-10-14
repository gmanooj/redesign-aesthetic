"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavDropdown from "./NavDropdown";
import MobileDrawer from "./MobileDrawer";
import PillButton from "@/components/common/PillButton";

const ourTeamLinks = [
  { name: "Jennifer Anderson, LMFT", href: "/jennifer-anderson" },
  { name: "Candace Bletscher, AMFT", href: "/candace-bletscher" },
  { name: "Heather Williams-Baumgart, AMFT", href: "/heather-williams-baumgart" },
  { name: "Samantha Johnson, AMFT", href: "/samantha-johnson" },
  { name: "Autumn Bodily, AMFT", href: "/autumn-bodily" },
  { name: "Rosa Gomez, AMFT", href: "/rosa-gomez" },
  { name: "Chad Flores, AMFT", href: "/chad-flores" },
  { name: "Simran Sidhu, AMFT", href: "/simran-sidhu" },
  { name: "Jessica Jauregui, MA, AMFT", href: "/jessica-jauregui" },
];

const specialtiesLinks = [
  { name: "Dissociation", href: "/dissociative-identity-disorder-therapist-newbury-park" },
  { name: "Trauma", href: "/trauma-counseling-newbury-park" },
  { name: "Special Needs Parenting", href: "/counseling-special-needs-parents-newbury-park" },
  { name: "Couples", href: "/couples-therapy" },
  { name: "Children & Teens", href: "/children-and-teens" },
  { name: "Anxiety & Depression", href: "/anxiety-depression" },
  { name: "Adoption", href: "/adoption-therapy-ventura-county-ca" },
];

const methodsLinks = [
  { name: "EMDR", href: "/emdr-therapy-newbury-park" },
  { name: "Brainspotting", href: "/brainspotting" },
  { name: "Somatic Therapy", href: "/somatic-therapy" },
  { name: "Parts Work Therapy", href: "/parts-work-therapy" },
];

/**
 * Site Navigation Header with desktop dropdowns and responsive mobile drawer.
 */
export default function Header({ className = "" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFolder, setActiveFolder] = useState(null);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveFolder(null);
  };

  return (
    <>
      <header className={`absolute top-0 left-0 right-0 z-40 w-full bg-brand-bg pointer-events-auto ${className}`}>
        {/* Navigation Bar Container */}
        <div className="w-full px-[6vw] py-[6vw] md:px-[5vw] md:py-[1.4vw] flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0 leading-none">
            <Link href="/" className="inline-block leading-none" aria-label="Conejo Valley Family Counseling">
              <Image
                src="/images/icons/brand-logo.png"
                alt="Conejo Valley Family Counseling"
                width={1500}
                height={438}
                className="h-[48px] sm:h-[55px] md:h-[58px] lg:h-[65px] xl:h-[75px] max-h-[75px] w-auto object-contain block"
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center text-right font-[family-name:var(--font-body)]">
              <div>
                <Link
                  href="/therapists-newbury-park"
                  className="text-[12.5px] lg:text-[13.3px] uppercase tracking-[0.1em] leading-[1.8em] text-brand-heading font-normal hover:opacity-75 transition-opacity whitespace-nowrap"
                >
                  About
                </Link>
              </div>

              <NavDropdown title="Our Team" links={ourTeamLinks} id="our-team" />
              <NavDropdown title="Specialties" links={specialtiesLinks} id="specialties" />
              <NavDropdown title="Methods" links={methodsLinks} id="methods" />

              <div className="ml-[1.5vw] lg:ml-[2.5vw]">
                <Link
                  href="/faqs"
                  className="text-[12.5px] lg:text-[13.3px] uppercase tracking-[0.1em] leading-[1.8em] text-brand-heading font-normal hover:opacity-75 transition-opacity whitespace-nowrap"
                >
                  FAQs
                </Link>
              </div>
            </nav>

            {/* Desktop Action CTA */}
            <div className="ml-[1.5vw] lg:ml-[2.5vw]">
              <PillButton href="/contact" className="px-[16px] lg:px-[19.5px] py-[12px] lg:py-[15px]">
                Contact
              </PillButton>
            </div>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1 text-brand-heading focus:outline-none flex flex-col justify-center items-center cursor-pointer"
              aria-label="Open Menu"
            >
              <div className="w-[35px] h-[20px] flex flex-col justify-between items-center py-[1px]">
                <span className="w-[35px] h-[1px] bg-brand-heading block" />
                <span className="w-[35px] h-[1px] bg-brand-heading block" />
                <span className="w-[35px] h-[1px] bg-brand-heading block" />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={closeMenu}
        activeFolder={activeFolder}
        setActiveFolder={setActiveFolder}
        ourTeamLinks={ourTeamLinks}
        specialtiesLinks={specialtiesLinks}
        methodsLinks={methodsLinks}
      />
    </>
  );
}
