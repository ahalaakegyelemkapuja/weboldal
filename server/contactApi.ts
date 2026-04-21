import { type IncomingMessage, type ServerResponse } from 'node:http';
import nodemailer from 'nodemailer';

type InquiryKind = 'funeral' | 'wedding';

type InquiryPayload = {
  kind: InquiryKind;
  nev: string;
  email: string;
  telefon: string;
  tema: string;
  uzenet: string;
};

type RequestWithBody = IncomingMessage & {
  body?: unknown;
};

const defaultRecipientEmail = 'bfodorbiz@gmail.com';

class HttpError extends Error {
  readonly statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.name = 'HttpError';
    this.statusCode = statusCode;
  }
}

let cachedTransporter: nodemailer.Transporter | null = null;
let cachedTransporterKey = '';

function parseBoolean(value: string | undefined, fallbackValue: boolean) {
  if (value === undefined) {
    return fallbackValue;
  }

  return ['1', 'true', 'yes', 'on'].includes(value.toLowerCase());
}

function getSmtpConfig() {
  const smtpUser = process.env.SMTP_USER?.trim() ?? '';
  const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, '') ?? '';
  const smtpHost = process.env.SMTP_HOST?.trim() || (smtpUser.endsWith('@gmail.com') ? 'smtp.gmail.com' : '');
  const smtpPort = Number(process.env.SMTP_PORT?.trim() || '465');
  const smtpSecure = parseBoolean(process.env.SMTP_SECURE?.trim(), smtpPort === 465);

  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new HttpError(
      500,
      'SMTP is not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASS on the server.',
    );
  }

  if (!Number.isFinite(smtpPort) || smtpPort <= 0) {
    throw new HttpError(500, 'SMTP_PORT must be a valid positive number.');
  }

  return {
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    from: process.env.SMTP_FROM?.trim() || smtpUser,
    to: process.env.CONTACT_TO_EMAIL?.trim() || defaultRecipientEmail,
  };
}

function getTransporter() {
  const smtpConfig = getSmtpConfig();
  const transportKey = JSON.stringify(smtpConfig);

  if (!cachedTransporter || cachedTransporterKey !== transportKey) {
    cachedTransporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      auth: smtpConfig.auth,
    });
    cachedTransporterKey = transportKey;
  }

  return {
    transporter: cachedTransporter,
    from: smtpConfig.from,
    to: smtpConfig.to,
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function getInquirySourceLabel(kind: InquiryKind) {
  return kind === 'wedding' ? 'Eskuvoi oldal' : 'Bucsuztatoi kapcsolat';
}

function getInquirySubject(kind: InquiryKind) {
  return kind === 'wedding' ? 'Uj eskuvoi megkereses' : 'Uj bucsuztatasi megkereses';
}

function normalizeField(value: unknown, fieldName: string, required = true) {
  if (typeof value !== 'string') {
    if (!required && (value === undefined || value === null)) {
      return '';
    }
    throw new HttpError(400, `${fieldName} must be a string.`);
  }

  const trimmedValue = value.trim();

  if (required && !trimmedValue) {
    throw new HttpError(400, `${fieldName} is required.`);
  }

  return trimmedValue;
}

function validateInquiryPayload(payload: unknown): InquiryPayload {
  if (!payload || typeof payload !== 'object') {
    throw new HttpError(400, 'Request body must be a JSON object.');
  }

  const data = payload as Record<string, unknown>;
  const kind = normalizeField(data.kind, 'kind') as InquiryKind;

  if (kind !== 'funeral' && kind !== 'wedding') {
    throw new HttpError(400, 'kind must be either funeral or wedding.');
  }

  return {
    kind,
    nev: normalizeField(data.nev, 'nev'),
    email: normalizeField(data.email, 'email'),
    telefon: normalizeField(data.telefon, 'telefon', false),
    tema: normalizeField(data.tema, 'tema'),
    uzenet: normalizeField(data.uzenet, 'uzenet'),
  };
}

async function readJsonBody(req: RequestWithBody) {
  if (req.body !== undefined) {
    if (typeof req.body === 'string') {
      return JSON.parse(req.body) as unknown;
    }

    if (Buffer.isBuffer(req.body)) {
      return JSON.parse(req.body.toString('utf8')) as unknown;
    }

    return req.body;
  }

  const chunks: Buffer[] = [];

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  const rawBody = Buffer.concat(chunks).toString('utf8');

  if (!rawBody) {
    throw new HttpError(400, 'Request body is empty.');
  }

  return JSON.parse(rawBody) as unknown;
}

function sendJson(res: ServerResponse, statusCode: number, body: unknown) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

async function sendInquiryEmail(payload: InquiryPayload) {
  const { transporter, from, to } = getTransporter();
  const subject = getInquirySubject(payload.kind);
  const sourceLabel = getInquirySourceLabel(payload.kind);
  const telefon = payload.telefon || 'Nincs megadva';

  const text = [
    `Forras: ${sourceLabel}`,
    `Nev: ${payload.nev}`,
    `Email: ${payload.email}`,
    `Telefon: ${telefon}`,
    `Tema: ${payload.tema}`,
    '',
    'Uzenet:',
    payload.uzenet,
  ].join('\n');

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #2f2a26;">
      <p><strong>Forras:</strong> ${escapeHtml(sourceLabel)}</p>
      <p><strong>Nev:</strong> ${escapeHtml(payload.nev)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Telefon:</strong> ${escapeHtml(telefon)}</p>
      <p><strong>Tema:</strong> ${escapeHtml(payload.tema)}</p>
      <p><strong>Uzenet:</strong></p>
      <p>${escapeHtml(payload.uzenet).replaceAll('\n', '<br />')}</p>
    </div>
  `;

  const info = await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject,
    text,
    html,
  });

  return {
    messageId: info.messageId,
  };
}

export async function handleContactRequest(req: RequestWithBody, res: ServerResponse) {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.setHeader('Allow', 'POST, OPTIONS');
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    sendJson(res, 405, {
      ok: false,
      error: 'Method not allowed. Use POST.',
    });
    return;
  }

  try {
    const requestBody = await readJsonBody(req);
    const payload = validateInquiryPayload(requestBody);
    const result = await sendInquiryEmail(payload);

    sendJson(res, 200, {
      ok: true,
      ...result,
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      sendJson(res, 400, {
        ok: false,
        error: 'Invalid JSON body.',
      });
      return;
    }

    if (error instanceof HttpError) {
      sendJson(res, error.statusCode, {
        ok: false,
        error: error.message,
      });
      return;
    }

    console.error('Failed to send inquiry email', error);

    sendJson(res, 500, {
      ok: false,
      error: error instanceof Error ? error.message : 'Unknown server error.',
    });
  }
}