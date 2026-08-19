import Button from "@/components/ui/Button.server";

// Inline SVG for zero LCP delay - eliminates network request entirely
const HeroDeviceSVG = (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="300"
    height="300"
    className="w-full h-full max-w-[300px] max-h-[300px] text-navy-200"
    aria-hidden="true"
  >
    <rect x="40" y="60" width="320" height="280" rx="12" stroke="#1E3A66" strokeWidth="2" />
    <rect x="40" y="60" width="320" height="40" rx="12" fill="#1E3A66" fillOpacity="0.1" />
    <circle cx="70" cy="80" r="6" fill="#1E3A66" fillOpacity="0.3" />
    <rect x="90" y="72" width="60" height="16" rx="4" fill="#1E3A66" fillOpacity="0.2" />
    <rect x="280" y="72" width="40" height="16" rx="4" fill="#1E3A66" fillOpacity="0.2" />
    <rect x="60" y="130" width="280" height="4" rx="2" fill="#1E3A66" fillOpacity="0.15" />
    <rect x="60" y="150" width="200" height="4" rx="2" fill="#1E3A66" fillOpacity="0.15" />
    <rect x="60" y="170" width="160" height="4" rx="2" fill="#1E3A66" fillOpacity="0.15" />
    <rect x="60" y="210" width="280" height="80" rx="8" fill="#1E3A66" fillOpacity="0.1" stroke="#1E3A66" strokeWidth="1" strokeDasharray="8,4" />
    <rect x="80" y="230" width="100" height="40" rx="6" fill="#1E3A66" fillOpacity="0.2" />
    <rect x="200" y="230" width="120" height="40" rx="6" fill="#1E3A66" fillOpacity="0.2" />
    <rect x="60" y="310" width="280" height="3" rx="1.5" fill="#1E3A66" fillOpacity="0.15" />
  </svg>
);

export default function Hero() {
  const trustStats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "100%", label: "US-Based Team" },
    { value: "4.9/5", label: "Client Rating" },
    { value: "30 Days", label: "Free Support" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-white"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-br from-red-100 to-navy-100 rounded-full blur-3xl opacity-50" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-red-100 to-navy-100 rounded-full blur-3xl opacity-30" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-red-600/10 to-navy-900/10 rounded-full blur-2xl" aria-hidden="true" />
      </div>

      <div className="container relative z-10 py-12 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-semibold font-heading uppercase tracking-wider mb-6 animate-slide-up">
              USA-Based Digital Agency
            </span>
            <h1
              id="hero-title"
              className="font-heading font-bold text-navy-900 text-h1-mobile md:text-h1-desktop mb-6 leading-tight animate-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              Turn Your Idea Into a{" "}
              <span className="text-red-600">Website or App</span>{" "}
              That Actually Grows Your Business
            </h1>
            <p className="text-gray-700 text-body-mobile md:text-body-desktop mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up leading-relaxed" style={{ animationDelay: "200ms" }}>
              USA Web App Coder combines design, development, and marketing under one roof &mdash; so you don&apos;t need to manage multiple vendors. Fast. Transparent. Results-driven.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: "300ms" }}>
              <Button size="lg" variant="primary" href="#contact">
                Get a Free Consultation
              </Button>
              <Button size="lg" variant="outline" href="#portfolio">
                View Our Work
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900/10 to-red-600/10 rounded-3xl blur-xl" aria-hidden="true" />
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 p-4 md:p-6 aspect-square flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-navy-50 via-white to-red-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(14,39,72,0.03)_50%)] bg-[size:20px_20px]" aria-hidden="true" />
                  {HeroDeviceSVG}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-lg transform rotate-3 opacity-90" aria-hidden="true">
                <div className="w-full h-full bg-white/10 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-2xl md:text-3xl">+40%</span>
                  <span className="text-white/80 text-sm ml-1">Leads</span>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-36 h-36 md:w-48 md:h-48 bg-navy-900 rounded-2xl shadow-lg" aria-hidden="true">
                <div className="w-full h-full bg-white/5 rounded-2xl flex items-center justify-center p-4">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 pt-10 border-t border-gray-200 animate-slide-up" style={{ animationDelay: "400ms" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center p-4">
                <div className="font-heading font-bold text-navy-900 text-3xl md:text-4xl mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent -z-10 pointer-events-none" aria-hidden="true" />
    </section>
  );
}