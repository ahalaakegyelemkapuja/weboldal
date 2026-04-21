import { useState } from 'react';
import type { FormEvent } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useHeroGlassReady } from '../useHeroGlassReady';

const weddingProcess = [
  {
    number: '1',
    title: 'Konzultáció',
    description:
      'Online vagy személyes beszélgetések során megismerem a pár történetét, a kapcsolódásuk hangját, a családi és lelki témákat, amelyekből a szertartás valóban személyessé válhat.',
    icon: '❧',
  },
  {
    number: '2',
    title: 'Egyedi ceremónia írása',
    description:
      'A közös történetből, a választott motívumokból és a pár saját hangulatából megszületik egy intim, mélyérzésű szertartásszöveg, amely nem sablonból, hanem róluk szól.',
    icon: '✑',
  },
  {
    number: '3',
    title: 'Egyeztetés és finomítás',
    description:
      'A ceremónia véglegesítése előtt minden fontos részletet átbeszélünk, hogy a szertartás ritmusa, hangvétele és tartalma pontosan illeszkedjen hozzájuk.',
    icon: '↹',
  },
  {
    number: '4',
    title: 'Szertartás lebonyolítása',
    description:
      'Az esküvő napján nyugodt jelenléttel, szeretetteljes hangon vezetem a ceremóniát, hogy a pár és a család valódi, meghitt térben élhesse meg az igen kimondását.',
    icon: '❀',
  },
];

const defaultWeddingVideoEmbedSrc = 'https://drive.google.com/file/d/10N_-OyC7JJJlqUwvaCcOSAoj_RkeqX0p/preview';

