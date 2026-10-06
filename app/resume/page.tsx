import type { Metadata } from "next";
import { Download, Mail, Phone } from "lucide-react";
import {
  achievements,
  experience,
  profile,
  skillGroups,
  projects,
} from "@/data/site";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Resume — Ayush Kumar",
  description:
    "Resume of Ayush Kumar, Java Backend & MERN Developer. Experience, projects, skills and education.",
};

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="shell pb-24 pt-32">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="eyebrow">Resume</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-mist">
              Ayush Kumar — {profile.title}
            </h1>
          </div>
          <a
            href="/Ayush_Kumar_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-accent-dim"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download PDF
          </a>
        </div>

        <article className="print-page panel p-8 sm:p-10">
          {/* header */}
          <header className="border-b border-line pb-6">
            <h2 className="text-2xl font-bold text-mist">{profile.name}</h2>
            <p className="mt-1 text-sm text-mist-dim">
              {profile.title} · {profile.location}
            </p>
            <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-mist-dim">
              <span className="inline-flex items-center gap-1.5">
                <Mail className="h-3 w-3" aria-hidden="true" />
                {profile.email}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-3 w-3" aria-hidden="true" />
                {profile.phone}
              </span>
              <span>github.com/{profile.github}</span>
            </p>
          </header>

          {/* summary */}
          <Section title="Summary">
            <p className="text-sm leading-relaxed text-mist-dim">{profile.about[0]}</p>
          </Section>

          {/* experience */}
          <Section title="Experience">
            {experience
              .filter((e) => e.kind === "work")
              .map((e) => (
                <div key={e.id} className="mb-5 last:mb-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-[15px] font-semibold text-mist">{e.role}</h3>
                    <span className="font-mono text-xs text-mist-faint">{e.period}</span>
                  </div>
                  <p className="text-sm text-accent">{e.org}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-mist-dim">
                    {e.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </Section>

          {/* projects */}
          <Section title="Projects">
            {projects.map((p) => (
              <div key={p.slug} className="mb-5 last:mb-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-[15px] font-semibold text-mist">{p.title}</h3>
                  {p.links[0] && (
                    <a
                      href={p.links[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-accent hover:underline"
                    >
                      {p.links[0].href.replace(/^https?:\/\//, "")}
                    </a>
                  )}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-mist-dim">{p.summary}</p>
                <p className="mt-1.5 font-mono text-xs text-mist-faint">
                  {p.stack.join(" · ")}
                </p>
              </div>
            ))}
          </Section>

          {/* skills */}
          <Section title="Skills">
            <div className="space-y-2">
              {skillGroups.map((g) => (
                <p key={g.id} className="text-sm text-mist-dim">
                  <span className="inline-block w-24 font-medium text-mist">{g.label}:</span>
                  {g.skills.join(", ")}
                </p>
              ))}
            </div>
          </Section>

          {/* achievements */}
          <Section title="Certifications & Practice">
            <ul className="list-disc space-y-1 pl-5 text-sm text-mist-dim">
              {achievements.map((a) => (
                <li key={a.id}>
                  {a.label} — {a.detail}
                </li>
              ))}
            </ul>
          </Section>

          {/* education */}
          <Section title="Education">
            {experience
              .filter((e) => e.kind === "education")
              .map((e) => (
                <div key={e.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-[15px] font-semibold text-mist">{e.role}</h3>
                    <span className="font-mono text-xs text-mist-faint">{e.period}</span>
                  </div>
                  <p className="text-sm text-accent">{e.org}</p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-mist-dim">
                    {e.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </Section>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-7">
      <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent print-keep">
        {title}
      </h2>
      {children}
    </section>
  );
}
