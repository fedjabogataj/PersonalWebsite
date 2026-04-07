'use client';

import Aurora from './Aurora';
import BlurText from './BlurText';
import ShinyText from './ShinyText';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col overflow-hidden bg-black">
      {/* Aurora background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={['#3A1C71', '#D76D77', '#FFAF7B']}
          amplitude={1.2}
          blend={0.6}
          speed={0.5}
        />
      </div>

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 md:px-16">
        <span className="text-white/70 text-sm font-mono tracking-widest uppercase">
          Portfolio
        </span>
        <ul className="flex gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero content */}
      <div className="relative z-20 flex flex-1 flex-col items-center justify-center text-center px-6">
        <BlurText
          text="Hi, I'm Your Name"
          animateBy="words"
          direction="top"
          delay={120}
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4"
        />
        <div className="mt-4 mb-8">
          <ShinyText
            text="Developer · Designer · Builder"
            speed={3}
            color="rgba(255,255,255,0.5)"
            shineColor="rgba(255,255,255,0.95)"
            className="text-lg md:text-xl tracking-widest font-light"
          />
        </div>
        <a
          href="#about"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white/80 backdrop-blur-sm hover:bg-white/20 hover:text-white transition-all duration-200"
        >
          Learn more
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1v12M1 7l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-20 flex justify-center pb-8">
        <div className="flex flex-col items-center gap-1 text-white/30 text-xs tracking-widest uppercase">
          <div className="h-12 w-px bg-gradient-to-b from-transparent to-white/30" />
          scroll
        </div>
      </div>
    </section>
  );
}
