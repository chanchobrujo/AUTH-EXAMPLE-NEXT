import {getSession} from 'next-auth/react';
import type {NextApiRequest, NextApiResponse} from 'next';
import {ErrorResponse, MessageResponse} from 'models/Response';

export default async function handler(req: NextApiRequest, res: NextApiResponse<MessageResponse | ErrorResponse>) {
  const session = await getSession({req});
  if (!session) res.status(403).json({message: 'No autorizado', error: 403});

  res.status(200).json({message: 'Hola mi rey'});
}
