/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { IntlProvider } from 'react-intl';
import HelloWorld from './src/components/helloWorld';

const App = () => {
  const locale = 'en-US';
  const defaultLocale = 'en';

  const translations = {
    en: require('./src/assets/lang/en.json'),
    ru: require('./src/assets/lang/ru.json'),
  };

  const getCurrentTranslation = (selectedLocale) => {
    const lang = selectedLocale.split(/[-_]/)[0];
    const messages = translations[lang] ?? translations[defaultLocale];
    return messages;
  };

  return (
    <IntlProvider
      textComponent={Text}
      messages={getCurrentTranslation(locale)}
      locale={locale}
      defaultLocale={defaultLocale}
    >
      <SafeAreaView>
        <StatusBar />
        <HelloWorld />
      </SafeAreaView>
    </IntlProvider>
  );
};

export default App;
