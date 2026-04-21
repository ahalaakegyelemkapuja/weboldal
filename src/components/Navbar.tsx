import { useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { getNormalizedPath, isRouteHref, navigateToPath } from '../navigation.ts';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isWeddingPage = getNormalizedPath() === '/eskuvo';

  const links = isWeddingPage
    ? [
        { href: '#ceremonia', label: 'Ceremónia' },
        { href: '#folyamat', label: 'Folyamat' },
        { href: '#video', label: 'Videó' },
        { href: '#dijazas', label: 'Díjazás' },
        { href: '#kapcsolat', label: 'Kapcsolat' },
        { href: '/', label: 'Búcsúztatás' },
      ]
    : [
        { href: '#folyamat', label: 'Útmutató' },
        { href: '#szolgaltatasok', label: 'Szolgáltatások' },
        { href: '#visszajelzesek', label: 'Visszajelzések' },
        { href: '#dijazas', label: 'Díjazás' },
        { href: '#kapcsolat', label: 'Kapcsolat' },
        { href: '/eskuvo', label: 'Esküvő' },
      ];

  const brandColor = scrolled ? 'var(--color-charcoal)' : 'white';
  const subtitleColor = scrolled ? 'var(--color-stone)' : 'rgba(255,255,255,0.82)';
  const navLinkColor = scrolled ? 'var(--color-stone-dark)' : 'white';
  const menuIconColor = scrolled ? 'var(--color-charcoal)' : 'white';
  const topTextShadow = scrolled ? 'none' : '0 1px 10px rgba(0, 0, 0, 0.18)';
  const logoSize = 38; // adjust this number to line up the logo with the header text
  const logoFilter = scrolled ? 'none' : 'invert(1)';

  const handleLinkClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isRouteHref(href)) {
      setMenuOpen(false);
      return;
    }

    event.preventDefault();
    setMenuOpen(false);
    navigateToPath(href);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(250, 247, 242, 0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(184, 151, 90, 0.15)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(58, 53, 48, 0.06)' : 'none',
      }}
    >
      <div className="relative max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <a href={isWeddingPage ? '/eskuvo' : '/'} className="flex items-center gap-3 leading-none min-w-0" onClick={handleLinkClick(isWeddingPage ? '/eskuvo' : '/')}>
          <img
            src="/logos/aniko-logo.svg"
            alt="Kovács Anikó"
            style={{
              width: `${logoSize}px`,
              height: 'auto',
              filter: logoFilter,
              transition: 'filter 0.2s ease',
              marginTop: '5px',
            }}
          />
          <div className="desktop-brand-text hidden md:flex flex-col items-start">
            <span
              className="block font-serif text-xl md:text-2xl m-0 p-0"
              style={{ color: brandColor, fontWeight: 400, letterSpacing: '0.02em', textShadow: topTextShadow }}
            >
              Szertartások
            </span>
            <span
              className="block font-sans tracking-widest uppercase"
              style={{ color: subtitleColor, fontWeight: 300, textShadow: topTextShadow, fontSize: '0.53rem', letterSpacing: '0.20em', marginTop: '0.05rem' }}
            >
              Szeretetteljes Kedvességben
            </span>
          </div>
        </a>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center md:hidden pointer-events-none">
          <span
            className="block font-serif text-xl m-0 p-0"
            style={{ color: brandColor, fontWeight: 400, letterSpacing: '0.02em', textShadow: topTextShadow }}
          >
            Szertartások
          </span>
          <span
            className="block font-sans tracking-widest uppercase"
            style={{ color: subtitleColor, fontWeight: 300, textShadow: topTextShadow, fontSize: '0.53rem', letterSpacing: '0.20em', marginTop: '0.05rem' }}
          >
            Szeretetteljes Kedvességben
          </span>
        </div>

        <div className="hidden md:flex items-center gap-7">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm tracking-wide transition-colors duration-200"
              style={{ color: navLinkColor, fontWeight: 300, textShadow: topTextShadow }}
              onClick={handleLinkClick(link.href)}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = navLinkColor)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kapcsolat"
            className="font-sans text-sm px-5 py-2 transition-all duration-200"
            style={{
              backgroundColor: isWeddingPage ? 'var(--color-dusty-rose)' : 'var(--color-sage)',
              color: 'white',
              borderRadius: '2px',
              letterSpacing: '0.05em',
              fontWeight: 400,
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = isWeddingPage ? '#ad8580' : 'var(--color-sage-dark)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = isWeddingPage ? 'var(--color-dusty-rose)' : 'var(--color-sage)')}
          >
            Megkeresés
          </a>
        </div>

        <button
          className="absolute right-6 md:static md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              backgroundColor: menuIconColor,
              transform: menuOpen ? 'rotate(45deg) translateY(4px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              backgroundColor: menuIconColor,
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              backgroundColor: menuIconColor,
              transform: menuOpen ? 'rotate(-45deg) translateY(-4px)' : 'none',
            }}
          />
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pt-4 pb-6 flex flex-col gap-4"
          style={{
            backgroundColor: scrolled ? 'rgba(250, 247, 242, 0.97)' : 'rgba(255, 255, 255, 0.08)',
            backdropFilter: scrolled ? 'none' : 'blur(12px)',
          }}
        >
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm py-2 border-b"
              style={{
                color: scrolled ? 'var(--color-charcoal)' : 'white',
                borderColor: scrolled ? 'var(--color-stone-light)' : 'rgba(255, 255, 255, 0.18)',
                fontWeight: 300,
              }}
              onClick={event => {
                handleLinkClick(link.href)(event);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
