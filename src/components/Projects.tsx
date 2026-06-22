'use client';

import GradientText from './GradientText';
import { PROJECTS } from '@/lib/projects';

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div className="w-full text-center">
            <GradientText
              colors={['#6b4fc8', '#9d7ce8', '#c4a8f0', '#6b4fc8']}
              animationSpeed={6}
              className="text-sm tracking-[0.3em] uppercase mb-8 font-mono"
            >
              Selected Work
            </GradientText>
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-snug text-center">
              Things I&apos;ve built.
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {PROJECTS.map((project) => {
            const repo = project.links.find((l) => l.href.includes('github.com'));
            return (
              <div
                key={project.number}
                className="group relative flex flex-col gap-4 rounded-2xl p-7 bg-white/[0.02] border border-white/8 transition-all duration-300 hover:border-[#9d7ce8]/60 hover:shadow-[0_0_28px_6px_rgba(157,124,232,0.2)]"
              >
                {/* Stretched link — makes the whole card navigate to the detail page */}
                <a
                  href={`/projects/${project.slug}`}
                  aria-label={project.title.trim()}
                  className="absolute inset-0 z-0 rounded-2xl"
                />
                <div className="relative z-[1] flex items-start justify-between gap-4 pointer-events-none">
                  <div className="flex-1">
                    <span className="text-white/25 text-xs font-mono mb-3 block">{project.number}</span>
                    <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-white/80 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/65 text-base leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 12 12" fill="none" className="text-white/20 shrink-0 mt-1 group-hover:text-white/50 transition-colors duration-300">
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="relative z-[1] flex flex-wrap gap-2 pointer-events-none">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-white/40 border border-white/10 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {repo && (
                  <a
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-[1] mt-1 inline-flex w-fit items-center gap-2 text-sm text-white/50 hover:text-[#9d7ce8] transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    View repository
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
