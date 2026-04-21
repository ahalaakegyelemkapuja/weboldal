const services = [
  {
    title: 'Temetési szertartás',
    description:
      'Teljeskörű polgári búcsúszertartás lebonyolítása: a konzultációtól a búcsúbeszéd megírásán át a szertartás méltóságteljes levezetéséig, bármilyen helyszínen (otthon, temetőben, a fővárosban, vidéken, hajón), akár angol nyelven.',
    features: [
      'Konzultáció (írásban/telefonon/személyesen)',
      'Egyedi búcsúbeszéd írása',
      'Szertartás levezetése',
    ],
    accent: 'var(--color-sage)',
  },
  {
    title: 'Gyásztanácsadás / gyászcsoport vezetés',
    description:
      'A gyász nem probléma, amit meg kell oldani, hanem folyamat, amiben segít, ha van mellettünk valaki: 10 alkalmas egyéni vagy kiscsoportos veszteségfeldolgozó foglalkozás, mely szintén a szeretetteljes kedvesség légkörében, biztonságban, játékos feladatokon keresztül visz közelebb a gyász megértéséhez, az érzelmek feldolgozásához és a megerősödéshez.',
    features: ['Személyes találkozók', '10 hetes elköteleződés', 'Önismereti munka'],
    accent: 'var(--color-dusty-rose)',
  },
];

export default function Services() {
  return (
    <section
      id="szolgaltatasok"
      className="pt-12 pb-24 px-6"
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
            Szolgáltatások
          </h2>
          <div className="section-divider" style={{ margin: '1.7rem auto 0.5rem' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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

        <div
          className="mt-14 p-8 text-center"
          style={{
            backgroundColor: 'var(--color-warm-white)',
            borderTop: '1px solid rgba(184,151,90,0.18)',
            borderBottom: '1px solid rgba(184,151,90,0.18)',
          }}
        >
          <p
            className="font-serif"
            style={{
              fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)',
              color: 'var(--color-charcoal)',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.8,
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            „Megszületni a világra gyönyörű,
            <br />
            Benne lenni a világban gyönyörű,
            <br />
            De kiszületni a világból az a szép,
            <br />
            Elhagyni a csónakot a tengerért!”
          </p>
        </div>
      </div>
    </section>
  );
}
