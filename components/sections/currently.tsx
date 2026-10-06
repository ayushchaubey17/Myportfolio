"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { viewportOnce, fadeUp } from "@/lib/motion";

export function Currently() {
  return (
    <section aria-label="Currently" className="border-t border-line">
      <div className="shell py-20">
        <SectionHeading
          index="05"
          eyebrow="Currently"
          title="Status panel."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="panel card-glow overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-line bg-ink-850/60 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-600" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-600" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-600" aria-hidden="true" />
            </div>
            <p className="font-mono text-[11px] text-mist-faint">ayush@dev ~ status</p>
          </div>

          <div className="grid gap-0 sm:grid-cols-2">
            <div className="border-b border-line p-6 sm:border-b-0 sm:border-r">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist-faint">
                current role
              </p>
              <p className="mt-3 text-lg font-medium text-mist">
                Software Developer
              </p>
              <p className="text-sm text-mist-dim">Tata Consultancy Services</p>
              <p className="mt-4 flex items-center gap-2 font-mono text-xs text-accent">
                <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent" />
                {profile.availability}
              </p>
            </div>

            <div className="p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist-faint">
                current focus
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {[
                  "Java",
                  "Spring Boot",
                  "REST APIs",
                  "Microservices",
                  "Backend Engineering",
                ].map((f) => (
                  <span key={f} className="chip">{f}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
