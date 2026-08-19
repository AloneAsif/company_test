"use client";

import { processSteps } from "@/lib/data/process";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/ui/card";
import { ArrowRight } from "lucide-react";

export default function ProcessSteps() {
  return (
    <section
      id="process"
      className="section bg-white relative overflow-hidden"
      aria-labelledby="process-title"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-navy-900/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container relative z-10">
        <SectionHeading
          id="process-title"
          title="How It Works"
          subtitle="Our proven 5-step process takes you from idea to launch — with clarity and confidence at every stage."
          className="mb-10 md:mb-12"
        />

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy-200 to-red-200 -translate-x-1/2" aria-hidden="true" />

          {/* Desktop: Alternating layout with connecting line */}
          <div className="hidden lg:block space-y-10 lg:space-y-16 relative">
            {processSteps.map((step, index) => (
              <div
                key={`desktop-${step.id}`}
                className={`relative flex gap-6 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative z-10 flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-navy-900 flex items-center justify-center border-4 border-white shadow-xl group relative">
                  <span className="text-white font-heading font-bold text-2xl md:text-3xl">{step.number}</span>
                  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-navy-200 to-red-200 z-[-1]" aria-hidden="true">
                    {index < processSteps.length - 1 && (
                      <div className="w-full h-full" />
                    )}
                  </div>
                  <ArrowRight className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity lg:opacity-0" aria-hidden="true" />
                </div>

                <Card
                  className={`flex-1 lg:w-[45%] p-6 bg-white border-navy-100 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-500 ${
                    index % 2 === 0 ? "lg:mr-6" : "lg:ml-6"
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="font-heading font-bold text-navy-900 text-xl group-hover:text-red-600 transition-colors duration-300">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-700 text-body-mobile md:text-body-desktop leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Mobile: Stacked vertical layout */}
          <div className="lg:hidden space-y-6 pt-8">
            {processSteps.map((step, index) => (
              <Card key={`mobile-${step.id}`} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="flex gap-4 p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center border-3 border-white shadow-md">
                    <span className="text-white font-heading font-bold text-xl">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-navy-900 text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-700 text-body-mobile leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}