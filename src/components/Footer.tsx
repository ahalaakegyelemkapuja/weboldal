export default function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{
        backgroundColor: 'var(--color-charcoal)',
        borderTop: '1px solid rgba(184, 151, 90, 0.2)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p
                className="font-serif"
                style={{ fontSize: '1.4rem', color: 'white', fontWeight: 300, letterSpacing: '0.02em' }}
              >
                Kovács Anikó
              </p>
              <p
                className="font-sans text-xs tracking-widest uppercase mt-1"
                style={{ color: 'var(--color-stone-light)', fontWeight: 300 }}
              >
                Polgári Búcsúztató
              </p>
            </div>
            <p
              className="font-sans text-sm"
              style={{ color: 'var(--color-stone-light)', fontWeight: 300, lineHeight: 1.8 }}
            >
              Méltóságteljes, személyre szabott polgári búcsúszertartások — vallástól függetlenül,
              minden família számára.
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              className="font-sans text-xs tracking-widest uppercase mb-5"
              style={{ color: 'var(--color-gold)', fontWeight: 400 }}
            >
              Navigáció
            </p>
            <div className="space-y-3">
              {[
                { href: '#rolam', label: 'Rólam' },
                { href: '#folyamat', label: 'Hogyan dolgozom' },
                { href: '#szolgaltatasok', label: 'Szolgáltatások' },
                { href: '#kapcsolat', label: 'Kapcsolat' },
              ].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block font-sans text-sm transition-colors duration-200"
                  style={{ color: 'var(--color-stone-light)', fontWeight: 300 }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-sage-light)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-stone-light)')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              className="font-sans text-xs tracking-widest uppercase mb-5"
              style={{ color: 'var(--color-gold)', fontWeight: 400 }}
            >
              Elérhetőség
            </p>
            <div className="space-y-3">
              <a
                href="tel:+36301234567"
                className="block font-sans text-sm transition-colors duration-200"
                style={{ color: 'var(--color-stone-light)', fontWeight: 300 }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-stone-light)')}
              >
                +36 30 123 4567
              </a>
              <a
                href="mailto:aniko@kovacsbucsuztato.hu"
                className="block font-sans text-sm transition-colors duration-200"
                style={{ color: 'var(--color-stone-light)', fontWeight: 300 }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-stone-light)')}
              >
                aniko@kovacsbucsuztato.hu
              </a>
              <p
                className="font-sans text-sm"
                style={{ color: 'var(--color-stone-light)', fontWeight: 300 }}
              >
                Budapest és környéke
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p
            className="font-sans text-xs"
            style={{ color: 'var(--color-stone)', fontWeight: 300 }}
          >
            © {new Date().getFullYear()} Kovács Anikó — Polgári Búcsúztató. Minden jog fenntartva.
          </p>
          <div className="font-serif" style={{ color: 'var(--color-gold)', opacity: 0.5, fontSize: '1rem' }}>
            ✦ ✦ ✦
          </div>
        </div>
      </div>
    </footer>
  );
}
