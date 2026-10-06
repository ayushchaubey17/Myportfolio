import type {
  Achievement,
  Architecture,
  Experience,
  Profile,
  Project,
  SkillGroup,
} from "./types";

export const profile: Profile = {
  name: "Ayush Kumar",
  shortName: "Ayush",
  initials: "AK",
  title: "Java Backend & MERN Developer",
  location: "Chennai, India",
  email: "ayush96361570@gmail.com",
  phone: "+91-9636157030",
  github: "ayushchaubey17",
  githubUrl: "https://github.com/ayushchaubey17",
  linkedin: "https://www.linkedin.com/in/ayush-chaubey-4a9702271/",
  tagline:
    "Java Backend & MERN Developer focused on Spring Boot, Node.js, Next.js, microservices and scalable application architecture.",
  availability: "Currently building backend systems @ TCS",
  about: [
    "I'm a backend/full-stack developer who works across Java/Spring Boot and the modern JavaScript ecosystem, with experience building REST APIs, microservices, database-driven applications and full-stack products.",
    "My day-to-day lives close to the data layer: designing service boundaries, integrating REST APIs, and shipping features end-to-end — from schema to Server Components.",
    "I care about correctness and maintainability. Automated tests, clear service boundaries and plain, readable code are how I keep complex systems manageable.",
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    command: "$ languages",
    skills: ["Java", "JavaScript", "TypeScript"],
  },
  {
    id: "backend",
    label: "Backend",
    command: "$ backend",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    command: "$ frontend",
    skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Material UI"],
  },
  {
    id: "database",
    label: "Database",
    command: "$ database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    id: "tools",
    label: "Tools",
    command: "$ tools",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "Postman",
      "IntelliJ IDEA",
      "VS Code",
      "Eclipse",
    ],
  },
  {
    id: "core",
    label: "Core",
    command: "$ core",
    skills: ["OOP", "Data Structures & Algorithms", "Problem Solving"],
  },
];

export const snapshot: { label: string; value: string }[] = [
  { label: "Backend", value: "Java · Spring Boot · Node.js · Express" },
  { label: "Frontend", value: "Next.js · React.js · TypeScript" },
  { label: "Architecture", value: "Microservices · REST APIs · gRPC" },
  { label: "Data", value: "MongoDB · MySQL" },
  { label: "Infrastructure", value: "Docker · Git · GitHub" },
];

export const experience: Experience[] = [
  {
    id: "tcs",
    org: "Tata Consultancy Services",
    role: "Software Developer — SSBT Project",
    period: "Current",
    kind: "work",
    location: "Chennai, India",
    summary:
      "Started building React.js interfaces for the SSBT project, then moved into the backend — now shipping Java / Spring Boot services and REST integrations end-to-end.",
    highlights: [
      "Progressed from React.js Developer to Java / Spring Boot Backend Developer",
      "Build and maintain Java services with Spring Boot, REST APIs and microservices",
      "Integrate REST APIs and reusable React UI components across the stack",
      "Feature development, debugging and end-to-end delivery on a live project",
    ],
    stack: ["Java", "Spring Boot", "Microservices", "REST APIs", "React.js"],
  },
  {
    id: "zoho",
    org: "Zoho Corporation",
    role: "Software Developer Intern",
    period: "Internship",
    kind: "work",
    location: "Chennai, India",
    summary:
      "Worked on backend and full-stack development in Java, learning how production software is built and shipped.",
    highlights: ["Java backend development", "Full-stack development experience"],
    stack: ["Java", "Full-stack"],
  },
  {
    id: "btech",
    org: "Anna University Chennai",
    role: "B.Tech — Information Technology",
    period: "2020 — 2024",
    kind: "education",
    summary: "Four-year engineering degree, completed 2024.",
    highlights: ["CGPA: 8.2"],
    stack: [],
  },
];

export const achievements: Achievement[] = [
  {
    id: "infosys",
    kind: "certification",
    label: "Full Stack Development Course",
    detail: "Infosys",
  },
  {
    id: "mern",
    kind: "certification",
    label: "MongoDB · React.js · Node.js",
    detail: "Certification",
  },
  {
    id: "hackerrank",
    kind: "certification",
    label: "Problem Solving & Java",
    detail: "HackerRank certifications and badges",
  },
  {
    id: "gfg",
    kind: "practice",
    label: "280 problems",
    detail: "GeeksForGeeks",
  },
  {
    id: "leetcode",
    kind: "practice",
    label: "150 problems",
    detail: "LeetCode",
  },
];

