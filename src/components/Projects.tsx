'use client';

import GradientText from './GradientText';

const PROJECTS = [
  {
    number: '01',
    title: 'Deep Reinforcement Learning for Market Prediction',
    description:
      'Trained a deep RL agent to predict and act on financial market data, applying advanced reinforcement learning techniques to time-series forecasting.',
    tags: ['Python', 'Reinforcement Learning', 'Deep Learning'],
    href: '#',
  },
  {
    number: '02',
    title: 'Notepilot',
    description:
      'An AI-powered notetaking app that helps users capture, organise, and retrieve information using RAG and LLM-based summarisation.',
    tags: ['Next.js', 'RAG', 'ChromaDB', 'TypeScript'],
    href: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <GradientText
              colors={['#3A1C71', '#D76D77', '#FFAF7B', '#3A1C71']}
              animationSpeed={6}
              className="text-xs tracking-[0.3em] uppercase mb-4 font-mono"
            >
              Selected Work
            </GradientText>
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-snug">
              Things I&apos;ve built.
            </h2>
          </div>
          <a
            href="https://github.com/fedjabogataj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/40 hover:text-white transition-colors duration-200 flex items-center gap-2"
          >
            All projects
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="flex flex-col divide-y divide-white/5">
          {PROJECTS.map((project) => (
            <a
              key={project.number}
              href={project.href}
              className="group grid md:grid-cols-[3rem_1fr_auto] items-start gap-6 py-10 hover:opacity-80 transition-opacity duration-200"
            >
              <span className="text-white/15 text-xs font-mono pt-1">{project.number}</span>
              <div>
                <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-white/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed max-w-lg">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:justify-end pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-white/25 border border-white/8 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
