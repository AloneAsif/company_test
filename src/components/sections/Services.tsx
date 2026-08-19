import { services } from "@/lib/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/ui/card";
import {
  Layout,
  Code,
  Smartphone,
  BarChart,
  PenTool,
  Palette,
  ShoppingCart,
  Store,
  CreditCard,
} from "lucide-react";

const iconMap = {
  Layout,
  Code,
  Smartphone,
  BarChart,
  PenTool,
  Palette,
  ShoppingCart,
  Store,
  CreditCard,
};

export default function Services() {
  return (
    <section
      id="services"
      className="section bg-white relative overflow-hidden"
      aria-labelledby="services-title"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-navy-900/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container relative z-10">
        <SectionHeading
          id="services-title"
          title="What We Do"
          subtitle="End-to-end digital services — from strategy and design to development, marketing, and ongoing growth."
          className="mb-10 md:mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card
                key={service.id}
                className="group h-full flex flex-col hover:border-red-200 hover:shadow-xl transition-all duration-500 border-gray-100 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="group-hover:scale-110 transition-transform duration-500 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4" aria-hidden="true">
                    <Icon className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl font-heading text-navy-900 group-hover:text-red-600 transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-slide-up">
          <p className="text-gray-700 text-body-mobile md:text-body-desktop max-w-2xl mx-auto">
            Need something custom? We also build headless commerce platforms, progressive web apps, and custom API integrations.
            <br />
            <a href="#contact" className="text-red-600 hover:text-red-700 font-semibold underline underline-offset-2">
              Let&apos;s discuss your project &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}