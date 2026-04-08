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
          {PROJECTS.map((project) => (
            <a
              key={project.number}
              href={project.href}
              className="group flex flex-col gap-4 rounded-2xl p-7 bg-white/[0.02] border border-white/8 transition-all duration-300 hover:border-[#9d7ce8]/60 hover:shadow-[0_0_28px_6px_rgba(157,124,232,0.2)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="text-white/25 text-xs font-mono mb-3 block">{project.number}</span>
                  <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-white/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/65 text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-white/40 border border-white/10 rounded-full px-3 py-1"
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
