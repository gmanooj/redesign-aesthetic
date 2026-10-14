import React from "react";
import Link from "next/link";

/**
 * Reusable underline link featuring an animated right-to-left border collapse on hover.
 */
export default function UnderlineLink({
  href,
  children,
  className = "",
  ariaLabel,
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`btn-underline font-body text-[12.4px] text-brand-heading ${className}`}
    >
      {children}
    </Link>
  );
}
