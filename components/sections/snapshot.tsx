"use client";

import { motion } from "framer-motion";
import { snapshot } from "@/data/site";
import { staggerParent, fadeUp, viewportOnce } from "@/lib/motion";

export function Snapshot() {
  return (
    <section aria-label="Engineering snapshot" className="border-y border-line bg-ink-900/40">
      <div className="shell py-14">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5"
        >
          {snapshot.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="group bg-ink-900 p-5 transition-colors duration-300 hover:bg-ink-850"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {item.label}
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-mist-dim">
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
