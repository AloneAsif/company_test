"use client";

import Link from "next/link";

interface LogoProps {
  variant?: "full" | "compact";
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <span className="text-red-600 font-heading font-bold text-xl" aria-hidden="true">USA</span>
      <span className="text-navy-900 font-heading font-bold text-xl">Web App Coder</span>
    </Link>
  );
}