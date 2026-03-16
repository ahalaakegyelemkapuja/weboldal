export default function About() {
  return (
    <section id="rolam" className="pt-6 pb-24 px-6" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full"
              style={{
                border: '1px solid var(--color-sage-light)',
                borderRadius: '2px',
              }}
            />
            <img
              src="/images/roses.jpg"
              alt="Fehér rózsák"
              className="relative w-full object-cover"
              style={{
                height: '520px',
                borderRadius: '2px',
                filter: 'brightness(0.95) saturate(0.9)',
              }}
            />
            {/* Quote card */}
            <div
              className="absolute -bottom-8 -right-4 md:-right-8 p-6 max-w-xs"
              style={{
                backgroundColor: 'var(--color-warm-white)',
                boxShadow: '0 8px 32px rgba(58,53,48,0.1)',
                borderLeft: '3px solid var(--color-gold)',
                borderRadius: '2px',
              }}
            >
              <p
                className="font-serif"
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--color-charcoal)',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                }}
              >
                „A hála a kegyelem kapuja"
              </p>
              <p
                className="font-sans mt-3 text-xs tracking-widest uppercase"
                style={{ color: 'var(--color-gold)' }}
              >
                — Kovács Anikó
              </p>
            </div>
          </div>

          {/* Text side */}
          <div className="md:pl-8 mt-8 md:mt-0">
            <p
              className="font-sans text-xs tracking-widest uppercase mb-4"
              style={{ color: 'var(--color-sage)' }}
            >
              Rólam
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
              Nem csupán egy búcsúbeszéd —
              <em style={{ fontStyle: 'italic', color: 'var(--color-sage-dark)' }}> egy emlék, amely megmarad</em>
            </h2>

            <div className="section-divider mb-8" style={{ margin: '0 0 2rem 0' }} />

            <div
              className="font-sans space-y-5"
              style={{ color: 'var(--color-stone-dark)', fontWeight: 300, lineHeight: 1.85 }}
            >
              <p>
                Kovács Anikóként polgári búcsúztató vagyok, aki hisz abban, hogy az utolsó búcsú nemcsak egy formalitás,
                hanem az egyik legmélyebb emberi pillanat — és ezt a pillanatot megérdemli, hogy valóban{' '}
                <strong style={{ fontWeight: 500 }}>személyre szabott</strong> legyen.
              </p>
              <p>
                Munkám során türelemmel hallgatom meg a család emlékeit, történeteit, a szeretett személy
                jellemzőit és értékeit. Ebből születik meg az a búcsúbeszéd, amely nem általános sablonból épül,
                hanem <strong style={{ fontWeight: 500 }}>egyedül az ő életéről</strong> szól.
              </p>
              <p>
                Szertartásaim vallástól függetlenek, így minden hitű és meggyőződésű család számára
                természetes otthont teremtenek a gyász és az emlékezés számára.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6">
              {[
                { num: '12+', label: 'év tapasztalat' },
                { num: '400+', label: 'szertartás' },
                { num: '100%', label: 'személyre szabott' },
              ].map(stat => (
                <div key={stat.label} className="text-center min-w-0">
                  <div
                    className="font-serif"
                    style={{ fontSize: '1.8rem', color: 'var(--color-sage-dark)', fontWeight: 400, lineHeight: 1.1 }}
                  >
                    {stat.num}
                  </div>
                  <div
                    className="font-sans text-[0.62rem] sm:text-xs tracking-[0.18em] uppercase mt-1"
                    style={{ color: 'var(--color-stone)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
