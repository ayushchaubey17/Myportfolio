"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerParent, fadeUp, viewportOnce } from "@/lib/motion";

export function Journey() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-line bg-ink-900/30">
      <div className="shell py-24">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Engineering journey."
          description="From engineering fundamentals to production systems — each step moved closer to the backend."
        />

        <motion.ol
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative space-y-0"
        >
          {experience.map((item, i) => (
            <motion.li
              key={item.id}
              variants={fadeUp}
              className="relative grid gap-4 py-8 sm:grid-cols-[140px_1fr] sm:gap-10"
            >
              {/* timeline rail */}
              <div className="absolute left-[7px] top-0 h-full w-px bg-line sm:left-[7px]" aria-hidden="true">
                {i < experience.length - 1 && (
                  <span className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-line-strong to-transparent" />
                )}
              </div>

              <div className="pl-8 sm:pl-8">
                <p className="font-mono text-xs text-accent">{item.period}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-mist-faint">
                  {item.kind === "education" ? "education" : "work"}
                </p>
              </div>

              <div className="pl-8 sm:pl-8">
                <div className="absolute left-0 top-11 h-[15px] w-[15px] rounded-full border-2 border-accent/60 bg-ink-950 sm:top-11" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-mist">{item.role}</h3>
                <p className="mt-1 text-sm font-medium text-mist-dim">
                  {item.org}
                  {item.location ? (
                    <span className="font-normal text-mist-faint"> · {item.location}</span>
                  ) : null}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist-dim">
                  {item.summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm text-mist-dim">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent/60" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
                {item.stack.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.stack.map((s) => (
                      <span key={s} className="chip">{s}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ol>

        {/* progression highlight */}
        <div className="panel mt-6 p-6 sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist-faint">
            progression
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="rounded-lg border border-line bg-ink-850 px-4 py-2 text-sm text-mist-dim">
              React.js Developer
            </span>
            <span className="font-mono text-mist-faint" aria-hidden="true">↓</span>
            <span className="rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              Java / Spring Boot Backend Developer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
