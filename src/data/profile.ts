// Everything personal on the site lives here and in projects.ts.
// When the resume changes, update these two files — the pages read from them.

export const profile = {
  name: "Anany",
  role: "AI student & full-stack builder",
  location: "Sydney, AU",
  tagline:
    "I build agentic systems and the evaluation work that keeps them honest — from LLM agents running real workflows to benchmarks that show what a model actually learned.",
  status: "Open to ML / software internships",
  email: "anany7557@gmail.com",
  links: {
    github: "https://github.com/ananyduhan",
    linkedin: "https://www.linkedin.com/in/anany-anany",
    site: "https://ananyduhan.com",
  },
  about: [
    "I'm studying a Bachelor of Information Technology at Macquarie University in Sydney, majoring in Artificial Intelligence. Most of what I build sits where language models meet real software: agents that take actions inside an organisation's tools, and full-stack products wrapped around them.",
    "I care about measurement. It's easy to ship something that looks like it works — a demo, a fine-tune, a leaderboard number. It's harder to show what actually changed and what it cost. That gap is what pulls me toward LLM evaluation and reliability.",
    "Outside that, I build and fly FPV drones, run, lift, and follow Formula 1 more closely than is strictly reasonable.",
  ],
  interests: [
    "LLM evaluation & reliability",
    "Transformer architectures",
    "Reinforcement learning",
    "Applied AI systems",
  ],
};

export const education = {
  degree: "Bachelor of Information Technology",
  major: "Major in Artificial Intelligence",
  school: "Macquarie University, Sydney",
  expected: "Expected 2029",
  coursework: [
    "Python programming",
    "Statistics",
    "Database design",
    "Java & object-oriented programming",
    "Data science (current)",
  ],
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Swift", "Java", "SQL"],
  },
  {
    group: "Frameworks",
    items: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Prisma",
      "LangChain",
      "LangGraph",
      "Claude API",
      "OpenAI API",
    ],
  },
  {
    group: "Machine learning",
    items: [
      "CNN image classification",
      "Data augmentation",
      "LLM benchmark evaluation (GSM8K)",
      "Jupyter",
    ],
  },
  {
    group: "Data & infra",
    items: ["PostgreSQL", "Supabase", "Vercel", "Redis (Upstash)", "Sentry"],
  },
];

export const experience = [
  {
    role: "Events Team Member",
    org: "Macquarie AI & Data Science Society (MQAIS)",
    period: "2026 — present",
  },
];
