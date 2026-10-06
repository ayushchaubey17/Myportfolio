import { profile } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-950">
      <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-mist">{profile.name}</p>
          <p className="mt-0.5 text-sm text-mist-dim">{profile.title}</p>
        </div>
        <div className="flex items-center gap-5 text-sm text-mist-dim">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-accent"
          >
            Email
          </a>
        </div>
        <p className="font-mono text-xs text-mist-faint">
          Built with Next.js + TypeScript
        </p>
      </div>
    </footer>
  );
}
