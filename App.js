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
import {
  Box,
  extendTheme,
  NativeBaseProvider,
  useColorMode,
} from 'native-base';
import Header from 'components/header';
import Todos from 'pages/todos';
import Footer from 'components/footer';
import Settings from 'pages/settings';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <StatusBar
        backgroundColor={colorMode === 'light' ? 'white' : 'black'}
        barStyle={colorMode === 'light' ? 'dark-content' : 'light-content'}
      />
      <Box
        safeArea
        flex={1}
        bg={colorMode === 'dark' ? 'coolGray.900' : 'warmGray.200'}
      >
        <Header />
        <Stack.Navigator initialRouteName="Todos">
          <Stack.Screen
            name="Todos"
            component={Todos}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <Footer />
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

  const theme = extendTheme({
    config: {
      initialColorMode: 'dark',
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <IntlProvider
          textComponent={Text}
          messages={getCurrentTranslation(locale)}
          locale={locale}
          defaultLocale={defaultLocale}
        >
          <App />
        </IntlProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default bootstrapApp;
