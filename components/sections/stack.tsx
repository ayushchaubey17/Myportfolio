"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerParent, fadeUp, viewportOnce } from "@/lib/motion";

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-20 border-t border-line bg-ink-900/30">
      <div className="shell py-24">
        <SectionHeading
          index="04"
          eyebrow="Tech stack"
          title="Tools of the trade."
          description="The technologies I reach for — grouped by where they live in the system. No ratings, just honest usage."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.id}
              variants={fadeUp}
              className="panel panel-hover p-6"
            >
              <p className="font-mono text-[11px] text-mist-faint">
                <span className="text-accent">{group.command}</span>
              </p>
              <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-mist">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
