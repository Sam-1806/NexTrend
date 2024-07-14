import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;
const url = 'https://translation.googleapis.com/language/translate/v2';

export const translateText = async (text: string, targetLanguage: string) => {
  try {
    const response = await axios.post(url, {}, {
      params: {
        q: text,
        target: targetLanguage,
        key: apiKey
      }
    });
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    throw new Error('Translation API error');
  }
};
