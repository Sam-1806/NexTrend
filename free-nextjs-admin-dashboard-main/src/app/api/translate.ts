import type { NextApiRequest, NextApiResponse } from 'next';
import { translateText } from '@/app/utils/translate';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { text, targetLanguage } = req.body;

  if (!text || !targetLanguage) {
    res.status(400).json({ error: 'Text and target language are required' });
    return;
  }

  try {
    const translatedText = await translateText(text, targetLanguage);
    res.status(200).json({ translatedText });
  } catch (error) {
    res.status(500).json({ error: 'Translation failed' });
  }
}
