export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "sarah-johnson",
    quote: "USA Web App Coder transformed our outdated website into a modern lead-generation machine. Their team understood our business goals and delivered beyond expectations.",
    author: "Sarah Johnson",
    role: "Founder & CEO",
    company: "TechFlow Solutions",
    avatar: "/images/testimonials/sarah.jpg",
    rating: 5,
  },
  {
    id: "michael-chen",
    quote: "The Shopify store they built for us is beautiful, fast, and easy to manage. We've seen a 3x increase in online sales since launch. Highly recommend their ecommerce expertise.",
    author: "Michael Chen",
    role: "Owner",
    company: "Artisan Bakery Co.",
    avatar: "/images/testimonials/michael.jpg",
    rating: 5,
  },
  {
    id: "emily-rodriguez",
    quote: "Working with USA Web App Coder felt like having an in-house tech team. They handled our mobile app from concept to App Store launch with clear communication every step of the way.",
    author: "Emily Rodriguez",
    role: "VP of Product",
    company: "FitLife Inc.",
    avatar: "/images/testimonials/emily.jpg",
    rating: 5,
  },
];