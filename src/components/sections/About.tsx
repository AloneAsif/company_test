import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button.server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/ui/card";

export default function About() {
  const missionPoints = [
    "We believe every business deserves a digital presence that works as hard as they do.",
    "No templates, no shortcuts — just custom solutions built for your specific goals.",
    "Your success is our portfolio. We win when you grow.",
  ];

  return (
    <section
      id="about"
      className="section bg-gray-50 relative overflow-hidden"
      aria-labelledby="about-title"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-navy-900/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container relative z-10">
        <SectionHeading
          id="about-title"
          title="About Us"
          subtitle="We're a US-based team of designers, developers, and marketers who believe great digital products come from true partnership."
          align="center"
          className="mb-10 md:mb-14"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <div className="space-y-4">
              <p className="text-gray-700 text-body-mobile md:text-body-desktop leading-relaxed">
                USA Web App Coder was founded on a simple idea: entrepreneurs and small businesses shouldn&apos;t have to choose between quality, speed, and affordability when building their digital presence.
              </p>
              <p className="text-gray-700 text-body-mobile md:text-body-desktop leading-relaxed">
                We bring together website design, web development, app development, and digital marketing under one roof. This means you get a cohesive strategy, a single point of contact, and a team that owns the outcome — not just the deliverable.
              </p>
              <p className="text-gray-700 text-body-mobile md:text-body-desktop leading-relaxed">
                Every project starts with a discovery call to understand your business, your customers, and your goals. Then we design, build, and launch with clear communication, fixed pricing, and no surprises.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-200">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <span className="flex-shrink-0 w-6 h-6 mt-0.5 text-red-600 group-hover:scale-110 transition-transform" aria-hidden="true">✓</span>
                  <span className="text-gray-700 text-body-mobile md:text-body-desktop leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            <Button variant="primary" size="lg" asChild className="mt-6 w-full lg:w-auto animate-slide-up">
              <a href="#contact">Start Your Project</a>
            </Button>
          </div>

          <div className="relative">
            <Card className="h-full shadow-xl border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-red-600/10 to-transparent rounded-full blur-3xl" aria-hidden="true" />
              <CardHeader className="relative z-10 pt-8 md:pt-10 px-8 md:px-10 pb-6">
                <CardTitle className="font-heading font-bold text-navy-900 text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 px-8 md:px-10 pt-0 pb-8 md:pb-10">
                <blockquote className="text-gray-700 text-body-mobile md:text-body-desktop leading-relaxed italic border-l-4 border-red-600 pl-6 my-6">
                  &ldquo;To empower growing businesses with professional, conversion-focused websites and apps &mdash; delivered by a US-based team that communicates clearly, prices transparently, and measures success by your results.&rdquo;
                </blockquote>
                <div className="pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-center">
                  <div className="py-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
                    <div className="font-heading font-bold text-navy-900 text-3xl sm:text-4xl">50+</div>
                    <div className="text-gray-600 text-sm mt-1">Projects Delivered</div>
                  </div>
                  <div className="py-2 border-y border-gray-100 sm:border-y-0 sm:border-x border-gray-100 animate-fade-in" style={{ animationDelay: "200ms" }}>
                    <div className="font-heading font-bold text-navy-900 text-3xl sm:text-4xl">100%</div>
                    <div className="text-gray-600 text-sm mt-1">US-Based Team</div>
                  </div>
                  <div className="py-2 animate-fade-in" style={{ animationDelay: "300ms" }}>
                    <div className="font-heading font-bold text-navy-900 text-3xl sm:text-4xl">4.9/5</div>
                    <div className="text-gray-600 text-sm mt-1">Client Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}