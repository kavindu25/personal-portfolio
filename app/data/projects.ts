export type Project = {
  slug: string;
  kind: "professional" | "personal";
  title: string;
  /** Who it was for and what you did. */
  role: string;
  summary: string;
  /** The result, preferably with a number. Professional projects only. */
  outcome?: string;
  stack: string[];
  image?: string;
  imageAlt?: string;
  repo?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "mortgage-automation",
    kind: "professional",
    title: "Mortgage application automation",
    role: "Software Engineer, Skaleminds. Fintech client",
    summary:
      "Automates mortgage applications for brokers. OCR extracts data from customer documents and OpenAI models structure it, while the documents themselves sit in AWS S3 and are retrieved through presigned URLs.",
    outcome: "Cut manual effort for brokers by 60%.",
    stack: ["OCR", "OpenAI LLMs", "AWS S3"],
  },
  {
    slug: "womens-health-app",
    kind: "professional",
    title: "Women's health app",
    role: "Software Engineer, Skaleminds. Health client",
    summary:
      "Cross-platform mobile app built in React Native. I built core features, API integrations and state management, plus the subscription workflows and in-app purchases through RevenueCat.",
    outcome:
      "Shipped subscription workflows and in-app purchases across platforms from a single React Native codebase.",
    stack: ["React Native", "RevenueCat"],
  },
  {
    slug: "manufacturing-resource-planning",
    kind: "professional",
    title: "Manufacturing Resource Planning system",
    role: "Software Engineer, Skaleminds. Manufacturing client",
    summary:
      "Planning system for manufacturing processes. I built its core modules in Django.",
    outcome: "Improved operational efficiency for manufacturing processes.",
    stack: ["Django"],
  },
  {
    slug: "streamrx-reimbursement-platform",
    kind: "professional",
    title: "Pharmacy reimbursement platform",
    role: "Software Engineer (part time), StreamRX",
    summary:
      "Web platform that shows US pharmacy owners detailed drug reimbursement insights. I built a filterable price comparison dashboard covering 100+ drugs across 5+ insurance plans, a CSV parser for analysed plan data, and secure S3 storage for uploaded files.",
    outcome: "Cut manual data handling by 70%.",
    stack: ["Django", "JavaScript", "Bootstrap CSS", "AWS S3"],
  },
  {
    slug: "anime-hub",
    kind: "personal",
    title: "Anime Hub",
    role: "Personal project",
    summary:
      "Anime browser built on Next.js 14 with server-side rendering, Server Actions and infinite scroll.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/animeHub.png",
    imageAlt: "Anime Hub home page with a grid of anime posters",
    repo: "https://github.com/kavindu25/anime-hub",
    live: "https://anime-hub-xi.vercel.app/",
  },
  {
    slug: "mern-book-manager",
    kind: "personal",
    title: "Book manager",
    role: "Personal project",
    summary:
      "Full-stack MERN application for managing a book collection, with separate API and client.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    image: "/images/projects/bookManager.png",
    imageAlt: "Book manager app showing a table of books",
    repo: "https://github.com/kavindu25/mern-book-store-app",
    live: "https://mern-book-store-app.vercel.app/",
  },
  {
    slug: "3d-tshirt-customizer",
    kind: "personal",
    title: "3D t-shirt customizer",
    role: "Personal project",
    summary:
      "Interactive 3D t-shirt editor where colours and logos update on the model in real time.",
    stack: ["React", "Three.js"],
    image: "/images/projects/shirtCustomizer.png",
    imageAlt: "3D t-shirt customizer with colour and logo controls",
    repo: "https://github.com/kavindu25/3d-tshirt-customizer",
    live: "https://3d-tshirt-customizer.vercel.app/",
  },
  {
    slug: "refile",
    kind: "personal",
    title: "reFile",
    role: "Personal project",
    summary:
      "Browser tool that renames a batch of files with a pattern and downloads them as one zip.",
    stack: ["React", "Vite"],
    image: "/images/projects/reFile.png",
    imageAlt: "reFile interface for renaming and zipping files",
    repo: "https://github.com/kavindu25/refile",
    live: "https://refile-xi.vercel.app/",
  },
];
