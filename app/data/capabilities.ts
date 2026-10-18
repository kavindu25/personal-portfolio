export type Capability = {
  slug: string;
  title: string;
  tools: string[];
};

export const capabilities: Capability[] = [
  {
    slug: "languages",
    title: "Languages",
    tools: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    slug: "frontend",
    title: "Front end",
    tools: ["React", "React Native", "Next.js", "Redux", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    slug: "backend",
    title: "Back end",
    tools: ["Node.js", "Express", "Django", "FastAPI", "Prisma"],
  },
  {
    slug: "data",
    title: "Databases",
    tools: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    slug: "tools",
    title: "Tools and services",
    tools: ["Git", "Linux", "Docker", "Shopify", "AWS S3", "OpenAI API", "RevenueCat"],
  },
];
