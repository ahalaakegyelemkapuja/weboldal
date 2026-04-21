import { useEffect, useMemo, useState } from 'react';

const testimonials = [
  '„Nagyon köszönöm Anikó a mai munkáját. Pont így képzeltem el, nagyon szépen beszélt.”',
  '„Kedves Anikó! Szeretnénk megköszönni a szép beszédet és a szertartásvezetést. Utólag a család minden tagjával azt beszéltük, hogy mennyire megérintett mindenkit, hogy ennyire szívhez szólóan vezette a búcsúztatót. Az Ön kedves, nyugodt, lágy hangja nagyon hozzájárult ahhoz, hogy méltón búcsúzzunk Édesapámtól. A beszéd minden pillanatában érezhető volt az Ön figyelmessége, gondossága. Hálásak vagyunk.”',
  '„Nagyon köszönöm a közreműködését Szüleim hamvainak elhelyezésénél. Örülök, hogy megismerkedhettem Önnel, és segített nekem, nekünk ennek a nagyon nehéz eseménynek a méltó lebonyolításában.”',
  '„Igazán ritka felemelő beszéd és szertartás volt.”',
  '„Kedves Anikó! Szeretném megköszönni az anyukám temetésén tartott beszédet! Nagyon megindító és hozzá illő volt. Bárkivel beszéltem, külön kiemelte Önt, de nem volt rá szükség, tisztában voltam vele, mennyivel és mennyire hozzájárult a temetés méltó lebonyolításához. Nagyon hálás vagyok!”',
  '„The ceremony was beautifully done.”',
  '„Kedves Anikó! Szeretném még egyszer megköszönni, hogy segített igazán széppé és meghitté tenni a mai napot mindannyiunk számára. Tökéletes volt a búcsú szövege és gyönyörű volt, ahogy elmondta - több vendég is külön kiemelte ezt az elköszönésnél.”',
  '„Kedves Anikó! Csodálatos, amit írt. Köszönjük szépen, mindenkinek tetszett. A búcsúztató szöveg az idézetekkel tökéletes.”',
];

const DESKTOP_BREAKPOINT = 1100;
const SCROLL_DURATION = 60; // seconds
const SECOND_LIST_START = 4; // start from "Kedves Anikó! Szeretném megköszönni az anyukám temetésén..."
const LIST_COPIES = 3;

function duplicateList(items: string[]) {
  return Array.from({ length: LIST_COPIES }, () => items).flat();
}

export default function Testimonials() {
  const [isWide, setIsWide] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.innerWidth >= DESKTOP_BREAKPOINT;
  });
  const [pauseCount, setPauseCount] = useState(0);
  const isPaused = pauseCount > 0;

  const beginInteraction = () => {
    setPauseCount((value) => value + 1);
  };

  const endInteraction = () => {
    setPauseCount((value) => Math.max(0, value - 1));
  };

  const columnTestimonials = useMemo(() => {
    const firstPass = testimonials;
    const secondPass = [
      ...testimonials.slice(SECOND_LIST_START),
      ...testimonials.slice(0, SECOND_LIST_START),
    ];

    return isWide
      ? [
          duplicateList(firstPass),
          duplicateList(secondPass),
        ]
      : [duplicateList(firstPass)];
  }, [isWide]);

  useEffect(() => {
    const updateLayout = () => {
      setIsWide(window.innerWidth >= DESKTOP_BREAKPOINT);
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);

    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  return (
    <section
      id="visszajelzesek"
      className="py-13 px-6"
      style={{ backgroundColor: 'var(--color-warm-white)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p
            className="font-sans text-xs tracking-widest uppercase mb-4"
            style={{ color: 'var(--color-sage)' }}
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
            }}
          >
            Akik már megtiszteltek bizalmukkal
          </h2>
          <div className="section-divider" style={{ margin: '1.3rem auto 1.5rem' }} />
        </div>

        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: isWide ? 'repeat(2, minmax(0, 1fr))' : 'minmax(0, 1fr)',
            alignItems: 'start',
          }}
        >
          {columnTestimonials.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="testimonials-viewport hide-scrollbar"
              style={{
                height: isWide ? '34rem' : '32rem',
                overflow: 'hidden',
              }}
              onTouchStart={beginInteraction}
              onTouchEnd={endInteraction}
              onTouchCancel={endInteraction}
            >
              <div
                className="testimonial-scroll-list"
                style={{
                  animation: `scrollUp ${SCROLL_DURATION}s linear infinite`,
                  animationPlayState: isPaused ? 'paused' : 'running',
                }}
              >
                <div className="flex flex-col gap-5 px-1 py-5 md:px-2">
                  {column.map((text, index) => (
                    <article
                      key={`${columnIndex}-${index}`}
                      className="relative rounded-sm px-6 py-6"
                      style={{
                        backgroundColor: 'var(--color-cream)',
                        border: '1px solid rgba(184, 151, 90, 0.1)',
                        minHeight: 'fit-content',
                      }}
                    >
                      <p
                        className="font-sans"
                        style={{
                          color: 'var(--color-stone-dark)',
                          fontWeight: 300,
                          lineHeight: 1.85,
                          fontSize: '0.95rem',
                          fontStyle: 'italic',
                          margin: 0,
                          paddingRight: '2rem',
                        }}
                      >
                        {text}
                      </p>

                      <div
                        className="font-serif absolute bottom-3 right-4"
                        style={{
                          fontSize: '3.25rem',
                          color: 'var(--color-sage-light)',
                          lineHeight: 1,
                          opacity: 0.3,
                        }}
                      >
                        „
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
