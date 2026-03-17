const steps = [
  {
    number: '01',
    title: 'Személyes konzultáció',
    description:
      'Egy csendes, bensőséges találkozón — személyesen vagy telefonon — türelemmel meghallgatom az emlékeket, anekdotákat, a szeretett személy jellemzőit. Nincs sietség, nincs sablon: az Ön szavai a legfontosabbak.',
    icon: '❧',
  },
  {
    number: '02',
    title: 'A búcsúbeszéd megírása',
    description:
      'A megosztott emlékekből és történetekből egyedi, személyes búcsúbeszédet írok. A szöveg az elhunyt igazi személyiségét tükrözi — hitelesen, méltósággal és szeretettel.',
    icon: '✦',
  },
  {
    number: '03',
    title: 'Egyeztetés és finomítás',
    description:
      'A kész szöveget megosztom a családdal. Ha bármit módosítani szeretnének, azt természetesen megteszem — addig, amíg minden szó pontosan azt fejezi ki, amit éreznek.',
    icon: '◇',
  },
  {
    number: '04',
    title: 'A szertartás lebonyolítása',
    description:
      'A búcsú napján én viszem végig a szertartást: nyugodt, méltóságteljes hangon, a család jelenlétére figyelve. Önöknek nem kell nyilvánosan megszólalni — ez a teher az én vállamat nyomja.',
    icon: '✿',
  },
];

export default function Process() {
  return (
    <section
      id="folyamat"
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--color-warm-white)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" style={{ marginTop: '-40px' }}>
          <p
            className="font-sans text-xs tracking-widest uppercase mb-4"
            style={{ color: 'var(--color-sage)' }}
          >
            A folyamat
          </p>
          <div>
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
              Hogyan dolgozom
            </h2>
            <div className="section-divider mb-6" style={{ marginTop: '4px' }} />
          </div>
          <p
            className="font-sans mx-auto"
            style={{
              color: 'var(--color-stone-dark)',
              fontWeight: 300,
              maxWidth: '520px',
              lineHeight: 1.8,
            }}
          >
            A folyamat minden lépése az Önök kényelmét és a szeretett személy méltó búcsúját szolgálja.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="card-hover p-8 relative"
              style={{
                backgroundColor: 'var(--color-cream)',
                borderRadius: '2px',
                border: '1px solid rgba(184, 151, 90, 0.12)',
              }}
            >
              {/* Step number */}
              <div
                className="absolute top-6 right-8 font-serif"
                style={{
                  fontSize: '3.5rem',
                  color: 'var(--color-sage-light)',
                  fontWeight: 300,
                  lineHeight: 1,
                  opacity: 0.5,
                }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                className="font-serif mb-4"
                style={{ fontSize: '1.6rem', color: 'var(--color-gold)', opacity: 0.8 }}
              >
                {step.icon}
              </div>

              <h3
                className="font-serif mb-4"
                style={{
                  fontSize: '1.5rem',
                  color: 'var(--color-charcoal)',
                  fontWeight: 400,
                }}
              >
                {step.title}
              </h3>

              <p
                className="font-sans"
                style={{
                  color: 'var(--color-stone-dark)',
                  fontWeight: 300,
                  lineHeight: 1.85,
                  fontSize: '0.95rem',
                }}
              >
                {step.description}
              </p>

              {i < steps.length - 1 && (
                <div
                  className="absolute bottom-0 left-8"
                  style={{
                    width: '40px',
                    height: '2px',
                    backgroundColor: 'var(--color-sage-light)',
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Central message */}
        <div
          className="mt-12 p-8 text-center"
          style={{
            backgroundColor: 'var(--color-cream)',
            borderTop: '1px solid var(--color-sage-light)',
            borderBottom: '1px solid var(--color-sage-light)',
          }}
        >
          <p
            className="font-serif"
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              color: 'var(--color-charcoal)',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            „Az Önök feladata az emlékezés és a gyász. Az én feladatom, hogy ezt a terhet levegyem a vállukról,
            és gondoskodjak arról, hogy a búcsú méltó legyen — minden részletében."
          </p>
        </div>
      </div>
    </section>
  );
}
