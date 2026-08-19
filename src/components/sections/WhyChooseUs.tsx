import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardContent, CardHeader } from "@/components/ui/ui/card";
import { Users, DollarSign, Shield, Clock, Zap, CheckCircle } from "lucide-react";

const differentiators = [
  {
    icon: Users,
    title: "US-Based Team & Support Hours",
    description: "All work done in-house by our US team. No offshore handoffs. Support during your business hours.",
  },
  {
    icon: DollarSign,
    title: "Transparent Fixed Pricing",
    description: "No hourly surprises. Fixed quotes after discovery. You approve the scope and price before we start.",
  },
  {
    icon: Shield,
    title: "Dedicated Project Manager",
    description: "One point of contact who owns your project end-to-end. Weekly updates, clear timelines, no runaround.",
  },
  {
    icon: Clock,
    title: "Post-Launch Support Included",
    description: "30 days of free support after launch. Monthly maintenance plans available for ongoing peace of mind.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Streamlined process means 4–8 weeks for typical sites. We respect your timeline and communicate proactively.",
  },
  {
    icon: CheckCircle,
    title: "Results-Driven (SEO/Conversion Built In)",
    description: "Performance, SEO, and conversion optimization aren't add-ons — they're baked into every project from day one.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="section bg-white relative overflow-hidden"
      aria-labelledby="why-choose-us-title"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-navy-900/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container relative z-10">
        <SectionHeading
          id="why-choose-us-title"
          title="Why Choose USA Web App Coder"
          subtitle="We're not just another agency. We're your long-term digital partner — invested in your growth."
          className="mb-10 md:mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="group h-full border-navy-100 hover:border-red-200 hover:shadow-xl transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-2">
                  <div className="group-hover:scale-110 transition-transform duration-500 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4" aria-hidden="true">
                    <Icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-heading font-semibold text-navy-900 text-lg group-hover:text-red-600 transition-colors duration-300">{item.title}</h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 text-body-mobile leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}