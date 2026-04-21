const steps = [
  {
    number: '1',
    title: 'Konzultáció',
    description:
      'A család választása szerint írásban, telefonon, online, vagy személyesen átbeszéljük az elhunyt életútját és mindazt, amire a szertartáson szívesen emlékeznének. Ezen keresztül megismerhetem az elhunytat, illetve a családi kapcsolatokat.',
    icon: '❧',
  },
  {
    number: '2',
    title: 'Búcsúbeszéd megírása',
    description:
      'Az elhunyt személyiségéhez és a család igényeihez igazított témával, stílussal és mélységben elkészítem a szöveget. Abban hiszek, hogy a búcsú akkor méltó, ha nem mesterkélt, hanem természetes és igaz hangon szólal meg, és ha azt a mindenkori érzésvilágot tükrözi, ami a szeretett személyre és a hozzátartozóira jellemző volt.',
    icon: '✑',
  },
  {
    number: '3',
    title: 'Egyeztetés és finomítás',
    description:
      'Véleményezésre elküldöm a kész tervezetet. Ha bármit módosítani szeretnének, abban örömmel segítek, hiszen fontos számomra, hogy a munkámmal hozzájáruljak az önök méltó elköszönéséhez.',
    icon: '↹',
  },
  {
    number: '4',
    title: 'A szertartás lebonyolítása',
    description:
      'A szertartást én bonyolítom le: közvetítem a megbeszélt gondolatokat olyan stílusban és hangnemben, amiben az a legméltóbb. Legyen ez tragédia, egy csendes búcsú, egy egyszerű elköszönés, vagy az élet hangján való örömteli emlékezés.',
    icon: '❀',
  },
];

export default function Process() {
  return (
    <section
      id="folyamat"
      className="px-6 pt-10 pb-24"
      style={{ backgroundColor: 'var(--color-warm-white)' }}
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="font-sans hero-intro-copy-text mx-auto mb-8 process-intro-spacing"
          style={{
            marginTop: 0,
            paddingTop: '1.75rem',
            fontSize: 'clamp(1rem, 1.9vw, 1.2rem)',
            color: 'rgba(48, 45, 45, 0.92)',
            fontWeight: 300,
            lineHeight: 1.95,
            textShadow: '0 1px 5px rgba(255, 255, 255, 0.22)',
            textAlign: 'center',
          }}
        >
          Polgári búcsúztatóként segítem a családokat abban, hogy megtalálják azt a formát és
          hangot, amely hűen tükrözi szerettük személyiségét – tiszteletben tartva az élet
          egyediségét és a gyász sokféleségét.
        </p>
        <div className="text-center mb-7">
          <div className="animate-fade-in-up delay-200" style={{ opacity: 1, overflow: 'visible', paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
            <span className="ornament" style={{ opacity: 0.14 }}>✦</span>
          </div>
          <p
            className="font-sans text-[0.68rem] sm:text-xs tracking-[0.22em] uppercase mb-6 partner-label-text"
            style={{ color: 'rgb(26, 25, 25)', fontWeight: 300, textShadow: '0 1px 5px rgba(234, 234, 234, 0)', marginTop: '0.25rem' }}
          >
            Kovács Anikó szertartásvezető, gyásztanácsadó
          </p>
          <div className="animate-fade-in-up delay-200" style={{ opacity: 0.14, overflow: 'visible', paddingBottom: '1.5rem' }}>
            <span className="ornament" style={{ opacity: 0.17 }}>✦</span>
          </div>
          <h2
            className="font-serif process-heading-spacing"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--color-charcoal)',
              fontWeight: 300,
              lineHeight: 1.2,
              marginTop: '0',
              marginBottom: '4.5rem',
            }}
          >
            Hogyan születik meg a búcsúszó?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`card-hover p-8 relative ${step.number === '2' || step.number === '4' ? 'desktop-zigzag' : ''}`}
              style={{
                backgroundColor: 'var(--color-cream)',
                borderRadius: '2px',
                border: '1px solid rgba(184, 151, 90, 0.12)',
              }}
            >
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

        <div
          className="mt-24 p-8 text-center"
          style={{
            backgroundColor: 'var(--color-cream)',
            borderTop: '1px solid var(--color-sage-light)',
            borderBottom: '1px solid var(--color-sage-light)',
          }}
        >
          <p
            className="font-sans mx-auto"
            style={{
              color: 'var(--color-stone-dark)',
              fontWeight: 300,
              lineHeight: 1.85,
              maxWidth: '820px',
            }}
          >
            A szertartások nyelvezete letisztult és érthető. Lehetőség van bármilyen eszme, vagy
            motívumrendszer beemelésére, mely különleges kéréseknek a kreatív írás és irodalom
            kedvelőjeként/művelőjeként örömmel teszek eleget.
          </p>
        </div>
      </div>
    </section>
  );
}
