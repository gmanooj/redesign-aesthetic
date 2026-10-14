"use client";

import React from "react";
import Link from "next/link";

/**
 * Desktop navigation dropdown with clean hover transitions and alignment.
 */
export default function NavDropdown({ title, links, id }) {
  const handleDropdownClick = (href) => (e) => {
    const targetId = href.replace(/^\/?#/, "");
    if (targetId) {
      e.preventDefault();
      if (typeof window !== "undefined") {
        if (window.__scrollToSection) {
          window.__scrollToSection(targetId);
        } else if (window.__lenis) {
          const el = document.getElementById(targetId);
          if (el) {
            window.__lenis.scrollTo(el, {
              offset: 0,
              duration: 3.5,
              easing: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
              immediate: false,
              lock: true,
              force: true,
            });
          }
        }
      }
    }
  };

  return (
    <div className="ml-[1.5vw] lg:ml-[2.5vw] relative group py-0">
      <button
        className="text-[12.5px] lg:text-[13.3px] uppercase tracking-[0.1em] leading-[1.8em] text-ink font-normal hover:opacity-75 transition-opacity flex items-center gap-1 cursor-pointer whitespace-nowrap"
        aria-expanded="false"
        aria-controls={id}
      >
        <span>{title}</span>
      </button>
      <div
        id={id}
        className="absolute right-[-1em] top-full hidden group-hover:block w-max min-w-[200px] bg-secondary border-0 pt-2 pb-4 px-4 z-50 shadow-sm"
      >
        <div className="flex flex-col items-end space-y-2.5 text-right">
          {links.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href.startsWith("#") ? `/${item.href}` : item.href}
                scroll={false}
                onClick={handleDropdownClick(item.href)}
                className="inline-block text-[11px] xl:text-[11.5px] uppercase tracking-[0.08em] text-ink font-normal hover:border-b hover:border-ink pb-[1px] transition-all duration-150 whitespace-nowrap"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
