export default function About() {
  return (
    <section id="rolam" className="pt-6 pb-24 px-6" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative mx-auto w-full md:max-w-[420px]">
            <div
              className="absolute -top-4 -left-4 w-full h-full"
              style={{
                border: '1px solid var(--color-sage-light)',
                borderRadius: '2px',
              }}
            />
            <img
              src="/images/Anika.webp"
              alt="Kovács Anikó szertartásvezető"
              className="relative w-full h-auto object-cover"
              style={{
                borderRadius: '2px',
              }}
            />
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
                „A szeretetteljes kedvesség  <br /> terében találkozunk.”
              </p>
              <p
                className="font-sans mt-3 text-xs tracking-widest uppercase"
                style={{ color: 'var(--color-gold)' }}
              >
                — Anikó
              </p>
            </div>
          </div>

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
              Kedves Látogató!
            </h2>

            <div className="section-divider mb-8" style={{ margin: '0 0 2rem 0' }} />

            <div
              className="font-sans space-y-5"
              style={{ color: 'var(--color-stone-dark)', fontWeight: 300, lineHeight: 1.9 }}
            >
              <p>
                Kovács Anikó szertartásvezető vagyok. Pár éve foglalkozom polgári búcsúszertartások
                lebonyolításával és gyásztanácsadással. A segítségnyújtás szándéka, a szolgálat, végső soron a
                hitem hozott erre a pályára. Ez vezet arra engem, hogy a szívembe érkező szeretetet a tőlem
                telhető legnagyobb kedvességgel megosszam másokkal. Így jön létre egy tér, amelyben az élet
                fontos pillanatai különlegessé, gyógyítóvá és valódivá válhatnak. Egy szóval: intimmé.
              </p>
              <p>
                Keleti és nyugati vallásfilozófiai művekből, valamint a családomban megélt mély
                szeretet-kapcsolódás tapasztalati élményéből merítettem az igazságmorzsákat, melyek az elmúlt
                években hit formájában váltak a valóságommá.
              </p>
              <p>
                Ezek az elemek nem, vagy csak külön kérés esetén jelennek meg a szertartásaimban, hiszen
                polgári ceremóniákról beszélünk. Inkább a hozzáállás az, ami ezekből fakadva jelenik meg a
                munkámban, és hozzáadott értéket teremt a családok számára ezeken a kiemelt
                életeseményeken.
              </p>
              <p>
                Pszichológia alapképzést végeztem, valamint gyásztanácsadó és gyászcsoportvezető oklevelem
                van.
              </p>
              <p>
                Hiszek abban, hogy a valódi intimitás túlmutat rajtunk. A szeretetteljes kedvesség terében
                találkozunk.
              </p>
              <p>
                Hálatelt szívvel a hivatásomért,
                <br />
                Anikó
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
