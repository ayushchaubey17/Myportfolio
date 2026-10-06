"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "@/data/site";
import { ButtonLink } from "@/components/ui/button-link";
import { EASE } from "@/lib/motion";

const FLOW_LAYERS: { label: string; sub: string }[][] = [
  [{ label: "Client", sub: "browser / mobile" }],
  [{ label: "Next.js / React", sub: "SSR · RSC" }],
  [{ label: "API Gateway", sub: "auth · routing" }],
  [
    { label: "Identity", sub: "service" },
    { label: "Academic", sub: "service" },
  ],
  [{ label: "MongoDB / MySQL", sub: "data layer" }],
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid mask-fade-b absolute inset-0" aria-hidden="true" />
      <div className="bg-noise absolute inset-0" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="shell relative pb-20 pt-36 sm:pt-44">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-ink-900/80 px-3.5 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs text-mist-dim">
                {profile.availability}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="mt-7 text-4xl font-semibold leading-[1.08] tracking-tight text-mist sm:text-5xl lg:text-[3.4rem]"
            >
              Building reliable software systems,
              <span className="block text-mist-faint">from APIs to full-stack products.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-mist-dim sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.24 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href="#work" variant="primary" size="lg"
                icon={<ArrowDown className="h-4 w-4" aria-hidden="true" />}>
                View Projects
              </ButtonLink>
              <ButtonLink href="/resume" variant="secondary" size="lg"
                icon={<Download className="h-4 w-4" aria-hidden="true" />}>
                Download Resume
              </ButtonLink>
              <ButtonLink href={profile.githubUrl} variant="ghost" size="lg">
                GitHub
              </ButtonLink>
              <ButtonLink href={profile.linkedin} variant="ghost" size="lg">
                LinkedIn
              </ButtonLink>
              <ButtonLink href={`mailto:${profile.email}`} variant="ghost" size="lg"
                icon={<Mail className="h-4 w-4" aria-hidden="true" />}>
                <span className="sr-only">Email</span>
              </ButtonLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.36 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-mist-faint"
            >
              <span>{profile.name}</span>
              <span className="h-3 w-px bg-line-strong" aria-hidden="true" />
              <span>{profile.title}</span>
              <span className="h-3 w-px bg-line-strong" aria-hidden="true" />
              <span>{profile.location}</span>
              <span className="h-3 w-px bg-line-strong" aria-hidden="true" />
              <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent">
                {profile.email}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <ArchitectureFlow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ArchitectureFlow() {
  return (
    <div className="panel card-glow relative p-6">
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist-faint">
          system.flow
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-accent">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent" />
          live
        </span>
      </div>
      <div className="space-y-0">
        {FLOW_LAYERS.map((layer, li) => (
          <div key={li}>
            <div
              className={
                layer.length > 1
                  ? "grid grid-cols-2 gap-3"
                  : ""
              }
            >
              {layer.map((node) => (
                <div
                  key={node.label}
                  className="rounded-lg border border-line bg-ink-850/80 px-4 py-3"
                >
                  <p className="text-[13px] font-medium text-mist">{node.label}</p>
                  <p className="mt-0.5 font-mono text-[10px] text-mist-faint">
                    {node.sub}
                  </p>
                </div>
              ))}
            </div>
            {li < FLOW_LAYERS.length - 1 && (
              <div className="flex justify-center py-1" aria-hidden="true">
                <svg width="2" height="22" className="overflow-visible">
                  <line
                    x1="1" y1="0" x2="1" y2="22"
                    className="flow-line"
                    stroke="#2dd4bf"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-5 border-t border-line pt-4">
        <p className="font-mono text-[10px] leading-relaxed text-mist-faint">
          <span className="text-accent">$</span> request → gateway → service → db
          <span className="ml-2 animate-pulse">▌</span>
        </p>
      </div>
    </div>
  );
}
