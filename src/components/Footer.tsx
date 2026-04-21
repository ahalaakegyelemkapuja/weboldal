import type { MouseEvent } from 'react';
import { getNormalizedPath, isRouteHref, navigateToPath } from '../navigation.ts';

export default function Footer() {
  const isWeddingPage = getNormalizedPath() === '/eskuvo';

  const navLinks = isWeddingPage
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
        { href: '/eskuvo', label: 'Esküvői oldal' },
      ];

  const handleLinkClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isRouteHref(href)) {
      return;
    }

    event.preventDefault();
    navigateToPath(href);
  };

  return (
    <footer
      className="py-12 px-6"
      style={{
        backgroundColor: 'var(--color-charcoal)',
        borderTop: '1px solid rgba(184, 151, 90, 0.2)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10 items-stretch">
          <div className="footer-meta">
            <p
              className="font-sans text-xs tracking-widest uppercase mb-5"
              style={{ color: 'var(--color-gold)', fontWeight: 400, margin: 0 }}
            >
              {isWeddingPage ? 'Esküvői ceremónia' : 'Szertartások Szeretetteljes Kedvességben'}
            </p>
            <div className="footer-meta-bottom" style={{ marginTop: 'auto' }}>
              <p
                className="font-sans text-sm"
                style={{ color: 'var(--color-stone-light)', fontWeight: 300, lineHeight: 1.8, margin: 0 }}
              >
                Kovács Anikó
              </p>
              <p
                className="font-sans text-sm"
                style={{ color: 'var(--color-stone-light)', fontWeight: 300, lineHeight: 1.8, margin: 0 }}
              >
                {isWeddingPage ? (
                  'Esküvői szertartásvezető.'
                ) : (
                  <>
                    <span className="footer-bottom-desktop">Gyász- és esküvői szertartásvezető, gyásztanácsadó</span>
                    <span className="footer-bottom-mobile">
                      gyász- és esküvői<br />szertartásvezető,<br />gyásztanácsadó
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>

          <div>
            <p
              className="font-sans text-xs tracking-widest uppercase mb-5"
              style={{ color: 'var(--color-gold)', fontWeight: 400 }}
            >
              Navigáció
            </p>
            <div className="space-y-3">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block font-sans text-sm transition-colors duration-200"
                  style={{ color: 'var(--color-stone-light)', fontWeight: 300 }}
                  onClick={handleLinkClick(link.href)}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-sage-light)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-stone-light)')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p
              className="font-sans text-xs tracking-widest uppercase mb-5"
              style={{ color: 'var(--color-gold)', fontWeight: 400 }}
            >
              Elérhetőség
            </p>
            <div className="space-y-3">
              <a
                href="tel:+36305066544"
                className="block font-sans text-sm transition-colors duration-200"
                style={{ color: 'var(--color-stone-light)', fontWeight: 300 }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-stone-light)')}
              >
                +36305066544
              </a>
              <p
                className="font-sans text-sm"
                style={{ color: 'var(--color-stone-light)', fontWeight: 300 }}
              >
                Országosan elérhető
              </p>
              <a
                href="mailto:kovacs.aniko.szertartasvezeto@gmail.com"
                className="block font-sans text-sm transition-colors duration-200"
                style={{ color: 'var(--color-stone-light)', fontWeight: 300 }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-stone-light)')}
              >
                kovacs.aniko.szertartasvezeto@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p
            className="font-sans text-xs"
            style={{ color: 'var(--color-stone)', fontWeight: 300 }}
          >
            © {new Date().getFullYear()} kovacsanikoszertartas.hu — Minden jog fenntartva.
          </p>
          <div className="font-serif" style={{ color: 'var(--color-gold)', opacity: 0.5, fontSize: '1rem' }}>
            ✦ ✦ ✦
          </div>
        </div>
      </div>
    </footer>
  );
}