export default function WeddingPage() {
  const isHeroGlassReady = useHeroGlassReady();
  const [form, setForm] = useState({ nev: '', email: '', telefon: '', tema: 'Esküvői szertartás', uzenet: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const weddingVideoEmbedSrc = import.meta.env.VITE_WEDDING_VIDEO_URL?.trim() || defaultWeddingVideoEmbedSrc;

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: 'var(--color-cream)',
    border: '1px solid var(--color-stone-light)',
    borderRadius: '2px',
    fontFamily: 'var(--font-sans)',
    fontSize: '16px',
    color: 'var(--color-charcoal)',
    fontWeight: 300,
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-cream)' }}>
      <Navbar />

      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: 'calc(120svh - 88px)' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/eskuvo.webp)',
            backgroundPosition: '37% center',
            filter: 'brightness(0.78) saturate(1.1) contrast(0.85)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0, 0, 0, 0.74) 0%, rgba(97, 155, 188, 0.13) 35%, rgb(250, 247, 242) 130%)',
          }}
        />

        <div className="absolute inset-0 z-10 flex flex-col px-6 hero-top-padding" style={{ paddingTop: 'max(12vh, 7rem)', paddingBottom: 'max(4vh, 2.5rem)' }}>
          <div className="animate-fade-in-up text-center" style={{ opacity: 0 }}>
            <div className="relative mx-auto hero-mobile-shift" style={{ maxWidth: '760px', left: '0' }}>
              <h1
                className="font-serif"
                style={{
                  display: 'inline-block',
                  textAlign: 'left',
                  color: 'white',
                  fontWeight: 270,
                  lineHeight: 0.9,
                  letterSpacing: '-0.03em',
                  fontSize: 'clamp(2.55rem, 4.25vw, 3.5rem)',
                  margin: 0,
                  textShadow: '0 2px 24px rgba(0, 0, 0, 0.35)',
                }}
              >
                <span style={{ display: 'block', textAlign: 'center' }}>cím 1</span>
                <em
                  style={{
                    display: 'block',
                    fontSize: 'clamp(2.04rem, 3.23vw, 3.4rem)',
                    fontStyle: 'italic',
                    color: 'rgba(237, 201, 201, 0.92)',
                    fontWeight: 270,
                    marginTop: '0.45rem',
                    textAlign: 'left',
                    lineHeight: 1.1,
                    textShadow: '0 4px 28px rgba(0, 0, 0, 0.4)',
                    transform: 'translateY(-5%)',
                  }}
                >
                  <span style={{ display: 'block', textAlign: 'right' }}>cím 2</span>
                  <span style={{ display: 'block', textAlign: 'center' }}></span>
                </em>
              </h1>
            </div>
          </div>

          <div
            className="section-divider mt-8 mb-8 animate-fade-in-up delay-400"
            style={{ opacity: 0, marginTop: '22px', marginBottom: '22px' }}
          />

          <div
            className="text-center hero-cta-row wedding-hero-cta-row"
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 'calc(1.8rem + 20vh)',
              display: 'flex',
              justifyContent: 'center',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
              zIndex: 50,
            }}
          >
            <div className="flex flex-row flex-nowrap justify-center gap-3" style={{ maxWidth: 'min(520px, 100%)', margin: '0 auto', pointerEvents: 'auto' }}>
              <a
                href="#ceremonia"
                className={`hero-glass-button wedding-hero-glass ${isHeroGlassReady ? 'hero-glass-button-ready' : ''} font-sans min-w-0 px-5.5 py-3.5 text-[0.72rem] tracking-widest uppercase transition-all duration-300 sm:px-8 sm:py-4 sm:text-sm`}
                style={{
                  color: 'white',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.67)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.45)';
                  e.currentTarget.style.color = 'white';
                }}
              >
                <span className="hero-glass-button-label">Esküvői ceremónia</span>
              </a>
              <a
                href="#kapcsolat"
                className="font-sans min-w-0 px-5 py-3.5 text-[0.72rem] tracking-widest uppercase transition-all duration-300 sm:px-8 sm:py-4 sm:text-sm"
                style={{
                  backgroundColor: 'var(--color-dusty-rose)',
                  color: 'white',
                  letterSpacing: '0.12em',
                  fontWeight: 400,
                  borderRadius: '2px',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#ad8580')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-dusty-rose)')}
              >
                Kapcsolat
              </a>
            </div>

          </div>
        </div>
      </section>

      <section id="ceremonia" className="py-24 px-6" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
            <div>
              <p
                className="font-sans text-xs tracking-widest uppercase mb-4"
                style={{ color: 'var(--color-dusty-rose)' }}
              >
               Esküvői ceremónia 
              </p>
              <p
                className="font-sans mb-6"
                style={{
                  color: 'var(--color-stone-dark)',
                  fontWeight: 300,
                  lineHeight: 1.85,
                  fontSize: 'clamp(1rem, 1.85vw, 1.06rem)',
                  maxWidth: '760px',
                }}
              >
                Személyes, meghitt szertartás azoknak, akik mosolyba borult szívvel, valódi, intim térben
                szeretnének igent mondani.
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

              <div className="font-sans space-y-5" style={{ color: 'var(--color-stone-dark)', fontWeight: 300, lineHeight: 1.9, maxWidth: '59ch' }}>
                <p>
                  Magánemberként és szertartásvezetőként is gyönyörködtet a házasságkötés aktusa: annak a
                  szándéka, hogy egy életünk van, és azt valaki más kezébe helyezzük, akivel közösen teremtünk
                  valami újat, formáljuk egymást és a világot.
                </p>
                <p>
                  Nagy szeretettel vállalom párok egybeadását. Esküvői szertartásaim mélyérzésű, intim
                  hangulatú, a család és a szerelem lelki témáit – akár spirituálisan – feldolgozó ceremóniák
                  szoktak lenni.
                </p>
                <p>
                  A párral való többszöri konzultáció után megszületik egy őket tükröző szertartás, mely
                  lebonyolítását országosan bármilyen helyszínen vállalom.
                </p>
              </div>
            </div>

            <div
              className="p-8"
              style={{
                backgroundColor: 'var(--color-warm-white)',
                border: '1px solid rgba(184, 151, 90, 0.12)',
                borderRadius: '2px',
              }}
            >
              <p
                className="font-sans text-xs tracking-widest uppercase mb-3"
                style={{ color: 'var(--color-dusty-rose)', fontWeight: 400 }}
              >
                Kinek ajánlom
              </p>
              <h3
                className="font-serif mb-6"
                style={{ fontSize: '1.6rem', color: 'var(--color-charcoal)', fontWeight: 400, lineHeight: 1.3 }}
              >
                Pároknak, akik valódi, intim térben képzelik el az esküvőjüket.
              </h3>

              <p className="font-sans mb-8" style={{ color: 'var(--color-stone-dark)', fontWeight: 300, lineHeight: 1.85 }}>
                Azon párok számára ajánlom magam, akik mosolyba borult szívvel, személyes hangon, mégis
                méltó és felemelő formában szeretnék kimondani az igent.
              </p>

              <ul className="space-y-3">
                {['Konzultáció (online/személyesen)', 'Egyedi ceremónia írása', 'Szertartás lebonyolítása'].map(feature => (
                  <li key={feature} className="flex items-center gap-3 font-sans text-sm" style={{ color: 'var(--color-stone-dark)', fontWeight: 300 }}>
                    <span style={{ color: 'var(--color-dusty-rose)', fontSize: '0.7rem' }}>◆</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="folyamat" className="pt-10 pb-23 px-6" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="font-sans text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-dusty-rose)' }}>
              
            </p>
            <h2
              className="font-serif mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-charcoal)', fontWeight: 300, lineHeight: 1.2 }}
            >
              Hogyan készül a ceremónia?
            </h2>
            <div className="section-divider mb-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-9">
            {weddingProcess.map(step => (
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
                  style={{ fontSize: '3.5rem', color: 'var(--color-dusty-rose-light)', fontWeight: 300, lineHeight: 1, opacity: 0.7 }}
                >
                  {step.number}
                </div>
                <div className="font-serif mb-4" style={{ fontSize: '1.6rem', color: 'var(--color-gold)', opacity: 0.8 }}>
                  {step.icon}
                </div>
                <h3 className="font-serif mb-4" style={{ fontSize: '1.5rem', color: 'var(--color-charcoal)', fontWeight: 400 }}>
                  {step.title}
                </h3>
                <p className="font-sans" style={{ color: 'var(--color-stone-dark)', fontWeight: 300, lineHeight: 1.85, fontSize: '0.95rem' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="video" className="py-24 px-6" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <p className="font-sans text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-dusty-rose)' }}>
              Videó
            </p>
            <h2
              className="font-serif mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-charcoal)', fontWeight: 300, lineHeight: 1.2 }}
            >
              Egy pillanat a szertartás hangulatából
            </h2>
            <div className="section-divider mb-4" />
          </div>

          <div
            className="pt-3 pb-4 px-3 md:pt-4 md:px-4 md:pb-4 mt-6"
            style={{
              backgroundColor: 'var(--color-warm-white)',
              border: '1px solid rgba(184,151,90,0.14)',
              borderRadius: '2px',
              boxShadow: '0 18px 50px rgba(58,53,48,0.08)',
            }}
          >
            <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%', borderRadius: '2px' }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                style={{ border: 'none', borderRadius: '2px' }}
                src={weddingVideoEmbedSrc}
                title="Esküvői videó"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="dijazas" className="py-24 px-6" style={{ backgroundColor: 'var(--color-warm-white)', position: 'relative', overflow: 'visible' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
            <div className="relative hidden md:block">
              <div
                className="relative mx-auto"
                style={{
                  border: '1px solid var(--color-dusty-rose-light)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(228, 228, 228, 0))',
                  width: 'max-content',
                }}
              >
                <img
                  src="/images/Kovács Anikó.webp"
                  alt="Kovács Anikó"
                  className="relative w-full h-auto max-w-[380px] object-cover rounded-[2px]"
                  style={{
                    filter: 'brightness(0.98) saturate(0.92)',
                    objectPosition: 'top left',
                  }}
                />
              </div>
            </div>

            <div className="md:pl-8">
              <p className="font-sans text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-dusty-rose)' }}>
                Rólam
              </p>
              <h2
                className="font-serif mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-charcoal)', fontWeight: 300, lineHeight: 1.2 }}
              >
                Kedves Látogató!
              </h2>
              <div className="section-divider mb-8" style={{ margin: '0 0 2rem 0' }} />
              <div className="font-sans space-y-5" style={{ color: 'var(--color-stone-dark)', fontWeight: 300, lineHeight: 1.9 }}>
                <p>
                  Kovács Anikó szertartásvezető vagyok. A segítségnyújtás szándéka, a szolgálat, végső soron
                  a hitem hozott erre a pályára. Ez vezet arra, hogy a szívembe érkező szeretetet a tőlem
                  telhető legnagyobb kedvességgel osszam meg másokkal.
                </p>
                <p>
                  Hiszek abban, hogy a valódi intimitás túlmutat rajtunk: egy szertartás akkor válik igazán
                  emlékezetessé, ha nem kívülről ráhelyezett forma, hanem a jelenlévők kapcsolódásából születő
                  tér.
                </p>
                <p>
                  Esküvői ceremóniáimban ezt a személyes, szeretetteljes és méltó jelenlétet keresem: azt a
                  hangot, amelyben két ember saját története válik ünneppé.
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

        <div
          className="absolute left-1/2 z-20 md:hidden"
          style={{
            bottom: 0,
            transform: 'translate(-50%, 50%)',
            background: 'linear-gradient(1deg, rgb(250, 247, 242), rgb(245, 240, 235))',
            border: '1px solid var(--color-dusty-rose-light)',
            borderRadius: '9999px',
            padding: '0.1rem',
            width: 'max-content',
          }}
        >
          <img
            src="/images/Kovács Anikó.webp"
            alt="Kovács Anikó"
            className="relative w-full h-auto max-w-[180px] aspect-square rounded-full border-1 border-[var(--color-dusty-rose)] object-cover"
            style={{
              filter: 'brightness(0.98) saturate(0.92)',
              objectPosition: 'top left',
            }}
          />
        </div>
      </section>

      <section
        id="kapcsolat"
        className="pt-24 pb-12 px-6"
        style={{ backgroundColor: 'var(--color-cream)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p
                className="font-sans text-xs tracking-widest uppercase mb-4"
                style={{ color: 'var(--color-dusty-rose)' }}
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
                Keressen bizalommal
              </h2>

              <div className="section-divider mb-8" style={{ margin: '0 0 2rem 0' }} />

              <p
                className="font-sans mb-10"
                style={{
                  color: 'var(--color-stone-dark)',
                  fontWeight: 300,
                  lineHeight: 1.85,
                  maxWidth: '480px',
                }}
              >
                Ha megszólította mindaz, amit olvasott, keressen bizalommal.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: '✆',
                    label: 'Telefon',
                    value: '+36305066544',
                    href: 'tel:+36305066544',
                  },
                  {
                    icon: '◎',
                    label: 'Helyszín',
                    value: 'Országosan elérhető',
                    href: null,
                  },
                  {
                    icon: '✉︎',
                    label: 'E-mail',
                    value: 'kovacs.aniko.szertartasvezeto@gmail.com',
                    href: 'mailto:kovacs.aniko.szertartasvezeto@gmail.com',
                  },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className={`font-serif w-10 h-10 flex items-center justify-center flex-shrink-0 contact-icon ${
                        item.label === 'Telefon'
                          ? 'contact-icon-phone'
                          : item.label === 'Helyszín'
                          ? 'contact-icon-location'
                          : item.label === 'E-mail'
                          ? 'contact-icon-email'
                          : ''
                      }`}
                      style={{
                        fontFamily: 'system-ui, sans-serif',
                        lineHeight: 1,
                        textAlign: 'center',
                        backgroundColor: 'var(--color-warm-white)',
                        border: '1px solid var(--color-dusty-rose-light)',
                        color: 'var(--color-dusty-rose)',
                        borderRadius: '2px',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          height: '100%',
                          lineHeight: 1,
                          transform: item.label === 'E-mail' ? 'translateY(-0.16rem)' : undefined,
                        }}
                      >
                        {item.icon}
                      </span>
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
                          onMouseEnter={e => (e.currentTarget.style.color = '#ad8580')}
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

            <div>
              {sent ? (
                <div
                  className="h-full flex flex-col items-center justify-center text-center p-12"
                  style={{
                    backgroundColor: 'var(--color-warm-white)',
                    border: '1px solid var(--color-dusty-rose-light)',
                    borderRadius: '2px',
                  }}
                >
                  <div className="font-serif text-4xl mb-4" style={{ color: 'var(--color-dusty-rose)' }}>✦</div>
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
                    Hamarosan felveszem Önnel a kapcsolatot. Ha sürgős a megkeresés, hívjon bizalommal
                    telefonon.
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
                    Ha megszólította mindaz, amit olvasott, keressen bizalommal.
                  </p>

                  <div>
                    <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: 'var(--color-stone)' }}>
                      Neve *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.nev}
                      onChange={e => setForm({ ...form, nev: e.currentTarget.value })}
                      style={inputStyle}
                      placeholder="Teljes neve"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: 'var(--color-stone)' }}>
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.currentTarget.value })}
                        style={inputStyle}
                        placeholder="email@cim.hu"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: 'var(--color-stone)' }}>
                        Telefon
                      </label>
                      <input
                        type="tel"
                        value={form.telefon}
                        onChange={e => setForm({ ...form, telefon: e.currentTarget.value })}
                        style={inputStyle}
                        placeholder="+36 ..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: 'var(--color-stone)' }}>
                      Téma *
                    </label>
                    <select
                      value={form.tema}
                      onChange={e => setForm({ ...form, tema: e.currentTarget.value })}
                      style={inputStyle}
                    >
                      <option>Esküvői szertartás</option>
                      <option>Gyásztanácsadás</option>
                      <option>Egyéb</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: 'var(--color-stone)' }}>
                      Üzenet *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.uzenet}
                      onChange={e => setForm({ ...form, uzenet: e.currentTarget.value })}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      placeholder="Írjon néhány sort a megkeresésről..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--color-dusty-rose)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      letterSpacing: '0.12em',
                      fontWeight: 400,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#ad8580')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-dusty-rose)')}
                  >
                    Üzenet küldése
                  </button>

                  <p className="font-sans text-xs text-center" style={{ color: 'var(--color-stone)', fontWeight: 300 }}>
                    Adatait bizalmasan kezelem.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
