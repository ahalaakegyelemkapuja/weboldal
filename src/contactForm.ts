export type InquiryFormData = {
  nev: string;
  email: string;
  telefon: string;
  tema: string;
  uzenet: string;
};

export type InquiryKind = 'funeral' | 'wedding';

const fallbackRecipientEmail = 'kovacs.aniko.szertartasvezeto@gmail.com';
const contactApiEndpoint = '/api/contact';

function extractErrorText(payload: unknown) {
  if (typeof payload === 'string') {
    return payload;
  }

  if (!payload || typeof payload !== 'object') {
    return '';
  }

  if ('error' in payload) {
    const nestedError = (payload as { error: unknown }).error;

    if (typeof nestedError === 'string') {
      return nestedError;
    }

    if (nestedError && typeof nestedError === 'object') {
      if ('message' in nestedError && typeof (nestedError as { message?: unknown }).message === 'string') {
        return (nestedError as { message: string }).message;
      }

      try {
        return JSON.stringify(nestedError);
      } catch {
        return String(nestedError);
      }
    }

    return String(nestedError);
  }

  if ('message' in payload && typeof (payload as { message?: unknown }).message === 'string') {
    return (payload as { message: string }).message;
  }

  try {
    return JSON.stringify(payload);
  } catch {
    return String(payload);
  }
}

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
    to: fallbackRecipientEmail,
    su: subject,
    body,
  });

  return {
    gmailHref: `https://mail.google.com/mail/?${query.toString()}`,
    mailtoHref: `mailto:${fallbackRecipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
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
  let rawText = '';
  try {
    rawText = await response.text();
    payload = rawText ? JSON.parse(rawText) : null;
  } catch {
    payload = rawText || null;
  }

  if (!response.ok) {
    const errorText = extractErrorText(payload) || response.statusText;
    throw new Error(`Mail API error ${response.status}: ${errorText || 'Unknown error'}`);
  }

  return {
    status: response.status,
    payload,
  };
}