export const architectures: Architecture[] = [
  {
    id: "micro",
    name: "Microservice Architecture",
    tag: "system.one",
    description:
      "Requests enter through an API gateway and fan out to independent services, each owning its own data.",
    layers: [
      [
        { id: "client", label: "Client", tone: "edge" },
      ],
      [
        { id: "gateway", label: "API Gateway", tone: "core" },
      ],
      [
        { id: "identity", label: "Identity Service", tone: "flow" },
        { id: "school", label: "School Service", tone: "flow" },
        { id: "academic", label: "Academic Service", tone: "flow" },
        { id: "comms", label: "Communication Service", tone: "flow" },
      ],
      [
        { id: "db", label: "Database", tone: "store" },
      ],
    ],
    note: "Service boundaries keep features independent — one service can change without touching the rest.",
  },
  {
    id: "transit",
    name: "Transit Data Pipeline",
    tag: "system.two",
    description:
      "How raw GTFS feeds become routable journeys: parse, normalize, version, store, plan.",
    layers: [
      [
        { id: "gtfs", label: "GTFS Feed", tone: "edge" },
      ],
      [
        { id: "parser", label: "Parser", tone: "flow" },
      ],
      [
        { id: "normalizer", label: "Normalizer", tone: "flow" },
      ],
      [
        { id: "versioned", label: "Versioned Dataset", tone: "core" },
      ],
      [
        { id: "mongo", label: "MongoDB", tone: "store" },
      ],
      [
        { id: "planner", label: "Route Planner", tone: "flow" },
      ],
    ],
    note: "Raw transit data is messy. Normalizing it once, in a versioned dataset, keeps the route planner simple and predictable.",
  },
  {
    id: "fullstack",
    name: "Full Stack Application",
    tag: "system.three",
    description:
      "A single product surface backed by service APIs — Server Components on the front, services behind.",
    layers: [
      [
        { id: "next", label: "Next.js", tone: "edge" },
      ],
      [
        { id: "transport", label: "REST / gRPC", tone: "core" },
      ],
      [
        { id: "services", label: "Backend Services", tone: "flow" },
      ],
      [
        { id: "db", label: "MongoDB", tone: "store" },
      ],
    ],
    note: "One codebase for the product surface, clear API contracts underneath — fast to build, still structured.",
  },
];

export const examWorkflow: string[] = [
  "Configuration",
  "Scheduling",
  "Participation",
  "Seating",
  "Attendance",
  "Marks",
  "Result Calculation",
  "Publication",
  "Admit Cards",
  "Report Cards",
];

export const routingStrategies: { id: string; label: string; note: string }[] = [
  { id: "fastest", label: "Fastest", note: "Minimize total travel time" },
  { id: "cheapest", label: "Cheapest", note: "Minimize fare cost" },
  { id: "balanced", label: "Balanced", note: "Trade time against cost" },
  { id: "transfers", label: "Fewest Transfers", note: "Minimize mode changes" },
];

export const evolution: string[] = [
  "Java Web",
  "Spring Boot",
  "Node.js",
  "Next.js",
  "Microservices",
];

