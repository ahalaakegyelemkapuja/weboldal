const partners = [
  {
    name: 'Kovács Anikó',
    note: 'Saját logó',
    src: '/logos/aniko-logo.svg',
  },
  {
    name: 'Télizöld',
    note: 'Hivatalos partner',
    src: '/logos/telizold-logo.svg',
  },
  {
    name: 'SZIGÜ',
    note: 'Hivatalos partner',
    src: '/logos/szigu-logo.svg',
  },
];

export default function PartnerStrip() {
  return (
    <section
      className="py-10 px-6"
      style={{ backgroundColor: 'var(--color-warm-white)', borderTop: '1px solid rgba(184,151,90,0.08)', borderBottom: '1px solid rgba(184,151,90,0.08)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p
            className="font-sans text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--color-sage)' }}
          >
            Partnerkapcsolatok
          </p>
          <p
            className="font-sans text-sm"
            style={{ color: 'var(--color-stone-dark)', fontWeight: 300, lineHeight: 1.8 }}
          >
            Hivatalos Télizöld és SZIGÜ partner.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 md:gap-8">
          {partners.map(partner => (
            <div
              key={partner.name}
              className="p-6 flex flex-col items-center justify-center text-center"
              style={{
                backgroundColor: 'var(--color-cream)',
                border: '1px solid rgba(184,151,90,0.12)',
                borderRadius: '2px',
                minHeight: '138px',
              }}
            >
              <img
                src={partner.src}
                alt={partner.name}
                className="max-h-12 object-contain mb-4"
                onError={e => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
              <p
                className="font-serif"
                style={{ color: 'var(--color-charcoal)', fontSize: '1.2rem', fontWeight: 400 }}
              >
                {partner.name}
              </p>
              <p
                className="font-sans text-[0.68rem] tracking-[0.18em] uppercase mt-2"
                style={{ color: 'var(--color-stone)' }}
              >
                {partner.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
