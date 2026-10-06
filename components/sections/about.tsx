"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerParent, fadeUp, viewportOnce } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line">
      <div className="shell py-24">
        <SectionHeading
          index="07"
          eyebrow="About"
          title="A short introduction."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-10 lg:grid-cols-[1.4fr_1fr]"
        >
          <div className="space-y-5">
            {profile.about.map((para) => (
              <motion.p
                key={para.slice(0, 32)}
                variants={fadeUp}
                className="max-w-2xl text-[15px] leading-relaxed text-mist-dim"
              >
                {para}
              </motion.p>
            ))}
          </div>

          <motion.div variants={fadeUp} className="panel p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist-faint">
              quick facts
            </p>
            <dl className="mt-4 space-y-3 text-sm">
              <Fact label="Name" value={profile.name} />
              <Fact label="Title" value={profile.title} />
              <Fact label="Location" value={profile.location} />
              <Fact label="Degree" value="B.Tech IT — Anna University Chennai" />
              <Fact label="Email" value={profile.email} />
              <Fact label="Phone" value={profile.phone} />
            </dl>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 border-b border-line/60 pb-3 last:border-0 last:pb-0">
      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-mist-faint">
        {label}
      </dt>
      <dd className="text-mist">{value}</dd>
    </div>
  );
}
