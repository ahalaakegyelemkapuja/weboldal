const pricing = [
  {
    title: 'Temetési szertartás',
    price: '50.000 Ft – tól',
    accent: 'var(--color-sage)',
    prefix: 'Szeretetteljes',
  },
  {
    title: 'Egyéni gyásztanácsadás',
    price: '16.000 Ft – tól / alkalom',
    accent: 'var(--color-gold)',
    prefix: 'Személyre szabott',
  },
  {
    title: 'Csoportos gyásztanácsadás',
    price: 'egyedi díjazással a csoport méretének függvényében',
    accent: 'var(--color-dusty-rose)',
    prefix: 'Megtartó és bizalomteljes',
  },
];

export default function Pricing() {
  return (
    <section
      id="dijazas"
      className="py-14 px-6"
      style={{ backgroundColor: 'var(--color-cream)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--color-charcoal)',
              fontWeight: 300,
              lineHeight: 1.2,
            }}
          >
            Díjazás
          </h2>
          <div className="section-divider" style={{ margin: '1.5rem auto 0.5rem' }} />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map(item => (
            <div
              key={item.title}
              className="p-8 text-center flex flex-col justify-center"
              style={{
                backgroundColor: 'var(--color-warm-white)',
                borderRadius: '2px',
                borderTop: `3px solid ${item.accent}`,
                borderLeft: '1px solid rgba(184,151,90,0.1)',
                borderRight: '1px solid rgba(184,151,90,0.1)',
                borderBottom: '1px solid rgba(184,151,90,0.1)',
              }}
            >
              <p
                className="font-sans text-xs tracking-widest uppercase mb-3"
                style={{ color: item.accent, fontWeight: 400 }}
              >
                {item.prefix}
              </p>
              <h3
                className="font-serif mb-4"
                style={{ color: 'var(--color-charcoal)', fontSize: '1.55rem', fontWeight: 400 }}
              >
                {item.title}
              </h3>
              <p
                className="font-sans"
                style={{ color: 'var(--color-stone-dark)', fontWeight: 300, lineHeight: 1.8 }}
              >
                {item.price}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-10 p-8 text-center"
          style={{
            backgroundColor: 'var(--color-warm-white)',
            border: '1px solid rgba(184,151,90,0.1)',
            borderRadius: '2px',
          }}
        >
          <p
            className="font-sans mx-auto pricing-note"
            style={{ color: 'var(--color-stone-dark)', fontWeight: 300, lineHeight: 1.85 }}
          >
            Egyedi igények esetében eltérő díjazás lehetséges, pl.: vidéki helyszín, hétvégi időpont,
            hajós szórás, kétnyelvű szertartás, zenei szolgáltatás.
          </p>
        </div>
      </div>
    </section>
  );
}
