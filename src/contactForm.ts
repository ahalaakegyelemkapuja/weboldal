export type InquiryFormData = {
  nev: string;
  email: string;
  telefon: string;
  tema: string;
  uzenet: string;
};

export type InquiryKind = 'funeral' | 'wedding';

const recipientEmail = 'bfodorbiz@gmail.com';
const contactApiEndpoint = '/api/contact';

export function buildInquiryDraftLinks(formData: InquiryFormData, inquiryKind: InquiryKind) {
  const subject = inquiryKind === 'wedding' ? 'Esküvői megkeresés' : 'Búcsúztatási megkeresés';
  const body = [
    `Név: ${formData.nev || '-'}`,
    `E-mail: ${formData.email || '-'}`,
    `Telefon: ${formData.telefon || '-'}`,
    `Téma: ${formData.tema || '-'}`,
    '',
    'Üzenet:',
    formData.uzenet || '-',
  ].join('\n');

  const query = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: recipientEmail,
    su: subject,
    body,
  });

  return {
    gmailHref: `https://mail.google.com/mail/?${query.toString()}`,
    mailtoHref: `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };
}

export async function submitInquiryForm(formData: InquiryFormData, inquiryKind: InquiryKind) {
  const response = await fetch(contactApiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      kind: inquiryKind,
      nev: formData.nev,
      email: formData.email,
      telefon: formData.telefon,
      tema: formData.tema,
      uzenet: formData.uzenet,
    }),
  });

  let payload: unknown = null;
  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok) {
    const errorText =
      typeof payload === 'object' && payload !== null && 'error' in payload
        ? String((payload as { error: unknown }).error)
        : response.statusText;
    throw new Error(`Mail API error ${response.status}: ${errorText || 'Unknown error'}`);
  }

  return {
    status: response.status,
    payload,
  };
}