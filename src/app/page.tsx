import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import LeadCTA from "@/components/sections/LeadCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <ProcessSteps />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <LeadCTA />
      </main>
      <Footer />
    </>
  );
}