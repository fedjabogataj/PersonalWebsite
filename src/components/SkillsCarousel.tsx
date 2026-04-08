'use client';

const SKILLS = [
  'Python', 'C#', 'Java', 'C', 'R',
  'Next.js', 'Vue.js', '.NET', 'Java EE',
  'PostgreSQL', 'ChromaDB', 'Supabase',
  'Azure', 'Docker',
  'Computer Vision', 'RAG', 'Reinforcement Learning',
];

const ITEMS = [...SKILLS, ...SKILLS];

export default function SkillsCarousel() {
  return (
    <div className="bg-black py-14 border-y border-white/5 overflow-hidden">
      <div className="flex w-max animate-marquee gap-12 items-center">
        {ITEMS.map((skill, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap">
            <span className="text-white/60 text-sm tracking-widest uppercase font-mono hover:text-white/60 transition-colors duration-200 cursor-default">
              {skill}
            </span>
            <span className="text-white/30 text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
