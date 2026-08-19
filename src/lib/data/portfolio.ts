export interface PortfolioItem {
  id: string;
  name: string;
  category: string;
  description: string;
  result: string;
  image: string;
  imageAlt: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "techstartup-landing",
    name: "TechStartup Landing Page",
    category: "Website Design",
    description: "High-converting landing page for a SaaS startup",
    result: "40% increase in demo signups",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    imageAlt: "TechStartup landing page mockup on desktop and mobile devices",
  },
  {
    id: "local-bakery-ecommerce",
    name: "Local Bakery Ecommerce",
    category: "Shopify Development",
    description: "Custom Shopify store with subscription ordering",
    result: "3x online revenue in 6 months",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    imageAlt: "Bakery ecommerce site showing product grid and checkout flow",
  },
  {
    id: "fitness-app",
    name: "FitTrack Mobile App",
    category: "App Development",
    description: "Cross-platform fitness tracking app with social features",
    result: "10k+ downloads in first month",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    imageAlt: "FitTrack mobile app screens showing dashboard and workout tracking",
  },
  {
    id: "consulting-firm-site",
    name: "Apex Consulting Website",
    category: "Web Development",
    description: "Professional services site with lead generation focus",
    result: "60% more qualified leads",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    imageAlt: "Apex Consulting website with case studies and team pages",
  },
  {
    id: "fashion-brand-ecommerce",
    name: "Luna Fashion Ecommerce",
    category: "Ecommerce Development",
    description: "Headless commerce with Next.js and Shopify backend",
    result: "2.5x conversion rate improvement",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    imageAlt: "Luna Fashion ecommerce site with product pages and cart",
  },
  {
    id: "real-estate-platform",
    name: "PropertyPro Platform",
    category: "App Development",
    description: "Real estate marketplace with advanced search and maps",
    result: "500+ listings in launch week",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    imageAlt: "PropertyPro platform showing property listings and map view",
  },
];