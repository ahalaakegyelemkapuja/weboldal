import { useState } from 'react';
import { buildInquiryDraftLinks, submitInquiryForm } from '../contactForm';

export default function Contact() {
  const initialForm = { nev: '', email: '', telefon: '', tema: 'Temetési szertartás', uzenet: '' };
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const draftLinks = buildInquiryDraftLinks(form, 'funeral');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const result = await submitInquiryForm(form, 'funeral');
      console.log('FormSubmit success', result);
      setSent(true);
      setForm(initialForm);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'ismeretlen hiba';
      setSubmitError(
        `Az uzenet kuldese nem sikerult. Kerem probalja ujra, vagy irjon a bfodorbiz@gmail.com cimre. (${message})`
      );
      console.error('FormSubmit failed', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
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
              style={{ color: 'var(--color-sage)' }}
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
                      border: '1px solid var(--color-sage-light)',
                      color: 'var(--color-sage)',
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
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-sage-dark)')}
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
                  border: '1px solid var(--color-sage-light)',
                  borderRadius: '2px',
                }}
              >
                <div className="font-serif text-4xl mb-4" style={{ color: 'var(--color-sage)' }}>✦</div>
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
                    onChange={e => setForm({ ...form, nev: e.target.value })}
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
                      onChange={e => setForm({ ...form, email: e.target.value })}
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
                      onChange={e => setForm({ ...form, telefon: e.target.value })}
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
                    onChange={e => setForm({ ...form, tema: e.target.value })}
                    style={inputStyle}
                  >
                    <option>Temetési szertartás</option>
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
                    onChange={e => setForm({ ...form, uzenet: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    placeholder="Írjon néhány sort a megkeresésről..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--color-sage)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '2px',
                    cursor: isSubmitting ? 'wait' : 'pointer',
                    letterSpacing: '0.12em',
                    fontWeight: 400,
                    opacity: isSubmitting ? 0.8 : 1,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-sage-dark)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-sage)')}
                >
                  {isSubmitting ? 'Kuldes...' : 'Üzenet küldése'}
                </button>

                {submitError ? (
                  <>
                    <p className="font-sans text-xs text-center" style={{ color: '#9f4a4a', fontWeight: 300 }}>
                      {submitError}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <a
                        href={draftLinks.gmailHref}
                        target="_blank"
                        rel="noreferrer"
                        className="font-sans text-xs tracking-widest uppercase"
                        style={{ color: 'var(--color-sage-dark)', fontWeight: 400 }}
                      >
                        Megnyitás Gmailben
                      </a>
                      <a
                        href={draftLinks.mailtoHref}
                        className="font-sans text-xs tracking-widest uppercase"
                        style={{ color: 'var(--color-sage-dark)', fontWeight: 400 }}
                      >
                        Megnyitás e-mailben
                      </a>
                    </div>
                  </>
                ) : null}

                <p className="font-sans text-xs text-center" style={{ color: 'var(--color-stone)', fontWeight: 300 }}>
                  Adatait bizalmasan kezelem.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
