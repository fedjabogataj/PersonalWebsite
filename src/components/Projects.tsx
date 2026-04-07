'use client';

import GradientText from './GradientText';

const PROJECTS = [
  {
    title: 'Project One',
    description: 'A short description of what this project does and the problem it solves.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    href: '#',
  },
  {
    title: 'Project Two',
    description: 'A short description of what this project does and the problem it solves.',
    tags: ['React', 'Node.js', 'Docker'],
    href: '#',
  },
  {
    title: 'Project Three',
    description: 'A short description of what this project does and the problem it solves.',
    tags: ['Python', 'FastAPI', 'AWS'],
    href: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-32 px-6 md:px-16 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <GradientText
          colors={['#3A1C71', '#D76D77', '#FFAF7B', '#3A1C71']}
          animationSpeed={6}
          className="text-xs tracking-[0.3em] uppercase mb-6 font-mono"
        >
          Selected Work
        </GradientText>

        <p className="text-3xl md:text-4xl font-light text-white/90 leading-relaxed mb-16">
          Things I&apos;ve built.
        </p>

        <div className="flex flex-col gap-px bg-white/5 rounded-2xl overflow-hidden">
          {PROJECTS.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group flex flex-col md:flex-row md:items-center justify-between gap-4 bg-black hover:bg-white/5 transition-colors duration-200 px-8 py-8"
            >
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white/90 group-hover:text-white transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-md">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-white/30 border border-white/10 rounded-full px-3 py-1"
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
