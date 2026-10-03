export type Project = {
  slug: string;
  title: string;
  /** One line shown on cards. */
  summary: string;
  /** Short label shown above the title, e.g. "Hackathon · 1st place". */
  kind: string;
  stack: string[];
  /** Filter topics on the projects page. */
  tags: string[];
  highlights: string[];
  featured?: boolean;
  award?: string;
  links?: { label: string; href: string }[];
};

// Order here is the order on the site.
export const projects: Project[] = [
  {
    slug: "harmony",
    title: "Harmony",
    summary:
      "An agentic dashboard that automates fundraising, volunteer onboarding, and outreach for the charity Bipolar Australia.",
    kind: "Hackathon",
    award: "1st place — Hack for Humanity",
    stack: ["Base44", "Claude API", "OpenAI API", "Agents"],
    tags: ["agents", "llm", "hackathon"],
    featured: true,
    highlights: [
      "Placed 1st at Hack for Humanity (hosted by Base44 and Wix) with Harmony, an internal dashboard that automates admin workflows for the charity Bipolar Australia.",
      "Owned the backend for three agents covering fundraising, volunteer onboarding, and outreach, defining each agent's tools, logic, and hand-offs back to staff.",
      "Integrated LLM APIs with the organisation's existing tools through Base44, keeping all three workflows behind a single staff-facing dashboard.",
    ],
  },
  {
    slug: "dental-booking",
    title: "Dental Clinic Booking System with AI Agent",
    summary:
      "A full-stack booking platform where an AI agent takes requests, checks availability, and writes appointments to the clinic calendar.",
    kind: "Full-stack",
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "LLM agent"],
    tags: ["agents", "llm", "full-stack"],
    featured: true,
    links: [{ label: "Live demo", href: "https://dental.ananyduhan.com" }],
    highlights: [
      "Built an AI agent that manages the clinic workflow end to end: taking booking requests, checking availability and writing appointments to the clinic calendar.",
      "Built a full-stack appointment booking platform with separate patient and clinic interfaces, using Next.js App Router route groups and middleware-enforced role-based access control.",
      "Implemented timezone-correct scheduling pinned to Australia/Sydney so appointment times remain accurate across daylight saving transitions.",
      "Deployed on Vercel with Supabase Postgres (via Prisma).",
    ],
  },
  {
    slug: "gsm8k-evaluation",
    title: "LLM Evaluation on GSM8K",
    summary:
      "Evaluating fine-tuned DeepSeek models on maths reasoning — and fixing the serving bug that was breaking the runs.",
    kind: "Evaluation",
    stack: ["Python", "Jupyter", "DeepSeek"],
    tags: ["evals", "llm", "ml"],
    featured: true,
    highlights: [
      "Evaluated fine-tuned DeepSeek models on the GSM8K maths-reasoning benchmark, scoring model answers against ground truth.",
      "Debugged the model-serving code (a misused context manager) that was breaking evaluation runs.",
    ],
  },
  {
    slug: "founder-matching",
    title: "Founder-Matching Platform",
    summary:
      "Matching logic and automated intro scheduling for an early-stage product, built with a spec-first team.",
    kind: "Team project",
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "Auth.js"],
    tags: ["full-stack", "team"],
    highlights: [
      "Contributed matching logic and automated intro-scheduling to an early-stage product, integrating the Google Calendar API for availability lookup and booking.",
      "Implemented authentication using Auth.js with Google OAuth.",
      "Worked within a spec-first team process using design documents and architecture decision records across phased delivery.",
    ],
  },
  {
    slug: "cat-dog-classifier",
    title: "Cat vs Dog Image Classifier",
    summary:
      "A convolutional neural network trained with data augmentation to generalise to unseen images.",
    kind: "Machine learning",
    stack: ["Python", "CNN"],
    tags: ["ml"],
    highlights: [
      "Trained a convolutional neural network to classify cat and dog images, using data augmentation to reduce overfitting and improve accuracy on unseen images.",
    ],
  },
  {
    slug: "iphone-photo-backup",
    title: "iPhone Photo Backup Tool",
    summary:
      "A native utility that moves a full iPhone photo library to an external SSD in one pass.",
    kind: "Native tool",
    stack: ["Swift"],
    tags: ["swift", "tools"],
    highlights: [
      "Built a native utility that transfers a complete iPhone photo library to an external SSD in a single pass, as a local alternative to paid cloud storage.",
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
