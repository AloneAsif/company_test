import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
  children?: ReactNode;
  id?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
  align = "center",
  children,
}: SectionHeadingProps) {
  const alignClasses = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`flex flex-col ${alignClasses} gap-3 max-w-3xl ${align === "center" ? "mx-auto" : ""} ${className}`}>
      {children && (
        <span className="text-red-600 font-heading font-semibold text-sm uppercase tracking-wider">
          {children}
        </span>
      )}
      <h2 className="font-heading font-bold text-navy-900 text-h2-mobile md:text-h2-desktop">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-700 text-body-mobile md:text-body-desktop max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}