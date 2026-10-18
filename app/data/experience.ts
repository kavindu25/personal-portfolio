export type Role = {
  title: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  /** The role held today; shown with a filled marker on the timeline. */
  current?: boolean;
};

export type Employer = {
  company: string;
  url: string;
  kind: string;
  roles: Role[];
};

// Newest first. Roles inside an employer are newest first too.
export const experience: Employer[] = [
  {
    company: "Skaleminds (Formerly Avantrio)",
    url: "https://skaleminds.com/",
    kind: "Full time",
    roles: [
      {
        title: "Software Engineer",
        period: "Nov 2024 to present",
        current: true,
        summary:
          "Developed full-stack web/mobile applications across health, fintech and manufacturing domains.",
        highlights: [
          "Built core features, API integrations, state management and subscription workflows for a cross-platform women's health app in React Native.",
          "Added in-app purchases and subscription management with RevenueCat.",
          "Built a mortgage application automation system that uses OCR to extract data and OpenAI models to structure it, cutting manual effort for brokers by 60%.",
          "Created secure file storage and retrieval on AWS S3 with presigned URLs for sensitive customer documents.",
          "Built core modules of a Manufacturing Resource Planning system in Django, improving operational efficiency for manufacturing processes.",
        ],
        stack: [
          "Django",
          "JavaScript",
          "React.js",
          "Node.js",
          "React Native",
          "Prisma",
          "PostgreSQL",
          "Tailwind CSS",
          "Docker",
          "OpenAI LLMs",
          "AWS",
          "RevenueCat",
        ],
      },
      {
        title: "Associate Software Engineer",
        period: "Sep 2023 to Oct 2024",
        summary: "Delivered modern, mobile-first web apps with optimised performance.",
        highlights: [
          "Built mobile-first user interfaces with CSS frameworks such as Bootstrap and Tailwind CSS.",
          "Integrated REST APIs and third-party services to expand what the applications could do.",
        ],
        stack: ["React.js", "Redux", "Bootstrap CSS", "Tailwind CSS"],
      },
      {
        title: "Trainee Software Engineer",
        period: "Oct 2021 to Sep 2022",
        summary: "Gained foundational experience in full-stack development and UI design.",
        highlights: [
          "Built responsive interfaces that give users seamless access to web applications across devices.",
          "Integrated backend services through REST APIs to exchange data and extend application features.",
          "Documented technical specifications and code base changes to improve maintainability and team collaboration.",
        ],
        stack: ["React.js", "Next.js", "Django REST", "Bootstrap CSS"],
      },
    ],
  },
  {
    company: "StreamRX",
    url: "https://www.streamrx.co/",
    kind: "Part time",
    roles: [
      {
        title: "Software Engineer",
        period: "Aug 2024 to Nov 2024",
        summary:
          "Built a web platform for US pharmacy owners that shows detailed drug reimbursement insights to maximise profit.",
        highlights: [
          "Built a price comparison dashboard with filtering that compares 100+ drugs across 5+ insurance plans.",
          "Created a CSV parser to extract analysed insurance plan data, cutting manual data handling by 70%.",
          "Integrated AWS S3 for secure storage of uploaded pharmacy data files.",
        ],
        stack: ["Django", "JavaScript", "Bootstrap CSS"],
      },
    ],
  },
];
