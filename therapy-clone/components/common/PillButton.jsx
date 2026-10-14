import React from "react";
import Link from "next/link";

/**
 * Reusable rounded pill action button with subtle hover state.
 */
export default function PillButton({
  href,
  children,
  variant = "outline",
  className = "",
  ariaLabel,
}) {
  const baseStyles =
    "inline-flex w-fit items-center justify-center rounded-[100%] font-sans text-[12px] lg:text-[12.4px] tracking-[0.12em] uppercase font-normal transition-colors duration-150 text-center whitespace-nowrap";

  const variantStyles =
    variant === "outline"
      ? "border border-brand-heading text-brand-heading bg-transparent hover:bg-brand-heading hover:text-white"
      : "bg-brand-heading text-white border border-brand-heading hover:bg-transparent hover:text-brand-heading";

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </Link>
  );
}
