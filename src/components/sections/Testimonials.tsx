"use client";

import { useState, useCallback, useEffect } from "react";
import { testimonials } from "@/lib/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardContent, CardHeader } from "@/components/ui/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section
      id="testimonials"
      className="section bg-white relative overflow-hidden"
      aria-labelledby="testimonials-title"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-navy-900/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container relative z-10">
        <SectionHeading
          id="testimonials-title"
          title="What Our Clients Say"
          subtitle="Real results from businesses we've helped grow online."
          className="mb-10 md:mb-12"
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="h-full border-navy-100 hover:border-red-200 hover:shadow-xl transition-all duration-500 bg-white">
                    <CardHeader className="pb-2">
                      <div className="flex gap-1 mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <blockquote className="text-gray-700 text-body-mobile md:text-body-desktop leading-relaxed mb-6 italic relative">
                        <svg className="absolute -top-8 -left-2 w-10 h-10 text-red-100" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-100 to-red-100 flex items-center justify-center overflow-hidden">
                          <svg className="w-6 h-6 text-navy-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-heading font-semibold text-navy-900">{testimonial.author}</div>
                          <div className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              onClick={prev}
              className="p-4 rounded-full bg-white border border-navy-200 hover:border-red-300 hover:bg-red-50 text-navy-600 hover:text-red-600 transition-all duration-300 shadow-sm min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="flex items-center justify-center gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-red-600 w-10" : "bg-gray-300 hover:bg-gray-400"
                  } min-w-[44px] min-h-[44px] flex items-center justify-center p-2`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-selected={index === currentIndex}
                  role="tab"
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-4 rounded-full bg-white border border-navy-200 hover:border-red-300 hover:bg-red-50 text-navy-600 hover:text-red-600 transition-all duration-300 shadow-sm min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}