'use client';

import GradientText from './GradientText';

const SKILLS = [
  'TypeScript', 'React', 'Next.js', 'Node.js',
  'Python', 'PostgreSQL', 'Docker', 'AWS',
];

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-32 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <GradientText
          colors={['#3A1C71', '#D76D77', '#FFAF7B', '#3A1C71']}
          animationSpeed={6}
          className="text-xs tracking-[0.3em] uppercase mb-6 font-mono"
        >
          About Me
        </GradientText>

        <p className="text-3xl md:text-4xl font-light text-white/90 leading-relaxed mb-12">
          I build thoughtful digital experiences — from concept to code.
        </p>

        <p className="text-white/50 text-lg leading-relaxed mb-16 max-w-2xl">
          I&apos;m a software developer passionate about crafting clean, performant, and
          beautiful products. I care deeply about the details — both in user experience
          and in the underlying architecture.
        </p>

        <div>
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6 font-mono">
            Technologies
          </p>
          <ul className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 hover:border-white/30 hover:text-white/90 transition-colors duration-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
