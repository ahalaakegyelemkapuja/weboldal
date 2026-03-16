import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ nev: '', email: '', telefon: '', uzenet: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: 'var(--color-cream)',
    border: '1px solid var(--color-stone-light)',
    borderRadius: '2px',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    color: 'var(--color-charcoal)',
    fontWeight: 300,
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  return (
    <section
      id="kapcsolat"
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--color-cream)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Contact info */}
          <div>
            <p
              className="font-sans text-xs tracking-widest uppercase mb-4"
              style={{ color: 'var(--color-sage)' }}
            >
              Kapcsolat
            </p>
            <h2
              className="font-serif mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--color-charcoal)',
                fontWeight: 300,
                lineHeight: 1.2,
              }}
            >
              Vegye fel velem
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-sage-dark)' }}>a kapcsolatot</em>
            </h2>

            <div className="section-divider mb-8" style={{ margin: '0 0 2rem 0' }} />

            <p
              className="font-sans mb-10"
              style={{
                color: 'var(--color-stone-dark)',
                fontWeight: 300,
                lineHeight: 1.85,
                maxWidth: '420px',
              }}
            >
              Ha szeretné, hogy segítsek méltó és személyes búcsút szervezni szerettének,
              keressen bizalommal. Az első konzultáció kötelezettségmentes, és mindig az Önök
              igényeihez és ütemtervéhez igazodom.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              {[
                {
                  icon: '✆',
                  label: 'Telefon',
                  value: '+36 30 123 4567',
                  href: 'tel:+36301234567',
                },
                {
                  icon: '✉',
                  label: 'E-mail',
                  value: 'aniko@kovacsbucsuztato.hu',
                  href: 'mailto:aniko@kovacsbucsuztato.hu',
                },
                {
                  icon: '◎',
                  label: 'Helyszín',
                  value: 'Budapest és környéke',
                  href: null,
                },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="font-serif w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: 'var(--color-warm-white)',
                      border: '1px solid var(--color-sage-light)',
                      color: 'var(--color-sage)',
                      borderRadius: '2px',
                      fontSize: '1rem',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="font-sans text-xs tracking-widest uppercase mb-1"
                      style={{ color: 'var(--color-stone)' }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-sans transition-colors duration-200"
                        style={{ color: 'var(--color-charcoal)', fontWeight: 400 }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-sage-dark)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-charcoal)')}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-sans" style={{ color: 'var(--color-charcoal)', fontWeight: 400 }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Form */}
          <div>
            {sent ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center p-12"
                style={{
                  backgroundColor: 'var(--color-warm-white)',
                  border: '1px solid var(--color-sage-light)',
                  borderRadius: '2px',
                }}
              >
                <div className="font-serif text-4xl mb-4" style={{ color: 'var(--color-sage)' }}>✦</div>
                <h3
                  className="font-serif mb-4"
                  style={{ fontSize: '1.8rem', color: 'var(--color-charcoal)', fontWeight: 300 }}
                >
                  Köszönöm megkeresését
                </h3>
                <p
                  className="font-sans"
                  style={{ color: 'var(--color-stone-dark)', fontWeight: 300, lineHeight: 1.8 }}
                >
                  Hamarosan felveszem Önnel a kapcsolatot. Addig is, ha sürgős a megkeresés,
                  hívjon bizalommal telefonon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 space-y-5"
                style={{
                  backgroundColor: 'var(--color-warm-white)',
                  border: '1px solid rgba(184, 151, 90, 0.1)',
                  borderRadius: '2px',
                }}
              >
                <h3
                  className="font-serif mb-2"
                  style={{ fontSize: '1.4rem', color: 'var(--color-charcoal)', fontWeight: 400 }}
                >
                  Üzenet küldése
                </h3>
                <p
                  className="font-sans text-sm mb-6"
                  style={{ color: 'var(--color-stone)', fontWeight: 300 }}
                >
                  Az első megkeresés kötelezettségmentes.
                </p>

                <div>
                  <label
                    className="font-sans text-xs tracking-widest uppercase block mb-2"
                    style={{ color: 'var(--color-stone)' }}
                  >
                    Neve *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.nev}
                    onChange={e => setForm({ ...form, nev: e.target.value })}
                    style={inputStyle}
                    placeholder="Teljes neve"
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-sage)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-stone-light)')}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="font-sans text-xs tracking-widest uppercase block mb-2"
                      style={{ color: 'var(--color-stone)' }}
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      placeholder="email@cim.hu"
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-sage)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-stone-light)')}
                    />
                  </div>
                  <div>
                    <label
                      className="font-sans text-xs tracking-widest uppercase block mb-2"
                      style={{ color: 'var(--color-stone)' }}
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={form.telefon}
                      onChange={e => setForm({ ...form, telefon: e.target.value })}
                      style={inputStyle}
                      placeholder="+36 ..."
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-sage)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-stone-light)')}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="font-sans text-xs tracking-widest uppercase block mb-2"
                    style={{ color: 'var(--color-stone)' }}
                  >
                    Üzenet *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.uzenet}
                    onChange={e => setForm({ ...form, uzenet: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    placeholder="Írjon néhány sort a szertartásról, az időpontról, vagy bármiről, amiben segítséget kér..."
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-sage)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-stone-light)')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--color-sage)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    letterSpacing: '0.12em',
                    fontWeight: 400,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-sage-dark)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-sage)')}
                >
                  Üzenet küldése
                </button>

                <p
                  className="font-sans text-xs text-center"
                  style={{ color: 'var(--color-stone)', fontWeight: 300 }}
                >
                  Adatait bizalmasan kezelem
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
