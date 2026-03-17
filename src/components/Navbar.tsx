import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#rolam', label: 'Rólam' },
    { href: '#folyamat', label: 'Hogyan dolgozom' },
    { href: '#szolgaltatasok', label: 'Szolgáltatások' },
    { href: '#kapcsolat', label: 'Kapcsolat' },
  ];

  const brandColor = scrolled ? 'var(--color-charcoal)' : 'white';
  const subtitleColor = scrolled ? 'var(--color-stone)' : 'white';
  const navLinkColor = scrolled ? 'var(--color-stone-dark)' : 'white';
  const menuIconColor = scrolled ? 'var(--color-charcoal)' : 'white';
  const topTextShadow = scrolled ? 'none' : '0 1px 10px rgba(0, 0, 0, 0.18)';

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
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-none">
          <span
            className="font-serif text-xl"
            style={{ color: brandColor, fontWeight: 400, letterSpacing: '0.02em', textShadow: topTextShadow }}
          >
            Kovács Anikó
          </span>
          <span
            className="font-sans text-xs tracking-widest uppercase"
            style={{ color: subtitleColor, fontWeight: 300, textShadow: topTextShadow }}
          >
            Polgári Búcsúztató
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm tracking-wide transition-colors duration-200"
              style={{ color: navLinkColor, fontWeight: 300, textShadow: topTextShadow }}
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
              backgroundColor: 'var(--color-sage)',
              color: 'white',
              borderRadius: '2px',
              letterSpacing: '0.05em',
              fontWeight: 400,
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-sage-dark)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-sage)')}
          >
            Kapcsolatfelvétel
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
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

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ backgroundColor: 'rgba(250, 247, 242, 0.98)' }}
        >
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm py-2 border-b"
              style={{
                color: 'var(--color-charcoal)',
                borderColor: 'var(--color-stone-light)',
                fontWeight: 300,
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
