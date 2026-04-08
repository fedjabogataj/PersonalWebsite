'use client';

import Iridescence from './Iridescence';
import BlurText from './BlurText';
import ShinyText from './ShinyText';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col overflow-hidden bg-black">
      {/* Iridescence background */}
      <div className="absolute inset-0 z-0">
        <Iridescence
  color={[0.5,0.6,0.8]}
  mouseReact
  amplitude={0.1}
  speed={1}
/>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

      {/* Hero content */}
      <div className="relative z-20 flex flex-1 flex-col items-center justify-center text-center px-6">
        <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-8 font-mono">
          Vienna, Austria
        </p>

        <BlurText
          text="Hi, I'm Fedja Bogataj"
          animateBy="words"
          direction="top"
          delay={120}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
        />

        <div className="mb-10">
          <ShinyText
            text="Full-stack Developer · Data Science Student"
            speed={3}
            color="rgba(255,255,255,0.45)"
            shineColor="rgba(255,255,255,0.95)"
            className="text-lg md:text-xl tracking-widest font-light"
          />
        </div>

        <p className="text-white/30 text-sm md:text-base max-w-md leading-relaxed mb-10">
          I build full-stack applications and data-driven systems — from clean interfaces to ML pipelines.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors duration-200"
          >
            My CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-20 flex justify-center pb-8">
        <div className="flex flex-col items-center gap-2 text-white/20 text-xs tracking-widest uppercase">
          <div className="h-10 w-px bg-gradient-to-b from-transparent to-white/20" />
          scroll
        </div>
      </div>
    </section>
  );
}
