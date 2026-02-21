"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Single nav link — desktop variant.
 * Ultra-small all-caps Inter, hover brightens colour.
 */
export default function NavLinkItem({ href, children, className, onClick }: NavLinkItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "font-sans text-[0.65rem] tracking-[0.18em] uppercase",
        "text-fg-muted hover:text-fg-base transition-colors duration-300 no-underline",
        className
      )}
    >
      {children}
    </Link>
  );
}
