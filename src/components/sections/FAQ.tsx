"use client";

import { useState } from "react";
import { faqItems } from "@/lib/data/faq";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/ui/card";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="section bg-gray-50 relative overflow-hidden"
      aria-labelledby="faq-title"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-navy-900/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container relative z-10">
        <SectionHeading
          id="faq-title"
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions. Can't find what you're looking for? Get in touch."
          className="mb-10 md:mb-12"
        />

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4" role="region" aria-label="FAQ accordion">
            {faqItems.map((item, index) => (
              <Card
                key={item.id}
                className="group overflow-hidden border-navy-100 hover:border-red-200 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-0">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between p-6 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 bg-white hover:bg-gray-50 transition-colors text-left"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-red-600 flex-shrink-0" aria-hidden="true" />
                      <h3 className="font-heading font-semibold text-navy-900 text-lg pr-8">
                        {item.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`flex-shrink-0 h-5 w-5 text-gray-400 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180 text-red-600" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 text-gray-700 text-body-mobile leading-relaxed animate-fade-in border-t border-gray-100 pt-4">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-slide-up justify-between flex">
            <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-6 py-4 mb-6">
              <HelpCircle className="w-6 h-6 text-navy-400" aria-hidden="true" />
              <p className="text-gray-700 text-body-mobile md:text-body-desktop">
                Still have questions? We&apos;d love to hear from you.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold underline underline-offset-2"
            >
              Contact Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}