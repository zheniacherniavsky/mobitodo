/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useMemo, useState } from 'react';
import { StatusBar } from 'react-native';
import { IntlProvider } from 'react-intl';
import {
  Box,
  Center,
  extendTheme,
  NativeBaseProvider,
  Spinner,
  useColorMode,
  Text,
  VStack,
} from 'native-base';
import Header from 'components/header';
import Todos from 'pages/todos';
import Footer from 'components/footer';
import Settings from 'pages/settings';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-community/async-storage';
import { ApplicationContext } from 'contexts';

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

const LoadingApp = () => {
  const { colorMode } = useColorMode();

  return (
    <Center
      flex={1}
      bg={colorMode === 'dark' ? 'coolGray.900' : 'warmGray.200'}
    >
      <VStack space={4}>
        <Spinner size={'lg'} />
        <Text fontSize={'lg'}>Mobitodo</Text>
      </VStack>
    </Center>
  );
};

const supportedLanguages = ['en', 'ru', 'uk'];

const BootstrapApp = () => {
  const [locale, setLocale] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const defaultLocale = 'en';

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

      setIsLoading(false);
    };

    fetchLocale();
  }, [locale, defaultLocale]);

  const translations = useMemo(
    () => ({
      en: require('./src/assets/lang/en.json'),
      ru: require('./src/assets/lang/ru.json'),
      uk: require('./src/assets/lang/uk.json'),
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

  const theme = extendTheme({
    config: {
      initialColorMode: 'dark',
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        {isLoading ? (
          <LoadingApp />
        ) : (
          <IntlProvider
            textComponent={Text}
            messages={currentTranslation}
            locale={locale}
            defaultLocale={defaultLocale}
          >
            <ApplicationContext.Provider
              value={{
                locale,
                setLocale,
              }}
            >
              <App />
            </ApplicationContext.Provider>
          </IntlProvider>
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default BootstrapApp;
