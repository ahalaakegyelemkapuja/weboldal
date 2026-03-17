const testimonials = [
  {
    text: 'Anikó rendkívüli érzékenységgel hallgatta meg az emlékeinket édesapánkról. A búcsúbeszéd pontosan azt fejezte ki, amit mi magunk soha nem tudtunk volna szavakba önteni. Hálásak vagyunk, hogy volt, aki levette ezt a terhet a vállunkról.',
    name: 'Molnár Erzsébet',
    relation: 'elhunyt édesapja nevében',
  },
  {
    text: 'Nem tudtam elképzelni, hogyan mondunk búcsút anyukámnak vallási szertartás nélkül. Anikó megmutatta, hogy a személyes szavak, az emlékek és a szeretet maga is lehet szertartás. Gyönyörű volt.',
    name: 'Varga Péter',
    relation: 'elhunyt édesanyja nevében',
  },
  {
    text: 'A konzultáció során olyan biztonságban éreztük magunkat, hogy szinte mindent elmeséltünk. A búcsúbeszéd tükrözte azt az embert, akit mi ismertünk és szerettünk — nem egy sablont, hanem őt magát.',
    name: 'Kovács Judit',
    relation: 'elhunyt férje nevében',
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--color-warm-white)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-sans text-xs tracking-widest uppercase mb-4"
            style={{ color: 'var(--color-sage)', transform: 'translateY(-30px)' }}
          >
            Visszajelzések
          </p>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--color-charcoal)',
              fontWeight: 300,
              lineHeight: 1.2,
              transform: 'translateY(-20px)',
            }}
          >
            Amit a családok mondanak
          </h2>
          <div className="section-divider mt-6" style={{ transform: 'translateY(10px)' }} />
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 relative"
              style={{
                backgroundColor: 'var(--color-cream)',
                borderRadius: '2px',
                border: '1px solid rgba(184, 151, 90, 0.1)',
              }}
            >
              {/* Quote mark */}
              <div
                className="font-serif absolute top-4 left-6"
                style={{
                  fontSize: '4rem',
                  color: 'var(--color-sage-light)',
                  lineHeight: 1,
                  opacity: 0.6,
                }}
              >
                „
              </div>

              <p
                className="font-sans mt-8 mb-6"
                style={{
                  color: 'var(--color-stone-dark)',
                  fontWeight: 300,
                  lineHeight: 1.85,
                  fontSize: '0.92rem',
                  fontStyle: 'italic',
                }}
              >
                {t.text}
              </p>

              <div
                className="pt-4"
                style={{ borderTop: '1px solid var(--color-stone-light)' }}
              >
                <p
                  className="font-sans text-sm"
                  style={{ color: 'var(--color-charcoal)', fontWeight: 500 }}
                >
                  {t.name}
                </p>
                <p
                  className="font-sans text-xs tracking-wide mt-1"
                  style={{ color: 'var(--color-stone)', fontWeight: 300 }}
                >
                  {t.relation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
