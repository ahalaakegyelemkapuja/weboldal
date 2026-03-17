export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: 'calc(100svh - 88px)' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-flowers.jpg)',
          filter: 'brightness(0.85)',
        }}
      />

      {/* Gradient overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <span className="ornament">✦</span>
        </div>

        <h1
          className="font-serif animate-fade-in-up mt-4"
          style={{
            fontSize: 'clamp(2.45rem, 6.3vw, 5.2rem)',
            color: 'white',
            fontWeight: 300,
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
            animationDelay: '0.2s',
            opacity: 0,
          }}
        >
          Méltóságteljes búcsú,
          <br />
          <em style={{ fontStyle: 'italic', color: 'white' }}>személyre szabva</em>
        </h1>

        <div className="section-divider mt-8 mb-8 animate-fade-in-up delay-400" style={{ opacity: 0 }} />

        <p
          className="font-sans animate-fade-in-up delay-400 mx-auto"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: 'white',
            fontWeight: 300,
            maxWidth: '560px',
            marginTop: '50px',
            lineHeight: 1.8,
            opacity: 0,
          }}
        >
          Segítek megőrizni szerettük egyedi élettörténetét — egy vallástól független,
          emberközpontú szertartás keretében, ahol minden szó az Önök emlékeiből születik.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-[90px] animate-fade-in-up delay-600" style={{ opacity: 0 }}>
          <a
            href="#kapcsolat"
            className="font-sans px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
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
          <a
            href="#folyamat"
            className="font-sans px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            style={{
              border: '1px solid var(--color-stone-light)',
              color: 'var(--color-charcoal)',
              letterSpacing: '0.12em',
              fontWeight: 400,
              borderRadius: '2px',
              backgroundColor: 'rgba(250,247,242,0.7)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--color-gold)';
              e.currentTarget.style.color = 'var(--color-gold)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--color-stone-light)';
              e.currentTarget.style.color = 'var(--color-charcoal)';
            }}
          >
            Hogyan dolgozom
          </a>
        </div>

      </div>
    </section>
  );
}
