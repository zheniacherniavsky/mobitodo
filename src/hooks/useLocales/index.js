import AsyncStorage from '@react-native-community/async-storage';
import { useEffect, useMemo, useState } from 'react';

const supportedLanguages = ['en', 'ru', 'uk'];

export const useLocales = () => {
  const [locale, setLocale] = useState(null);
  const defaultLocale = 'en';
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const fetchLocale = async () => {
      const savedLocale = await AsyncStorage.getItem('locale');

      if (!locale) {
        if (savedLocale && supportedLanguages.includes(savedLocale)) {
          setLocale(savedLocale);
        } else {
          await AsyncStorage.setItem('locale', defaultLocale);
          setLocale(defaultLocale);
        }
      } else if (savedLocale !== locale) {
        await AsyncStorage.setItem('locale', locale);
      }

      setIsFetched(true);
    };

    fetchLocale();
  }, [locale, defaultLocale]);

  const translations = useMemo(
    () => ({
      en: require('../../assets/lang/en.json'),
      ru: require('../../assets/lang/ru.json'),
      uk: require('../../assets/lang/uk.json'),
    }),
    []
  );

  const currentTranslation = useMemo(() => {
    if (locale) {
      const lang = locale.split(/[-_]/)[0];
      const messages = translations[lang] ?? translations[defaultLocale];
      return messages;
    }

    return {};
  }, [locale, translations]);

  return { locale, setLocale, defaultLocale, currentTranslation, isFetched };
};