export const projects: Project[] = [
  {
    slug: "travell",
    index: "01",
    name: "Travell",
    title: "Travell — Multimodal Transit & Navigation Platform",
    era: "Full-stack system",
    role: "Solo build",
    status: "Live",
    summary:
      "A multimodal transit and navigation platform that plans journeys across public transport modes — powered by real GTFS data and a Dijkstra-based routing engine with tunable optimization strategies.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "gRPC",
      "GTFS",
      "Dijkstra",
      "Leaflet / MapLibre",
      "Valhalla",
      "OSRM",
    ],
    architecture: [
      { id: "t-gtfs", label: "GTFS Feeds", tone: "edge" },
      { id: "t-ingest", label: "Data Ingestion", tone: "flow" },
      { id: "t-norm", label: "Normalization", tone: "flow" },
      { id: "t-mongo", label: "MongoDB", tone: "store" },
      { id: "t-route", label: "Routing Engine", tone: "core" },
      { id: "t-next", label: "Next.js Application", tone: "edge" },
    ],
    flow: [
      "GTFS Feeds",
      "Data Ingestion",
      "Normalization",
      "MongoDB",
      "Routing Engine",
      "Next.js Application",
    ],
    problem:
      "Getting from A to B in a city usually means stitching together buses, trains and walking — but most navigation tools treat transit as an afterthought. Real transit schedules are published as GTFS feeds: large, messy, versioned datasets that need to be parsed, normalized and turned into something a routing algorithm can actually search.",
    approach:
      "I built a pipeline that ingests GTFS feeds, normalizes them into clean, queryable datasets in MongoDB, and runs journey planning over the resulting graph with a Dijkstra-based routing engine. The engine supports multiple optimization strategies — fastest, cheapest, balanced and fewest transfers — so the same graph can answer different kinds of questions. On the front, a Next.js + TypeScript application renders routes on an interactive Leaflet / MapLibre map, with Valhalla and OSRM handling street-level routing.",
    decisions: [
      "Dijkstra-based journey planning over the transit graph, with cost functions per strategy instead of separate implementations",
      "GTFS normalization as a first-class pipeline step, not ad-hoc parsing at request time",
      "MongoDB as the datastore for normalized, queryable transit datasets",
      "gRPC for internal service communication where services need to talk",
      "Docker to keep the ingestion, API and routing pieces reproducible",
      "Leaflet / MapLibre for map rendering, with Valhalla / OSRM for street-level routing",
    ],
    challenges: [
      "Turning raw GTFS feeds into a normalized, queryable dataset",
      "Modelling multimodal journeys where transfers are a real cost",
      "Supporting four optimization strategies without duplicating routing logic",
    ],
    features: [
      "Multimodal journey planning across transit modes",
      "Four route optimization strategies",
      "Interactive map with route visualization",
      "GTFS ingestion and normalization pipeline",
    ],
    links: [
      { label: "Live project", href: "https://travell-rho-six.vercel.app" },
    ],
    featured: true,
  },
  {
    slug: "my-school",
    index: "02",
    name: "My School",
    title: "My School — Multi-Tenant School Management ERP",
    era: "Microservices system",
    role: "Solo build",
    status: "Live",
    summary:
      "A multi-tenant school management ERP built on a microservices architecture — API gateway, role-based access, tenant isolation, and a full examination workflow from configuration to report cards, backed by 80+ automated Academic Service tests.",
    stack: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Microservices",
      "API Gateway",
      "gRPC",
      "RBAC",
      "Tenant Isolation",
    ],
    architecture: [
      { id: "m-next", label: "Next.js Frontend", tone: "edge" },
      { id: "m-gw", label: "API Gateway", tone: "core" },
      { id: "m-svc", label: "Microservices", tone: "flow" },
      { id: "m-db", label: "MongoDB", tone: "store" },
    ],
    flow: ["Next.js Frontend", "API Gateway", "Microservices", "MongoDB"],
    problem:
      "Schools run their entire academic year through spreadsheets and disconnected tools — and every school needs its own instance, its own roles, its own data. Building an ERP that serves many tenants safely means isolation, role-based access and a service architecture that keeps domains apart.",
    approach:
      "A Next.js frontend talks to an API gateway, which routes to independent microservices backed by MongoDB. Role-based access control decides who sees what; tenant isolation keeps each school's data strictly separated. The heart of the system is the examination workflow — a ten-stage pipeline that takes an exam from configuration all the way to published report cards, with centralized result calculation so marks are computed once, in one place.",
    decisions: [
      "Microservices with an API gateway instead of a monolith, so domains stay independent",
      "RBAC enforced at the service level, not just hidden UI",
      "Tenant isolation built into the data model from day one",
      "Centralized result calculation — one deterministic path from marks to report card",
      "Reusable Next.js components and a deliberate Server/Client Component architecture",
      "Automated testing as a core workflow, not an afterthought",
    ],
    challenges: [
      "Keeping tenant data strictly isolated across services",
      "Coordinating a ten-stage exam workflow across services",
      "Making result calculation deterministic and testable",
    ],
    features: [
      "Multi-tenant architecture with per-school isolation",
      "Role-based access control (RBAC)",
      "Full examination workflow, configuration to report cards",
      "Centralized result calculation engine",
      "80+ Academic Service tests passing",
      "Reusable component library with Server/Client Component architecture",
    ],
    links: [{ label: "Live project", href: "https://myschool-dun.vercel.app/" }],
    featured: true,
  },
  {
    slug: "tech-blog",
    index: "03",
    name: "Tech Blog",
    title: "Tech Blog",
    era: "Earlier work",
    role: "Solo build",
    status: "Archived",
    summary:
      "A blogging platform built on the classic Java web stack — Servlets, JSP, MySQL and Bootstrap. Where the progression started.",
    stack: ["Java", "Servlet", "JSP", "MySQL", "Bootstrap"],
    architecture: [],
    flow: [],
    problem:
      "Before microservices and Server Components, everything lived in request/response Java web apps.",
    approach:
      "A server-rendered Java web application — Servlets handle routing and logic, JSP renders views, MySQL stores content, Bootstrap styles the interface. It's the stack I learned the fundamentals on: HTTP sessions, JDBC-style data access, server-side rendering.",
    decisions: [
      "Server-side rendering with JSP templates",
      "MySQL as a straightforward relational store",
      "Bootstrap for a working UI without a build step",
    ],
    challenges: [
      "Managing sessions and state without a frontend framework",
      "Writing maintainable data access against raw SQL",
    ],
    features: [
      "Full blog workflow: posts, authors, persistence",
      "Server-rendered pages on the Servlet/JSP stack",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/ayushchaubey17/Tech_Blog" },
    ],
    featured: false,
    evolutionNote:
      "This project is the start of a progression — Java web fundamentals, then Spring Boot, Node.js, Next.js and microservices.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const resumeMeta = {
  fileName: "Ayush_Kumar_Resume.pdf",
  label: "Resume",
};
