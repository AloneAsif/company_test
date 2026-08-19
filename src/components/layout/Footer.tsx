import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Share2, MessageSquare, Heart } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { siteConfig } from "@/lib/constants";

const socialIcons = {
  facebook: Globe,
  twitter: Share2,
  linkedin: MessageSquare,
  instagram: Heart,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white" role="contentinfo">
      <div className="container py-14 lg:py-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column - Full width on mobile, 2 cols on tablet, 2 cols on desktop */}
          <div className="lg:col-span-2 sm:col-span-2 space-y-6">
            <Logo variant="full" className="inline-flex" aria-hidden="true" />
            <p className="text-white/70 text-body-mobile max-w-xs leading-relaxed">
              We turn your idea into a professional website or app that converts. US-based team, transparent pricing, results-driven.
            </p>
            <ul className="flex flex-wrap gap-3" role="list" aria-label="Social media links">
              {Object.entries(siteConfig.socialLinks).map(([platform, url]) => {
                const Icon = socialIcons[platform as keyof typeof socialIcons] || Globe;
                return (
                  <li key={platform}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-red-400 transition-colors duration-200 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10"
                      aria-label={`Follow us on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-lg">Company</h3>
            <nav aria-label="Company links">
              <ul className="space-y-3" role="list">
                {siteConfig.footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-red-400 transition-colors duration-200 text-body-mobile flex items-center gap-2 group"
                    >
                      {link.label}
                      <svg className="w-4 h-4 text-white/40 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-lg">Services</h3>
            <nav aria-label="Service links">
              <ul className="space-y-2.5" role="list">
                {siteConfig.footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-red-400 transition-colors duration-200 text-body-mobile flex items-center gap-2 group"
                    >
                      {link.label}
                      <svg className="w-4 h-4 text-white/40 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading font-semibold text-white text-lg">Contact</h3>
            <address className="not-italic space-y-4 text-white/70">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-red-400 transition-colors text-body-mobile break-all"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="hover:text-red-400 transition-colors text-body-mobile"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
                <span className="text-body-mobile">{siteConfig.location}</span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6 text-sm" role="list" aria-label="Legal links">
            <li>
              <Link
                href="#"
                className="text-white/40 hover:text-red-400 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white/40 hover:text-red-400 transition-colors"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}