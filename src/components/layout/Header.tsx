"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("mobile-menu");
      const hamburger = document.getElementById("mobile-menu-toggle");

      if (menu && !menu.contains(event.target as Node) &&
          hamburger && !hamburger.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200"
            : "bg-white/80 backdrop-blur-md border-b border-gray-200"
        }`}
      >
        <div className="container h-full flex items-center justify-between">
          <Logo variant="full" className="flex-shrink-0" />

          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-navy-900 font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="md" asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
            <Button variant="primary" size="md" asChild>
              <Link href="#contact">Get a Free Quote</Link>
            </Button>
          </div>

          <button
            id="mobile-menu-toggle"
            className="md:hidden p-3 text-gray-600 hover:text-navy-900 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 z-50 bg-white flex flex-col items-center justify-center gap-8 p-8 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="relative w-full mb-8">
            <Logo variant="compact" className="flex items-center justify-start" />
            <button
              className="absolute top-0 right-0 p-3 text-gray-600 hover:text-navy-900 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-4 text-center w-full" role="navigation" aria-label="Mobile navigation">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-navy-900 font-heading font-semibold text-xl hover:text-red-600 transition-colors py-3 w-full block min-h-[44px] flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-4 w-full max-w-xs mt-4">
              <Button variant="secondary" size="lg" className="w-full min-h-[48px]" asChild>
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
              <Button variant="primary" size="lg" className="w-full min-h-[48px]" asChild>
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Get a Free Quote
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}