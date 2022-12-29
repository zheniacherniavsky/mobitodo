/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, Text } from 'react-native';
import { IntlProvider } from 'react-intl';
import { Box, NativeBaseProvider, useColorMode } from 'native-base';
import Header from 'components/header';

const App = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <StatusBar
        backgroundColor={colorMode === 'light' ? 'white' : 'black'}
        barStyle={colorMode === 'light' ? 'dark-content' : 'light-content'}
      />
      <Box flex={1} bg={colorMode === 'dark' ? 'coolGray.800' : 'warmGray.50'}>
        <Box safeArea>
          <Header />
        </Box>
      </Box>
    </>
  );
};

const bootstrapApp = () => {
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
    <NativeBaseProvider>
      <IntlProvider
        textComponent={Text}
        messages={getCurrentTranslation(locale)}
        locale={locale}
        defaultLocale={defaultLocale}
      >
        <App />
      </IntlProvider>
    </NativeBaseProvider>
  );
};

export default bootstrapApp;
