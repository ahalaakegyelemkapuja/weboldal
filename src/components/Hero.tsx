import { useHeroGlassReady } from '../useHeroGlassReady';

export default function Hero() {
  const isHeroGlassReady = useHeroGlassReady();

  return (
    <section
      className="relative flex items-center justify-center overflow-visible"
      style={{ height: 'min(max(820px, calc(124svh - 88px)), 984px)' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero.webp)',
          backgroundPosition: '25% center',
          filter: 'brightness(0.9)',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.74) 0%, rgba(120, 120, 120, 0.14) 45%, rgb(246, 240, 234) 100%)',
        }}
      />

      <div
        className="absolute inset-x-0 top-0 z-10 px-6 hero-top-padding"
        style={{ height: 'calc(100svh - 80px)', paddingTop: 'max(12vh, 7rem)' }}
      >
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
              <span style={{ display: 'block', textAlign: 'center' }}>Búcsúzzon el</span>
              <span style={{ display: 'block' }}>hozzátartozójától</span>
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
                <span style={{ display: 'block', textAlign: 'left' }}>{' a szeretetteljes'}</span>
                <span style={{ display: 'block', textAlign: 'center' }}>
                  kedvesség hangján.
                </span>
              </em>
            </h1>
          </div>
        </div>

        <div
          className="text-center hero-cta-row"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: '2.6rem',
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            zIndex: 50,
          }}
        >
          <div className="flex flex-row flex-nowrap justify-center gap-3" style={{ maxWidth: 'min(520px, 100%)', margin: '0 auto', pointerEvents: 'auto' }}>
            <a
              href="#folyamat"
              className={`hero-glass-button funeral-hero-glass ${isHeroGlassReady ? 'hero-glass-button-ready' : ''} font-sans min-w-0 px-7 py-3.5 text-[0.72rem] tracking-widest uppercase transition-all duration-300 sm:px-8 sm:py-4 sm:text-sm`}
              style={{
                color: 'white',
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
              <span className="hero-glass-button-label">Útmutató</span>
            </a>
            <a
              href="#kapcsolat"
              className="font-sans min-w-0 px-7 py-3.5 text-[0.72rem] tracking-widest uppercase transition-all duration-300 sm:px-8 sm:py-4 sm:text-sm"
              style={{
                backgroundColor: 'var(--color-sage)',
                color: 'white',
                letterSpacing: '0.12em',
                fontWeight: 400,
                borderRadius: '2px',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-sage-dark)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-sage)')}
            >
              Kapcsolatfelvétel
            </a>
          </div>

        </div>
      </div>

      <div
        className="absolute z-20 pointer-events-none"
        style={{ top: 0, bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 'min(56rem, 100%)', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
      >
        <div
          className="absolute flex items-center gap-4 partner-floating pointer-events-auto"
          style={{
            top: '39%',
            right: 'clamp(-48px, calc(24.26px - 4.516vw), 8px)',
            transform: 'translateY(-10%) scale(clamp(0.77, calc(119vw / 1400px), 1))',
            transformOrigin: 'right center',
            transition: 'right 260ms ease, transform 260ms ease',
          }}
        >
          <div className="flex flex-col items-center gap-6 partner-logos">
            <img src="/logos/telizold-logo.svg" alt="Télizöld" className="h-12 object-contain" style={{ transform: 'scale(1.2)', filter: 'drop-shadow(0 0px 10px rgba(0, 0, 0, 0.65))' }} />
            <img src="/logos/szigu-logo.svg" alt="SZIGÜ" className="h-12 object-contain" style={{ transform: 'scale(1.2)', filter: 'drop-shadow(0 0px 10px rgba(0, 0, 0, 0.32))' }} />
          </div>
          <div className="partner-label-bubble" style={{ position: 'relative', width: 'fit-content' }}>
            <div
              className="partner-glass-bubble-surface"
              style={{
                position: 'absolute',
                inset: 0,
                padding: '1.35rem 1.8rem',
                border: '1px solid rgba(255, 255, 255, 0.28)',
                borderRadius: '42% 58% 61% 39% / 39% 43% 57% 61%',
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.22), rgba(193, 167, 150, 0.18))',
                backdropFilter: 'blur(10px) saturate(112%)',
                WebkitBackdropFilter: 'blur(10px) saturate(112%)',
                boxShadow: '0 22px 54px rgba(39, 27, 20, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.35)',
              }}
            />
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-28px',
                left: '-30px',
                width: '95px',
                height: '95px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 30%, rgb(180, 179, 116), rgba(255, 255, 255, 0))',
                filter: 'blur(50px)',
                transform: 'translateX(clamp(0px, calc((1200px - 100vw) * 0.28), 82px))',
                pointerEvents: 'none',
              }}
            />
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: '-34px',
                right: '-24px',
                width: '110px',
                height: '110px',
                borderRadius: '52% 48% 36% 64% / 62% 39% 61% 38%',
                background: 'radial-gradient(circle at 35% 35%, rgba(196, 160, 154, 0.42), rgba(196, 160, 154, 0))',
                filter: 'blur(3px)',
                transform: 'translateX(clamp(-150px, calc((100vw - 1200px) * 0.2), 0px))',
                pointerEvents: 'none',
              }}
            />
            <p
              className="relative z-10 font-sans text-xs tracking-widest uppercase text-center"
              style={{ color: 'rgba(30, 28, 28, 0.63)', fontSize: '0.78rem', fontWeight: 400, lineHeight: 1.2, padding: '1.35rem 1.8rem', margin: 0 }}
            >
              Hivatalos<br />Télizöld és SZIGÜ<br />partner
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
