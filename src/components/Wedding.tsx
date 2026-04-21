export default function Wedding() {
  return (
    <section
      id="eskuvo"
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--color-warm-white)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
          <div>
            <p
              className="font-sans text-xs tracking-widest uppercase mb-4"
              style={{ color: 'var(--color-dusty-rose)' }}
            >
              Esküvői ceremónia
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
              A szerelem az egyetlen igazság
            </h2>

            <div className="section-divider mb-8" style={{ margin: '0 0 2rem 0' }} />

            <div
              className="font-sans space-y-5"
              style={{ color: 'var(--color-stone-dark)', fontWeight: 300, lineHeight: 1.9 }}
            >
              <p>
                Magánemberként és szertartásvezetőként is gyönyörködtet a házasságkötés aktusa. Annak a
                szándéka, hogy egy életünk van, és azt valaki más kezébe helyezzük, akivel közösen teremtünk
                valami újat, formáljuk egymást és a világot.
              </p>
              <p>
                Nagy szeretettel vállalom párok egybeadását. Esküvői szertartásaim mélyérzésű, intim hangulatú,
                a család és a szerelem lelki témáit – akár spirituálisan – feldolgozó ceremóniák szoktak lenni.
              </p>
              <p>
                A párral való többszöri konzultáció után megszületik egy őket tükröző szertartás, mely
                lebonyolítását országosan bármilyen helyszínen vállalom.
              </p>
              <p>
                Azon párok számára ajánlom magam, akik mosolyba borult szívvel, valódi, intim térben képzelik
                el az esküvőjüket.
              </p>
            </div>
          </div>

          <div
            className="p-8"
            style={{
              backgroundColor: 'var(--color-cream)',
              border: '1px solid rgba(184, 151, 90, 0.12)',
              borderRadius: '2px',
            }}
          >
            <div className="mb-6">
              <p
                className="font-sans text-xs tracking-widest uppercase mb-3"
                style={{ color: 'var(--color-dusty-rose)', fontWeight: 400 }}
              >
                Mit tartalmaz
              </p>
              <h3
                className="font-serif"
                style={{ fontSize: '1.6rem', color: 'var(--color-charcoal)', fontWeight: 400 }}
              >
                Egyedi, intim szertartás
              </h3>
            </div>

            <ul className="space-y-3 mb-10">
              {[
                'Konzultáció (online/személyesen)',
                'Egyedi ceremónia írása',
                'Szertartás lebonyolítása',
              ].map(feature => (
                <li
                  key={feature}
                  className="flex items-center gap-3 font-sans text-sm"
                  style={{ color: 'var(--color-stone-dark)', fontWeight: 300 }}
                >
                  <span style={{ color: 'var(--color-dusty-rose)', fontSize: '0.7rem' }}>◆</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div
              className="p-6"
              style={{
                backgroundColor: 'var(--color-warm-white)',
                borderLeft: '3px solid var(--color-dusty-rose)',
                borderRadius: '2px',
              }}
            >
              <p
                className="font-serif"
                style={{ color: 'var(--color-charcoal)', fontSize: '1.15rem', fontStyle: 'italic', lineHeight: 1.7 }}
              >
                „A szerelem ott válik igazán láthatóvá, ahol két ember a teljes szabadságából választja egymást.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
