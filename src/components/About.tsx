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
    school: 'Technical University of Vienna',
    period: 'Mar 2025 — present',
    description:
      'Focused on the Machine Learning & Statistics and Big Data & High-Performance Computing tracks. Topics include advanced regression, ML, statistical simulation, recommender systems, parallel computing, GPU architectures, and HPC.',
  },
  {
    degree: 'BSc Computer Science',
    school: 'University of Ljubljana',
    period: '2021 — 2024',
    description:
      'Covered Computer Architecture, Databases, and programming in C and Java, with a focus on Machine Learning and Computer Vision.',
  },
];

const EXTRACURRICULAR = [
  {
    role: 'Logistics Responsible',
    org: 'Board of European Students of Technology Vienna',
    period: 'Dec 2025 — present',
    description:
      'Full member of BEST Vienna. Logistics responsible for beWANTED 2026 and Summer Course 2026 — two international student events organised across Europe.',
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <GradientText
      colors={['#6b4fc8', '#9d7ce8', '#c4a8f0', '#6b4fc8']}
      animationSpeed={6}
      className="text-sm tracking-[0.3em] uppercase mb-8 font-mono"
    >
      {children}
    </GradientText>
  );
}

function Card({ left, right, description }: {
  left: React.ReactNode;
  right: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl p-7 bg-white/[0.02] border border-white/8 transition-all duration-300 hover:border-[#9d7ce8]/60 hover:shadow-[0_0_28px_6px_rgba(157,124,232,0.2)]">
      <div className="flex items-start justify-between gap-4 mb-1">
        {left}
        <span className="text-white/40 text-sm font-mono shrink-0">{right}</span>
      </div>
      <p className="text-white/65 text-base leading-relaxed">{description}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-24">

        {/* 1 — About Me */}
        <div>
          <SectionLabel>About Me</SectionLabel>
          <p className="text-4xl md:text-5xl font-semibold text-white leading-snug max-w-3xl mb-10">
            I turn data and ideas into{' '}
            <span className="text-white/55">products people actually use.</span>
          </p>
          <p className="text-white/75 text-lg leading-relaxed mb-5 max-w-2xl">
            I&apos;m a full-stack developer and data science student based in Vienna, currently
            pursuing my Master&apos;s at TU Vienna. I enjoy working across the entire stack —
            from architecting backends to crafting clean interfaces.
          </p>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl mb-8">
            My ML focus covers computer vision, RAG systems, and reinforcement learning. Outside
            of tech I&apos;m involved with the Board of European Students of Technology, where I
            help organise international events across Europe.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/30 font-mono">
            <span>🇸🇮 Slovenian</span>
            <span>🇬🇧 English C1</span>
            <span>🇩🇪 German B1</span>
          </div>
        </div>

        {/* 2 — Work Experience */}
        <div>
          <SectionLabel>Work Experience</SectionLabel>
          <div className="flex flex-col gap-4">
            {EXPERIENCE.map((exp, i) => (
              <Card
                key={i}
                left={
                  <div>
                    <p className="text-white font-medium text-base">{exp.role}</p>
                    <p className="text-white/65 text-sm mt-0.5">{exp.company}</p>
                  </div>
                }
                right={exp.period}
                description={exp.description}
              />
            ))}
          </div>
        </div>

        {/* 3 — Education */}
        <div>
          <SectionLabel>Education</SectionLabel>
          <div className="flex flex-col gap-4">
            {EDUCATION.map((edu, i) => (
              <Card
                key={i}
                left={
                  <div>
                    <p className="text-white font-medium text-base">{edu.degree}</p>
                    <p className="text-white/65 text-sm mt-0.5">{edu.school}</p>
                  </div>
                }
                right={edu.period}
                description={edu.description}
              />
            ))}
          </div>
        </div>

        {/* 4 — Extracurricular */}
        <div>
          <SectionLabel>Extracurricular Activities</SectionLabel>
          <div className="flex flex-col gap-4">
            {EXTRACURRICULAR.map((item, i) => (
              <Card
                key={i}
                left={
                  <div>
                    <p className="text-white font-medium text-base">{item.role}</p>
                    <p className="text-white/65 text-sm mt-0.5">{item.org}</p>
                  </div>
                }
                right={item.period}
                description={item.description}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
