'use client';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/fedjabogataj' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fedja-bogataj-71415b30a' },
];

const SPINNING_TEXT = "Let's Talk • Let's Talk • Let's Talk • ";
// color scheme: iridescence steel blue #809acc

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-16">
          {/* Left: text */}
          <div className="max-w-xl">
            <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-6 font-mono">
              Get in touch
            </p>
            <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-8">
              Let&apos;s build something great together.
            </h2>
            <a
              href="mailto:fedja.bogataj@gmail.com"
              className="text-white/50 text-lg hover:text-white transition-colors duration-200 border-b border-white/10 hover:border-white/40 pb-0.5"
            >
              fedja.bogataj@gmail.com
            </a>

            <div className="flex gap-6 mt-12">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/25 hover:text-white text-sm tracking-wide transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: spinning circle CTA */}
          <div className="relative flex-shrink-0 w-40 h-40">
            {/* Spinning text */}
            <svg
              viewBox="0 0 160 160"
              className="w-full h-full animate-spin-slow"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="circle-path"
                  d="M 80,80 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                />
              </defs>
              <text className="fill-white/30 text-[11px]" style={{ fontSize: 11, fontFamily: 'monospace', letterSpacing: '0.18em' }}>
                <textPath href="#circle-path">{SPINNING_TEXT}</textPath>
              </text>
            </svg>
            {/* Center arrow */}
            <a
              href="mailto:fedja.bogataj@gmail.com"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 15L15 3M15 3H7M15 3v8" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/5 flex justify-between items-center text-white/15 text-xs font-mono">
        <span>Fedja Bogataj</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </section>
  );
}
