export interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    number: 1,
    title: "Discovery Call & Requirements",
    description: "We learn about your business, goals, and target audience to define a clear project scope and timeline.",
  },
  {
    id: "design",
    number: 2,
    title: "Design & Prototype",
    description: "Our designers create wireframes and high-fidelity mockups with interactive prototypes for your approval.",
  },
  {
    id: "development",
    number: 3,
    title: "Development & Testing",
    description: "We build your solution using modern frameworks, with rigorous testing across devices and browsers.",
  },
  {
    id: "review",
    number: 4,
    title: "Review & Revisions",
    description: "You review the work, provide feedback, and we iterate until it's perfect — within the agreed scope.",
  },
  {
    id: "launch",
    number: 5,
    title: "Launch & Support",
    description: "We deploy to production, monitor performance, and provide 30 days of post-launch support included.",
  },
];