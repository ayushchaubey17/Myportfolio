"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { architectures } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { viewportOnce, fadeUp } from "@/lib/motion";

const TONE_STYLES: Record<string, string> = {
  core: "border-accent/40 bg-accent/10 text-mist",
  edge: "border-line-strong bg-ink-850 text-mist-dim",
  store: "border-amber2/30 bg-amber2/5 text-mist-dim",
  flow: "border-line bg-ink-850 text-mist-dim",
};

export function ArchitectureLab() {
  const [active, setActive] = useState(0);
  const [flowing, setFlowing] = useState(true);

  const arch = architectures[active];

  return (
    <section id="engineering" className="scroll-mt-20">
      <div className="shell py-24">
        <SectionHeading
          index="02"
          eyebrow="Architecture lab"
          title="How I think about systems."
          description="Three patterns that keep showing up in my work — drawn the way I draw them before writing code."
        />

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* selector */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {architectures.map((a, i) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={cn(
                  "group flex min-w-[220px] flex-col rounded-xl border p-4 text-left transition-all duration-200 lg:min-w-0",
                  active === i
                    ? "border-accent/50 bg-accent/5"
                    : "border-line bg-ink-900 hover:border-line-strong"
                )}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mist-faint">
                  {a.tag}
                </span>
                <span
                  className={cn(
                    "mt-1.5 text-sm font-medium",
                    active === i ? "text-accent" : "text-mist"
                  )}
                >
                  {a.name}
                </span>
                <span className="mt-2 text-xs leading-relaxed text-mist-faint">
                  {a.description}
                </span>
              </button>
            ))}
          </div>

          {/* diagram */}
          <motion.div
            key={arch.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="panel relative overflow-hidden p-6 sm:p-8"
          >
            <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist-faint">
                  {arch.name}
                </p>
                <button
                  type="button"
                  onClick={() => setFlowing((v) => !v)}
                  className="flex items-center gap-1.5 font-mono text-[11px] text-mist-dim transition-colors hover:text-accent"
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      flowing ? "animate-pulse-soft bg-accent" : "bg-mist-faint"
                    )}
                  />
                  {flowing ? "flow: on" : "flow: off"}
                </button>
              </div>

              <div
                className={cn("mt-8", flowing && "flow-active")}
                onMouseEnter={() => setFlowing(true)}
              >
                {arch.layers.map((layer, li) => (
                  <div key={li}>
                    <div
                      className={cn(
                        "grid gap-3",
                        layer.length > 1 && "sm:grid-cols-2 lg:grid-cols-4"
                      )}
                    >
                      {layer.map((node) => (
                        <motion.div
                          key={node.id}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: li * 0.12 }}
                          className={cn(
                            "rounded-lg border px-4 py-3 text-center",
                            TONE_STYLES[node.tone ?? "flow"]
                          )}
                        >
                          <p className="text-[13px] font-medium">{node.label}</p>
                        </motion.div>
                      ))}
                    </div>
                    {li < arch.layers.length - 1 && (
                      <div className="flex justify-center py-2" aria-hidden="true">
                        <svg width="2" height="26" className="overflow-visible">
                          <line
                            x1="1" y1="0" x2="1" y2="26"
                            className="flow-line"
                            stroke="#2dd4bf"
                            strokeWidth="1.5"
                            opacity="0.55"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="mt-8 border-t border-line pt-5"
              >
                <p className="font-mono text-[10px] text-mist-faint">
                  <span className="text-accent">//</span> {arch.note}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
