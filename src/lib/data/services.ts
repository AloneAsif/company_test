export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "website-design",
    title: "Website Design",
    description: "Custom, conversion-focused designs that reflect your brand and engage your audience from the first click.",
    icon: "Layout",
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Modern, performant websites built with React, Next.js, and TypeScript — optimized for speed and SEO.",
    icon: "Code",
  },
  {
    id: "app-development",
    title: "App Development",
    description: "Cross-platform mobile and web applications that scale with your business, built with React Native and Expo.",
    icon: "Smartphone",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Data-driven strategies across SEO, PPC, social media, and email to grow traffic and convert visitors into customers.",
    icon: "BarChart",
  },
  {
    id: "content-writing",
    title: "Content Writing",
    description: "Compelling, SEO-optimized copy that tells your story, builds authority, and drives organic growth.",
    icon: "PenTool",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Brand identities, marketing collateral, and visual assets that make your business memorable and professional.",
    icon: "Palette",
  },
  {
    id: "ecommerce-store-setup",
    title: "Ecommerce Store Setup & Automation",
    description: "End-to-end store configuration, payment integration, and workflow automation for seamless operations.",
    icon: "ShoppingCart",
  },
  {
    id: "shopify-development",
    title: "Shopify Web Development",
    description: "Custom Shopify themes, app integrations, and performance optimization for high-converting stores.",
    icon: "Store",
  },
  {
    id: "ecommerce-web-development",
    title: "Ecommerce Web Development",
    description: "Headless commerce solutions with Next.js, Shopify, and custom backends for unique shopping experiences.",
    icon: "CreditCard",
  },
];