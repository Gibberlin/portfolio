'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  topics: string[];
  created_at: string;
  updated_at: string;
  visibility: string;
  fork: boolean;
}

type GitHubRepoDetails = {
  forks_count: number;
  open_issues_count: number;
  license: { spdx_id: string | null } | null;
  language: string | null;
  updated_at: string;
  description: string | null;
};

interface ProjectModalProps {
  repo: GitHubRepo | null;
  isOpen: boolean;
  onClose: () => void;
}

function formatRelativeDays(dateString: string) {
  const updated = new Date(dateString).getTime();
  const now = Date.now();
  const days = Math.max(0, Math.floor((now - updated) / (1000 * 60 * 60 * 24)));
  if (days <= 0) return "today";
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
}

export function ProjectModal({ repo, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const [details, setDetails] = useState<GitHubRepoDetails | null>(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const repoName = repo?.name ?? "";

  useEffect(() => {
    if (!isOpen || !repo) {
      setDetails(null);
      setDetailsLoading(false);
      setDetailsError(false);
      return;
    }

    const controller = new AbortController();
    setDetailsLoading(true);
    setDetailsError(false);

    void (async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/Gibberlin/${encodeURIComponent(repo.name)}`, {
          signal: controller.signal,
          headers: { Accept: "application/vnd.github+json" },
        });
        if (!response.ok) {
          throw new Error("Failed to load repo details");
        }
        const data = await response.json();
        setDetails({
          forks_count: data.forks_count ?? 0,
          open_issues_count: data.open_issues_count ?? 0,
          license: data.license ?? null,
          language: data.language ?? null,
          updated_at: data.updated_at ?? repo.updated_at,
          description: data.description ?? repo.description ?? null,
        });
      } catch {
        setDetails(null);
        setDetailsError(true);
      } finally {
        setDetailsLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [isOpen, repoName]);

  if (!repo) return null;

  const description = details?.description ?? repo.description ?? "";
  const forks = details?.forks_count ?? 0;
  const issues = details?.open_issues_count ?? 0;
  const language = details?.language ?? repo.language ?? null;
  const updatedAt = details?.updated_at ?? repo.updated_at;
  const spdx = details?.license?.spdx_id;
  const licenseLabel = spdx && spdx !== "NOASSERTION" ? spdx : "No license";

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 20 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={e => e.stopPropagation()}
            className="terminal-panel w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="terminal-panel-inner">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="surface-copy-muted text-[0.68rem] uppercase tracking-[0.16em] sm:text-xs sm:tracking-[0.24em]">
                    {detailsLoading ? "Fetching intel…" : "Project intel"}
                  </p>
                  <h2 className="mt-2 break-words text-xl font-bold tracking-[0.04em] text-[var(--text-color)] sm:text-3xl sm:tracking-[0.08em]">
                    📦 {repo.name}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="shrink-0 rounded border-2 border-[var(--border-color)] bg-[color-mix(in_srgb,var(--card-bg)_86%,transparent)] px-3 py-2 text-sm font-bold text-[var(--text-color)] transition-transform duration-150 ease-out hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
                >
                  ✕ Close
                </button>
              </div>

              <p className="surface-copy mt-4 text-sm leading-relaxed sm:max-w-[58ch] sm:text-base">
                “{description || "No description yet"}”
              </p>
              {detailsLoading ? (
                <p className="surface-copy-muted mt-2 text-xs uppercase tracking-[0.16em]">
                  Syncing latest repository stats…
                </p>
              ) : null}
              {detailsError ? (
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent-secondary)]">
                  Live details unavailable. Showing cached overview.
                </p>
              ) : null}

              <div className="mt-6 border-t-4 border-[var(--border-color)] pt-4 sm:pt-5">
                <div className="grid grid-cols-1 gap-1.5 text-sm font-semibold text-[var(--text-color)] sm:flex sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>🍴 {forks}</span>
                  <span>🐛 {issues} open issues</span>
                </div>

                <div className="mt-3 text-sm leading-relaxed text-[var(--text-color)]">
                  <span className="font-semibold">Language:</span>{" "}
                  <span className="surface-copy">{language || "Unknown"}</span>
                  <span className="mx-1.5 surface-copy-muted sm:mx-2">|</span>
                  <span className="font-semibold">{licenseLabel}</span>
                </div>

                <div className="mt-2 text-sm text-[var(--muted-text)]">
                  Last updated: {formatRelativeDays(updatedAt)}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 border-4 border-[var(--border-color)] bg-[var(--accent-primary)] px-4 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-black transition-transform duration-150 ease-out hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
                >
                  View on GitHub →
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex flex-1 items-center justify-center gap-2 border-4 border-[var(--border-color)] bg-transparent px-4 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--text-color)] transition-transform duration-150 ease-out hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
