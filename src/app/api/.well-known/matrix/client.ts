import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ 'm.homeserver': { base_url: 'https://socialserver.sequoiasupport.com' } });
}
