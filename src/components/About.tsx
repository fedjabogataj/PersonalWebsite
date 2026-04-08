'use client';

import GradientText from './GradientText';

const EXPERIENCE = [
  {
    role: 'Full Stack Developer',
    company: 'SRC d.o.o.',
    period: 'Oct 2024 — Mar 2025',
    description:
      'Built an end-to-end document management app for internal and cross-enterprise document sharing and signing. Designed the architecture, containerised with Docker, deployed on Azure, and integrated Active Directory SSO.',
  },
  {
    role: 'Software Engineer',
    company: 'SRC d.o.o.',
    period: 'Jul 2023 — Oct 2024',
    description:
      'Worked across the full stack (Vue.js + C#) on a Visitor Management System. Implemented camera-based sign-on, an interactive map widget, SMS/email notifications, and Google & Apple Wallet integration for digital visitor passes.',
  },
  {
    role: 'Application Tester',
    company: 'SRC d.o.o.',
    period: 'Aug 2022',
    description:
      'Performed various types of application testing, primarily using SoapUI.',
  },
];

const EDUCATION = [
  {
    degree: 'MSc Data Science',
    school: 'TU Vienna',
    period: 'Mar 2025 — present',
    description: 'ML & Statistics + Big Data & High-Performance Computing tracks.',
  },
  {
    degree: 'BSc Computer Science',
    school: 'University of Ljubljana',
    period: '2021 — 2024',
    description: 'Focus on Machine Learning and Computer Vision.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <GradientText
            colors={['#3A1C71', '#D76D77', '#FFAF7B', '#3A1C71']}
            animationSpeed={6}
            className="text-xs tracking-[0.3em] uppercase mb-6 font-mono"
          >
            About Me
          </GradientText>
          <p className="text-4xl md:text-5xl font-semibold text-white leading-snug max-w-3xl">
            I turn data and ideas into{' '}
            <span className="text-white/35">products people actually use.</span>
          </p>
        </div>

        {/* Bio + Experience */}
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 mb-20">
          {/* Bio */}
          <div>
            <p className="text-white/50 text-base leading-relaxed mb-6">
              I&apos;m a full-stack developer and data science student based in Vienna, currently
              pursuing my Master&apos;s at TU Vienna. I enjoy working across the entire stack —
              from architecting backends to crafting clean interfaces.
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-6">
              My ML focus covers computer vision, RAG systems, and reinforcement learning. Outside
              of tech I&apos;m involved with the Board of European Students of Technology Vienna,
              where I help organise events across Europe.
            </p>
            <div className="flex flex-wrap gap-4 mt-2 text-xs text-white/30 font-mono">
              <span>🇸🇮 Slovenian</span>
              <span>🇬🇧 English C1</span>
              <span>🇩🇪 German B1</span>
            </div>
          </div>

          {/* Experience cards */}
          <div className="flex flex-col gap-3">
            {EXPERIENCE.map((exp, i) => (
              <div
                key={i}
                className="flex flex-col gap-1 border border-white/5 rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-200"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <p className="text-white font-medium text-sm">{exp.role}</p>
                    <p className="text-white/35 text-xs mt-0.5">{exp.company}</p>
                  </div>
                  <span className="text-white/20 text-xs font-mono shrink-0">{exp.period}</span>
                </div>
                <p className="text-white/35 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <p className="text-white/20 text-xs tracking-[0.3em] uppercase mb-6 font-mono">Education</p>
          <div className="grid md:grid-cols-2 gap-3">
            {EDUCATION.map((edu, i) => (
              <div
                key={i}
                className="flex flex-col gap-1 border border-white/5 rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-200"
              >
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div>
                    <p className="text-white font-medium text-sm">{edu.degree}</p>
                    <p className="text-white/35 text-xs mt-0.5">{edu.school}</p>
                  </div>
                  <span className="text-white/20 text-xs font-mono shrink-0">{edu.period}</span>
                </div>
                <p className="text-white/35 text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
