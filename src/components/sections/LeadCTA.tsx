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
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold font-heading uppercase tracking-wider mb-6 animate-slide-up">
              Start Your Project Today
            </span>
            <h2
              id="lead-cta-title"
              className="font-heading font-bold text-white text-h1-mobile md:text-h1-desktop mb-6 leading-tight animate-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              Ready to Build Something That Grows Your Business?
            </h2>
            <p className="text-white text-body-mobile md:text-body-desktop mb-10 max-w-xl mx-auto lg:mx-0 animate-slide-up leading-relaxed" style={{ animationDelay: "200ms" }}>
              Let&apos;s talk about your goals, timeline, and budget. No pressure, no jargon &mdash; just a clear path forward.
            </p>
            <Button
              size="lg"
              variant="primary"
              className="group w-full lg:w-auto animate-slide-up"
              style={{ animationDelay: "300ms" }}
              asChild
            >
              <a href="mailto:hello@usawebappcoder.com?subject=New%20Project%20Inquiry">
                Get Your Free Quote
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Button>
            <p className="mt-6 text-white text-sm animate-slide-up" style={{ animationDelay: "400ms" }}>
              Or email us directly at{" "}
              <a href="mailto:hello@usawebappcoder.com" className="underline hover:text-red-400 transition-colors">
                hello@usawebappcoder.com
              </a>
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 space-y-6">
              <h3 className="font-heading font-bold text-white text-xl mb-6 text-center lg:text-left">Let&apos;s Connect</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                    <Mail className="w-5 h-5 text-red-400" aria-hidden="true" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-white text-sm font-medium">Email Us</p>
                    <a href="mailto:hello@usawebappcoder.com" className="text-white font-medium hover:text-red-400 transition-colors group-hover:text-red-400">
                      hello@usawebappcoder.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                    <Phone className="w-5 h-5 text-red-400" aria-hidden="true" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-white text-sm font-medium">Call Us</p>
                    <a href="tel:+10000000000" className="text-white font-medium hover:text-red-400 transition-colors group-hover:text-red-400">
                      +1 (000) 000-0000
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                    <MapPin className="w-5 h-5 text-red-400" aria-hidden="true" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-white text-sm font-medium">Location</p>
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