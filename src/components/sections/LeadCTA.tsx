"use client";

import Button from "@/components/ui/Button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function LeadCTA() {
  return (
    <section
      id="contact"
      className="section relative overflow-hidden"
      aria-labelledby="lead-cta-title"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Main CTA */}
          <div className="text-center lg:text-left animate-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-semibold font-heading uppercase tracking-wider mb-6 animate-slide-up border border-white/10">
              Start Your Project Today
            </span>
            <h2
              id="lead-cta-title"
              className="font-heading font-bold text-white text-h1-mobile md:text-h1-desktop mb-6 leading-tight animate-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              Ready to Build Something That Grows Your Business?
            </h2>
            <p className="text-white/90 text-body-mobile md:text-body-desktop mb-10 max-w-xl mx-auto lg:mx-0 animate-slide-up leading-relaxed" style={{ animationDelay: "200ms" }}>
              Let&apos;s talk about your goals, timeline, and budget. No pressure, no jargon &mdash; just a clear path forward.
            </p>
            <Button
              size="lg"
              variant="primary"
              className="group w-full sm:w-auto animate-slide-up"
              style={{ animationDelay: "300ms" }}
              asChild
            >
              <a href="mailto:hello@usawebappcoder.com?subject=New%20Project%20Inquiry">
                Get Your Free Quote
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Button>
            <p className="mt-6 text-white/70 text-sm animate-slide-up" style={{ animationDelay: "400ms" }}>
              Or email us directly at{" "}
              <a href="mailto:hello@usawebappcoder.com" className="underline hover:text-red-400 transition-colors text-white">
                hello@usawebappcoder.com
              </a>
            </p>
          </div>

          {/* Right Column - Contact Info Card */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10 space-y-6 h-full">
              <h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-2 text-center lg:text-left">Let&apos;s Connect</h3>
              <p className="text-white/50 text-sm text-center lg:text-left mb-6">Have questions? We&apos;d love to hear from you. Reach out and we&apos;ll respond within 24 hours.</p>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group border border-white/5">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                    <Mail className="w-5 h-5 text-red-400" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-1">Email Us</p>
                    <a href="mailto:hello@usawebappcoder.com" className="text-white font-medium hover:text-red-400 transition-colors group-hover:text-red-400 break-all">
                      hello@usawebappcoder.com
                    </a>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group border border-white/5">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                    <Phone className="w-5 h-5 text-red-400" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-1">Call Us</p>
                    <a href="tel:+10000000000" className="text-white font-medium hover:text-red-400 transition-colors group-hover:text-red-400">
                      +1 (000) 000-0000
                    </a>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group border border-white/5">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                    <MapPin className="w-5 h-5 text-red-400" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-1">Location</p>
                    <p className="text-white font-medium">USA-Based Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}