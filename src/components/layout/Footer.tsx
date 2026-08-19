import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Share2 } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { siteConfig } from "@/lib/constants";

const socialIcons = {
  facebook: Globe,
  twitter: Share2,
  linkedin: Globe,
  instagram: Share2,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white" role="contentinfo">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <Logo variant="full" className="mb-4 inline-flex" />
            <p className="text-white text-body-mobile mb-6 max-w-xs">
              We turn your idea into a professional website or app that converts. US-based team, transparent pricing, results-driven.
            </p>
            <ul className="flex gap-4" role="list" aria-label="Social media links">
              {Object.entries(siteConfig.socialLinks).map(([platform, url]) => {
                const Icon = socialIcons[platform as keyof typeof socialIcons] || Globe;
                return (
                  <li key={platform}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-red-400 transition-colors duration-200 flex items-center justify-center w-10 h-10 rounded-full hover:bg-navy-800"
                      aria-label={`Follow us on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
            <nav aria-label="Company links">
              <ul className="space-y-3" role="list">
                {siteConfig.footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-red-400 transition-colors duration-200 text-body-mobile"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <nav aria-label="Service links">
              <ul className="space-y-2" role="list">
                {siteConfig.footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-red-400 transition-colors duration-200 text-body-mobile"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic space-y-3 text-white">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-red-400 transition-colors text-body-mobile"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="hover:text-red-400 transition-colors text-body-mobile"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-body-mobile">{siteConfig.location}</span>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-300 text-sm text-center md:text-left">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-6 text-sm" role="list" aria-label="Legal links">
            <li>
              <Link
                href="#"
                className="text-navy-300 hover:text-red-400 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-navy-300 hover:text-red-400 transition-colors"
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