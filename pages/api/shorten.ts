import { NextApiRequest, NextApiResponse } from 'next';

export default async function shorten(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { url } = JSON.parse(req.body);
  try {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`).then((response) => response.json());
    return res.status(200).json({ response });
  } catch (err) {
    return res.status(500).json({ message: 'An error occurred', err });
  }
}
