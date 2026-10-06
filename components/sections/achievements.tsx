"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerParent, fadeUp, viewportOnce } from "@/lib/motion";

export function Achievements() {
  return (
    <section aria-label="Proof of practice" className="border-t border-line bg-ink-900/30">
      <div className="shell py-20">
        <SectionHeading
          index="06"
          eyebrow="Proof of practice"
          title="Learning, logged."
          description="Courses, certifications and problem-solving volume — kept honest and compact."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((a) => (
            <motion.div
              key={a.id}
              variants={fadeUp}
              className="panel panel-hover flex flex-col justify-between p-5"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-mist-faint">
                  {a.kind === "certification" ? "certification" : "practice"}
                </p>
                <p className="mt-2.5 text-[15px] font-medium text-mist">{a.label}</p>
              </div>
              <p className="mt-2 text-sm text-mist-dim">{a.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
