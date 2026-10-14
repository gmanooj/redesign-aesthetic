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
  ...props
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel || props["aria-label"]}
      className={`btn-underline font-body text-[12.4px] text-ink ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
