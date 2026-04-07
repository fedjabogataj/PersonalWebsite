'use client';

import ShinyText from './ShinyText';

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-32 px-6 md:px-16 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-white/30 text-xs tracking-widest uppercase mb-8 font-mono">
          Get in touch
        </p>
        <h2 className="text-4xl md:text-6xl font-light text-white/90 leading-tight mb-8">
          Let&apos;s work together.
        </h2>
        <p className="text-white/40 text-lg mb-12 max-w-lg mx-auto">
          I&apos;m always open to new opportunities, collaborations, or just a good conversation.
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-block text-2xl md:text-3xl font-light hover:text-white/70 transition-colors duration-200"
        >
          <ShinyText
            text="hello@example.com"
            speed={2.5}
            color="rgba(255,255,255,0.7)"
            shineColor="rgba(255,255,255,1)"
            className="text-2xl md:text-3xl font-light"
          />
        </a>

        <div className="flex justify-center gap-6 mt-16">
          {[
            { label: 'GitHub', href: 'https://github.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com' },
            { label: 'Twitter', href: 'https://twitter.com' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/70 text-sm tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-32 pt-8 border-t border-white/5 text-center text-white/20 text-xs font-mono">
        © {new Date().getFullYear()} · Built with Next.js & ReactBits
      </div>
    </section>
  );
}
