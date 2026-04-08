'use client';

import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      style={{
        paddingTop: scrolled ? '16px' : '0',
        transition: 'padding-top 0.4s ease',
      }}
    >
      <nav
        style={{
          transition: 'max-width 0.4s ease, border-radius 0.4s ease, background 0.4s ease, border-color 0.4s ease, padding 0.4s ease, backdrop-filter 0.4s ease',
          width: '100%',
          maxWidth: scrolled ? '320px' : '1536px',
          borderRadius: scrolled ? '9999px' : '0px',
          background: scrolled ? 'rgba(255,255,255,0.06)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          border: `1px solid ${scrolled ? 'rgba(255,255,255,0.12)' : 'transparent'}`,
          padding: scrolled ? '10px 28px' : '20px 48px',
          justifyContent: 'space-between',
        }}
        className="flex items-center gap-8"
      >
        <a
          href="/"
          className="text-white font-semibold tracking-tight"
          style={{ fontFamily: 'Clash Display, sans-serif' }}
        >
          FB
        </a>
        <ul className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/50 hover:text-white text-sm tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
