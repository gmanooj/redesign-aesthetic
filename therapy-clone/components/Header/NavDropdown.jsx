"use client";

import React from "react";
import Link from "next/link";

/**
 * Desktop navigation dropdown with clean hover transitions and alignment.
 */
export default function NavDropdown({ title, links, id }) {
  return (
    <div className="ml-[1.5vw] lg:ml-[2.5vw] relative group py-0">
      <button
        className="text-[12.5px] lg:text-[13.3px] uppercase tracking-[0.1em] leading-[1.8em] text-brand-heading font-normal hover:opacity-75 transition-opacity flex items-center gap-1 cursor-pointer whitespace-nowrap"
        aria-expanded="false"
        aria-controls={id}
      >
        <span>{title}</span>
      </button>
      <div
        id={id}
        className="absolute right-[-1em] top-full hidden group-hover:block w-max min-w-[200px] bg-brand-bg border-0 pt-2 pb-4 px-4 z-50 shadow-sm"
      >
        <div className="flex flex-col items-end space-y-2.5 text-right">
          {links.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="inline-block text-[11px] xl:text-[11.5px] uppercase tracking-[0.08em] text-brand-heading font-normal hover:border-b hover:border-brand-heading pb-[1px] transition-all duration-150 whitespace-nowrap"
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
