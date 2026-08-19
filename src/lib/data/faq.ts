export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "pricing-timeline",
    question: "How much does a website or app cost, and how long does it take?",
    answer: "Every project is unique. A typical business website ranges from $5,000–$15,000 and takes 4–8 weeks. Custom web apps and ecommerce stores start at $15,000 and take 8–16+ weeks. We provide a fixed quote after our discovery call so there are no surprises.",
  },
  {
    id: "whats-included",
    question: "What's included in your website development packages?",
    answer: "All projects include: discovery & strategy, custom design (desktop & mobile), responsive development, CMS setup, basic SEO optimization, analytics integration, cross-browser testing, and 30 days of post-launch support. Content writing and advanced marketing are available as add-ons.",
  },
  {
    id: "startups-vs-established",
    question: "Do you work with startups or only established businesses?",
    answer: "We work with both! We love helping early-stage startups build their MVP and scale, and we also partner with established companies for redesigns, replatforming, and digital transformation. Our process adapts to your stage and budget.",
  },
  {
    id: "ecommerce-shopify",
    question: "Can you build Shopify stores and custom ecommerce solutions?",
    answer: "Yes. We're Shopify Partners and build custom Shopify themes, headless Shopify with Next.js, and fully custom ecommerce platforms. We handle everything from product setup to payment gateways, subscriptions, and automation workflows.",
  },
  {
    id: "post-launch-support",
    question: "What happens after my site launches? Do you offer ongoing support?",
    answer: "Every project includes 30 days of free post-launch support for bug fixes and minor adjustments. After that, we offer monthly maintenance plans covering updates, security monitoring, backups, and priority support — so you can focus on your business.",
  },
  {
    id: "revisions-policy",
    question: "How many revisions do I get during the design and development process?",
    answer: "Our process includes 2 rounds of design revisions on mockups and 1 round of development revisions after the staging review. Additional revisions are available at an hourly rate. We find this structure keeps projects on track while giving you flexibility.",
  },
  {
    id: "getting-started",
    question: "How do I get started with a project?",
    answer: "Click 'Get a Free Quote' anywhere on this site, fill out our brief project questionnaire, and we'll schedule a 30-minute discovery call. We'll discuss your goals, timeline, and budget, then send a detailed proposal with a fixed price and timeline within 2 business days.",
  },
  {
    id: "hosting-domain",
    question: "Do you provide hosting and domain registration?",
    answer: "We don't sell hosting or domains directly, but we'll recommend the best providers for your needs (Vercel, Netlify, AWS, Shopify, etc.) and handle all the technical setup — DNS configuration, SSL, CI/CD pipelines, and performance optimization.",
  },
];