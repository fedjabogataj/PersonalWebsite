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
      'My studies focus on two tracks — Machine Learning & Statistics and Big Data & High-Performance Computing — covering advanced regression and classification methods, Deep Learning for Visual Computing, Generative AI, statistical simulation, recommender systems, advanced database systems, GPU architectures, and parallel and data-intensive computing. I have parallelised compute-heavy workloads with OpenMP and written SLURM batch scripts for strong-scaling and scheduling experiments on HPC clusters. This combination equips me with both the theoretical foundations and the practical engineering skills to design, train, and deploy data-driven systems at scale.',
  },
  {
    degree: 'BSc Computer Science',
    school: 'University of Ljubljana',
    period: '2021 — 2024',
    description:
      'My studies included topics such as Computer Architecture, Databases and programming in both C and Java, with a focus on Machine Learning and Computer Vision.',
  },
];

const HACKATHONS = [
  {
    name: 'Teapot — AI Quality Control for Fiber-Optic Trench Documentation',
    event: 'ViennaUp Hackathon 2026',
    period: '2026',
    description:
      'At the ViennaUp Hackathon 2026 I built Teapot, a computer-vision pipeline that screens hundreds of thousands of construction-site images for compliance, automatically verifying cable placement in the trench, trench depth, and on-site safety.',
    tags: ['Python', 'Computer Vision', 'Deep Learning', 'Quality Control'],
    repo: 'https://github.com/fedeaar/teapot',
  },
  {
    name: 'Industrial AI — Learning and Benchmarking Process Logic',
    event: 'Zero One Hack 2026',
    period: '2026',
    description:
      'For the Industrial track of Zero One Hack 2026 I built transformer models that learn semiconductor fab process logic, performing next-step prediction, sequence completion, and anomaly detection across MOSFET, IGBT, and IC families. I trained and benchmarked them on a roughly 120-token vocabulary and thousands of synthetic sequences using Top-k accuracy, MRR, F1, and ROC-AUC, scheduling the training jobs via SLURM on the Leonardo EuroHPC cluster.',
    tags: ['Python', 'Transformers', 'SLURM', 'EuroHPC', 'Benchmarking'],
    repo: 'https://github.com/fedjabogataj/Zero-one-hack-2026',
  },
];

const EXTRACURRICULAR = [
  {
    role: 'Full-member of BEST Vienna',
    org: 'Board of European Students of Technology Vienna',
    period: 'Dec 2025 — present',
    description:
      'I joined BEST Vienna in March 2025, and became a Full member in December 2025. I was Logistics and Fund-raising responsible for beWANTED 2026 a career fair aimed at students at technical universities. I am also the logistics responsible for the BEST Summer Course 2026 in Vienna, a 10-day international event with 40+ participants from all over Europe, where I coordinate the logistics of the event and manage a team of volunteers to ensure everything runs smoothly.',
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

        {/* 4 — Hackathons */}
        <div>
          <SectionLabel>Hackathons</SectionLabel>
          <div className="flex flex-col gap-4">
            {HACKATHONS.map((hack, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 rounded-2xl p-7 bg-white/[0.02] border border-white/8 transition-all duration-300 hover:border-[#9d7ce8]/60 hover:shadow-[0_0_28px_6px_rgba(157,124,232,0.2)]"
              >
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div>
                    <p className="text-white font-medium text-base">{hack.name}</p>
                    <p className="text-white/65 text-sm mt-0.5">{hack.event}</p>
                  </div>
                  <span className="text-white/40 text-sm font-mono shrink-0">{hack.period}</span>
                </div>
                <p className="text-white/65 text-base leading-relaxed">{hack.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {hack.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-white/40 border border-white/10 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {hack.repo && (
                  <a
                    href={hack.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-white/50 hover:text-[#9d7ce8] transition-colors w-fit"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    View repository
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 5 — Extracurricular */}
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
