export const profile = {
  name: "Kavindu de Alwis",
  role: "Software engineer",
  siteUrl: "https://kavindudealwis.dev", // [TODO] confirm production domain
  email: "kavindudealwis@gmail.com",
  location: "Kesbewa, Sri Lanka",
  mediumHandle: "@kavindudealwis",
  cvPath: "/Kavindu-de-Alwis-SE.pdf",
  headline: "Full stack engineer who owns web products front to back.",
  summary:
    "Software engineer at Skaleminds with four years in production, from React and Next.js front ends to Node.js APIs, databases and Docker deployments. I take features from the first design discussion to production.",
  availability: "Open to new opportunities",
  roleNote: "I am a software engineer at Skaleminds and open to new opportunities.",
  // Shown as label/value pairs in the Contact section.
  workDetails: [
    { label: "Based in", value: "Kesbewa, Sri Lanka (GMT+5:30)" },
    { label: "Work arrangement", value: "Remote, on-site or hybrid" },
    { label: "Notice period", value: "1 month" },
  ],
  description:
    "Kavindu de Alwis is a full stack software engineer with four years of production experience in React, Next.js, Node.js and TypeScript, who owns web products from interface to deployment.",
  links: {
    github: "https://github.com/kavindu25",
    linkedin: "https://www.linkedin.com/in/kavindu-de-alwis-9a2a571b1/",
    medium: "https://medium.com/@kavindudealwis",
  },
} as const;

// Rendered in the hero trace: one row per layer of the stack worked across.
// `start` and `span` are percentages of the track; they only draw the bars.
export const trace = [
  { layer: "browser", detail: "React, React Native, Next.js", start: 0, span: 34 },
  { layer: "api", detail: "Node.js, Django, Express", start: 18, span: 40 },
  { layer: "data", detail: "PostgreSQL, MongoDB, MySQL", start: 42, span: 30 },
  { layer: "infra", detail: "Docker, Linux, AWS", start: 60, span: 40 },
] as const;
