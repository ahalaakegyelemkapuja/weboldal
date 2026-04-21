import type { IncomingMessage, ServerResponse } from 'node:http';
import { handleContactRequest } from '../server/contactApi';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  await handleContactRequest(req, res);
}