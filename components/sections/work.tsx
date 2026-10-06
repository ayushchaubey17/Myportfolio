"use client";

import { motion } from "framer-motion";
import { projects, evolution } from "@/data/site";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerParent, viewportOnce } from "@/lib/motion";

export function Work() {
  return (
    <section id="work" className="scroll-mt-20">
      <div className="shell py-24">
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title="Systems I've built."
          description="Two live products and one origin story — each solving a real problem end-to-end, from data pipeline to interface."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>

        {/* engineering evolution strip */}
        <div className="mt-12 panel p-6 sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist-faint">
            engineering evolution
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
            {evolution.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                <span
                  className={
                    i === evolution.length - 1
                      ? "rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
                      : "rounded-lg border border-line bg-ink-850 px-4 py-2 text-sm text-mist-dim"
                  }
                >
                  {step}
                </span>
                {i < evolution.length - 1 && (
                  <span className="font-mono text-mist-faint" aria-hidden="true">→</span>
                )}
              </span>
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-mist-dim">
            Tech Blog is where the progression started — classic Java web with
            Servlets, JSP and MySQL. Each step since has added a layer: Spring
            Boot on the backend, Node.js and Next.js across the stack, and
            microservices when a single service stops being enough.
          </p>
        </div>
      </div>
    </section>
  );
}
