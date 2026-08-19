"use client";

import { portfolioItems } from "@/lib/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/ui/card";
import { ArrowUpRight, CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";

const categoryColors = {
  "Website Design": "bg-blue-100 text-blue-700 border-blue-200",
  "Shopify Development": "bg-purple-100 text-purple-700 border-purple-200",
  "App Development": "bg-green-100 text-green-700 border-green-200",
  "Web Development": "bg-orange-100 text-orange-700 border-orange-200",
  "Ecommerce Development": "bg-red-100 text-red-700 border-red-200",
};

const categoryIcons = {
  "Website Design": <CheckCircle2 className="w-4 h-4" />,
  "Shopify Development": <TrendingUp className="w-4 h-4" />,
  "App Development": <Zap className="w-4 h-4" />,
  "Web Development": <Users className="w-4 h-4" />,
  "Ecommerce Development": <ArrowUpRight className="w-4 h-4" />,
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section bg-gray-50"
      aria-labelledby="portfolio-title"
    >
      <div className="container">
        <SectionHeading
          id="portfolio-title"
          title="Our Work"
          subtitle="Placeholder projects demonstrating our capabilities. Real client work replaces these on delivery."
          className="mb-10 md:mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => {
            const categoryColor = categoryColors[item.category as keyof typeof categoryColors] || categoryColors["Website Design"];
            const CategoryIcon = categoryIcons[item.category as keyof typeof categoryIcons] || categoryIcons["Website Design"];

            return (
              <Card
                key={item.id}
                className="group overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 border-gray-100 bg-white"
              >
                {/* Image/Thumbnail Area */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${categoryColor} shadow-sm bg-white/95 backdrop-blur-sm`}>
                      {CategoryIcon}
                      {item.category}
                    </span>
                  </div>

                  {/* View Case Study Button Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-lg text-navy-900 font-semibold text-sm shadow-lg hover:bg-red-50 hover:text-red-600 transition-colors w-full"
                    >
                      View Case Study
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <CardHeader className="px-6 pb-2">
                  <CardTitle className="font-heading font-bold text-navy-900 text-xl group-hover:text-red-600 transition-colors line-clamp-1">
                    {item.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col p-6 pt-0">
                  <p className="text-gray-700 text-body-mobile leading-relaxed mb-4 flex-1 line-clamp-3">{item.description}</p>

                  {/* Key Result */}
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg mb-4">
                    <TrendingUp className="w-5 h-5 text-red-600 flex-shrink-0" aria-hidden="true" />
                    <span className="text-red-600 font-semibold text-sm">{item.result}</span>
                  </div>
                </CardContent>

                <CardFooter className="px-6 pb-6 pt-0 border-t border-gray-100">
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-1.5 text-navy-500 text-sm font-medium hover:text-red-600 transition-colors py-2 rounded-lg hover:bg-gray-50"
                  >
                    View Details
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Disclaimer & CTA */}
        <div className="text-center mt-16">
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-6 py-4 mb-4 max-w-2xl mx-auto">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-700 text-body-mobile md:text-body-desktop leading-relaxed">
              These are placeholder projects with illustrative metrics. Real client work with measured results replaces these upon delivery.
            </p>
          </div>
          <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
            <a href="#contact">Discuss Your Project</a>
          </Button>
        </div>
      </div>
    </section>
  );
}