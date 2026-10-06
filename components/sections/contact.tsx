"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { profile } from "@/data/site";
import { ButtonLink } from "@/components/ui/button-link";
import { EASE } from "@/lib/motion";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-line">
      <div className="bg-grid mask-fade-b absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 h-[300px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]"
        aria-hidden="true"
      />

      <div className="shell relative py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">
            <span className="text-accent">08</span>
            <span className="mx-3 inline-block h-px w-8 bg-line-strong align-middle" aria-hidden="true" />
            Contact
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-mist sm:text-5xl">
            Have a system worth building?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist-dim">
            I'm interested in backend engineering, full-stack applications and
            solving complex product problems.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink
              href={`mailto:${profile.email}`}
              variant="primary"
              size="lg"
              icon={<Mail className="h-4 w-4" aria-hidden="true" />}
            >
              Email Me
            </ButtonLink>
            <ButtonLink href={profile.githubUrl} variant="secondary" size="lg">
              GitHub
            </ButtonLink>
            <ButtonLink href={profile.linkedin} variant="secondary" size="lg">
              LinkedIn
            </ButtonLink>
            <ButtonLink href="/resume" variant="secondary" size="lg"
              icon={<Download className="h-4 w-4" aria-hidden="true" />}>
              Download Resume
            </ButtonLink>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs text-mist-faint">
            <a
              href={`mailto:${profile.email}`}
              className="transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
            <span aria-hidden="true">·</span>
            <a href={`tel:${profile.phone.replace(/-/g, "")}`} className="transition-colors hover:text-accent">
              {profile.phone}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              @{profile.github}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
