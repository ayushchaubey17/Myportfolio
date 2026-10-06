export interface Profile {
  name: string;
  shortName: string;
  initials: "AK";
  title: string;
  location: string;
  email: "ayush96361570@gmail.com";
  phone: "+91-9636157030";
  github: "ayushchaubey17";
  githubUrl: "https://github.com/ayushchaubey17";
  linkedin: "https://www.linkedin.com/in/ayush-chaubey-4a9702271/";
  tagline: string;
  availability: string;
  about: string[];
}

export interface SkillGroup {
  id: string;
  label: string;
  command: string;
  skills: string[];
}

export interface Experience {
  id: string;
  org: string;
  role: string;
  period: string;
  kind: "education" | "work";
  location?: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface Achievement {
  id: string;
  label: string;
  detail: string;
  kind: "certification" | "practice";
  meta?: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  sub?: string;
  tone?: "core" | "edge" | "store" | "flow";
}

export interface ArchitectureEdge {
  from: string;
  to: string;
  label?: string;
}

export interface Architecture {
  id: string;
  name: string;
  tag: string;
  description: string;
  layers: ArchitectureNode[][];
  note: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: "travell" | "my-school" | "tech-blog";
  index: string;
  name: string;
  title: string;
  era: string;
  role: string;
  status: string;
  summary: string;
  stack: string[];
  architecture: ArchitectureNode[];
  flow: string[];
  problem: string;
  approach: string;
  decisions: string[];
  challenges: string[];
  features: string[];
  links: ProjectLink[];
  featured: boolean;
  evolutionNote?: string;
}

export interface ResumeMeta {
  file: string;
  label: string;
}
