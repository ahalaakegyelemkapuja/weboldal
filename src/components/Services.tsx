const services = [
  {
    title: 'Temetési szertartás',
    description:
      'Teljes körű polgári búcsúszertartás lebonyolítása: a konzultációtól a búcsúbeszéd megírásán át a szertartás méltóságteljes levezetéséig. Ravatalos termekben, temetőkápolnákban egyaránt.',
    features: ['Személyes konzultáció', 'Egyedi búcsúbeszéd', 'Szertartás levezetése', 'Zenei koordináció'],
    accent: 'var(--color-sage)',
  },
  {
    title: 'Hamvasztásos búcsú',
    description:
      'Urnatemetések és hamvasztást követő megemlékezések személyes, bensőséges levezetése. Kisebb körű, intim szertartásokhoz is ideális — ahol a szó és az emlék a legfontosabb.',
    features: ['Urnatemetés', 'Intim megemlékezés', 'Kegyeleti helyszín', 'Szűk körű szertartás'],
    accent: 'var(--color-dusty-rose)',
  },
  {
    title: 'Gyászszertartás szervezés',
    description:
      'Ha nem csupán a búcsúbeszédet, hanem a szertartás teljes szervezését is szeretnék rám bízni: helyszín, zene, virágok, koordináció — minden részletre figyelek, hogy Önöknek csak jelen kelljen lenniük.',
    features: ['Teljes szervezés', 'Helyszínkoordináció', 'Zenei program', 'Virágdekoráció'],
    accent: 'var(--color-gold)',
  },
];

export default function Services() {
  return (
    <section
      id="szolgaltatasok"
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--color-cream)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" style={{ marginTop: '-40px' }}>
          <p
            className="font-sans text-xs tracking-widest uppercase mb-4"
            style={{ color: 'var(--color-sage)' }}
          >
            Szolgáltatások
          </p>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--color-charcoal)',
              fontWeight: 300,
              lineHeight: 1.2,
              transform: 'translateY(-10px)',
            }}
          >
            Miben segíthetek
          </h2>
          <div className="section-divider mt-6 mb-6" style={{ transform: 'translateY(10px)' }} />
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(service => (
            <div
              key={service.title}
              className="card-hover flex flex-col"
              style={{
                backgroundColor: 'var(--color-warm-white)',
                borderRadius: '2px',
                border: '1px solid rgba(184, 151, 90, 0.1)',
                overflow: 'hidden',
              }}
            >
              {/* Accent bar */}
              <div style={{ height: '3px', backgroundColor: service.accent }} />

              <div className="p-8 flex flex-col flex-1">
                <h3
                  className="font-serif mb-4"
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--color-charcoal)',
                    fontWeight: 400,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="font-sans mb-6"
                  style={{
                    color: 'var(--color-stone-dark)',
                    fontWeight: 300,
                    lineHeight: 1.85,
                    fontSize: '0.9rem',
                    flex: 1,
                  }}
                >
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map(feature => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 font-sans text-sm"
                      style={{ color: 'var(--color-stone-dark)', fontWeight: 300 }}
                    >
                      <span style={{ color: service.accent, fontSize: '0.7rem' }}>◆</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
