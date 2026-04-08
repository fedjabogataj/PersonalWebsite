import { notFound } from 'next/navigation';
import { getProject, PROJECTS } from '@/lib/projects';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.title} — Fedja Bogataj` };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        {/* Hero */}
        <div className="pt-40 pb-20 px-6 md:px-12 border-b border-white/5">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-white/30 hover:text-white/70 text-sm font-mono tracking-wide transition-colors duration-200 mb-12"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M13 7H1M1 7l6-6M1 7l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back
            </Link>

            <p className="text-white/30 text-xs font-mono tracking-[0.3em] uppercase mb-6">
              {project.number}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              {project.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-white/50 border border-white/10 rounded-full px-4 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_280px] gap-16">
            {/* Description */}
            <div>
              <p className="text-white/30 text-xs font-mono tracking-[0.3em] uppercase mb-6">
                About
              </p>
              <div className="flex flex-col gap-5">
                {project.description.split('\n\n').map((para, i) => (
                  <p key={i} className="text-white/70 text-lg leading-relaxed">{para}</p>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <p className="text-white/30 text-xs font-mono tracking-[0.3em] uppercase mb-6">
                Links
              </p>
              <div className="flex flex-col gap-3">
                {project.links.map((link) => (
                  <div key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="group flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:border-[#9d7ce8]/60 hover:shadow-[0_0_20px_4px_rgba(157,124,232,0.15)]"
                    >
                      <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                        {link.label}
                      </span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-white/30 group-hover:text-white/70 transition-colors">
                        <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    {link.note && (
                      <p className="text-white/25 text-xs mt-2 px-1 leading-relaxed">
                        ⚠ {link.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
