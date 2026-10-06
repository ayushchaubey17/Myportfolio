"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/types";
import { cn } from "@/lib/utils";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface ProjectCardProps {
  project: Project;
  expanded?: boolean;
}

export function ProjectCard({ project, expanded: initiallyExpanded = false }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(initiallyExpanded);

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="panel card-glow group overflow-hidden"
    >
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        {/* left: narrative */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent">{project.index}</span>
            <span className="h-px w-6 bg-line-strong" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist-faint">
              {project.era}
            </span>
            {project.status === "Live" && (
              <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                live
              </span>
            )}
          </div>

          <h3 className="mt-4 text-xl font-semibold tracking-tight text-mist sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-mist-dim">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span key={tech} className="chip">{tech}</span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line-strong bg-ink-850 px-3.5 py-2 text-[13px] font-medium text-mist transition-all hover:border-accent/50 hover:text-accent"
              >
                {link.href.includes("github") ? (
                  <Github className="h-3.5 w-3.5" aria-hidden="true" />
                ) : (
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[13px] font-medium text-mist-dim transition-colors hover:text-accent",
                expanded && "text-accent"
              )}
            >
              Case study
              <ChevronDown
                className={cn("h-3.5 w-3.5 transition-transform duration-200", expanded && "rotate-180")}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {/* right: architecture preview */}
        {project.architecture.length > 0 && (
          <div className="relative border-t border-line bg-ink-950/60 p-6 sm:p-8 lg:border-l lg:border-t-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist-faint">
              architecture
            </p>
            <div className="mt-5 space-y-0">
              {project.architecture.map((node, i) => (
                <div key={node.id}>
                  <div
                    className={cn(
                      "rounded-lg border px-4 py-2.5 transition-all duration-300",
                      node.tone === "core" && "border-accent/30 bg-accent/5",
                      node.tone === "store" && "border-line bg-ink-850",
                      node.tone === "edge" && "border-line bg-ink-850",
                      node.tone === "flow" && "border-line bg-ink-850"
                    )}
                  >
                    <p className="text-[13px] font-medium text-mist">{node.label}</p>
                  </div>
                  {i < project.architecture.length - 1 && (
                    <div className="flex justify-center py-0.5" aria-hidden="true">
                      <svg width="2" height="14" className="overflow-visible">
                        <line
                          x1="1" y1="0" x2="1" y2="14"
                          className="flow-line"
                          stroke="#2dd4bf"
                          strokeWidth="1.5"
                          opacity="0.45"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {project.slug === "travell" && (
              <div className="mt-6 grid grid-cols-2 gap-2">
                {["Fastest", "Cheapest", "Balanced", "Fewest Transfers"].map((s) => (
                  <div
                    key={s}
                    className="rounded-md border border-line bg-ink-900 px-3 py-2 text-center font-mono text-[10px] text-mist-dim"
                  >
                    {s}
                  </div>
                ))}
                <p className="col-span-2 mt-1 text-center font-mono text-[10px] text-mist-faint">
                  Dijkstra-based journey planning
                </p>
              </div>
            )}

            {project.slug === "my-school" && (
              <div className="mt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-mist-faint">
                  exam workflow
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {[
                    "Config",
                    "Scheduling",
                    "Participation",
                    "Seating",
                    "Attendance",
                    "Marks",
                    "Results",
                    "Publication",
                    "Admit Cards",
                    "Report Cards",
                  ].map((stage, i) => (
                    <span
                      key={stage}
                      className="rounded border border-line bg-ink-900 px-2 py-1 font-mono text-[9.5px] text-mist-dim"
                    >
                      <span className="text-accent/70">{i + 1}·</span> {stage}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* expandable case study */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line"
          >
            <div className="grid gap-8 bg-ink-950/40 p-6 sm:p-8 lg:grid-cols-2">
              <CaseBlock title="Problem" body={project.problem} />
              <CaseBlock title="Approach" body={project.approach} />
              <CaseList title="Engineering decisions" items={project.decisions} />
              <div className="space-y-8">
                <CaseList title="Challenges" items={project.challenges} />
                <CaseList title="Key features" items={project.features} />
              </div>
            </div>
            {project.evolutionNote && (
              <div className="border-t border-line px-6 py-4 sm:px-8">
                <p className="text-sm italic text-mist-dim">{project.evolutionNote}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function CaseBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
        {title}
      </h4>
      <p className="mt-3 text-sm leading-relaxed text-mist-dim">{body}</p>
    </div>
  );
}

function CaseList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
        {title}
      </h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-mist-dim">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent/60" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
