/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useMemo } from 'react';
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
import { ApplicationContext } from 'contexts';
import { useUserLVL } from 'hooks/useUserLVL';
import { useLocales } from 'hooks/useLocales';

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

const BootstrapApp = () => {
  const {
    userLVL,
    userXP,
    addUserXP,
    userCompletedTodos,
    increaseUserCompletedTodosCount,
    isFetched: isUserLvlFetched,
  } = useUserLVL();

  const {
    locale,
    setLocale,
    defaultLocale,
    currentTranslation,
    isFetched: isLocalesFetched,
  } = useLocales();

  const isLoaded = useMemo(
    () => isLocalesFetched && isUserLvlFetched,
    [isLocalesFetched, isUserLvlFetched]
  );

  const theme = extendTheme({
    config: {
      initialColorMode: 'dark',
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        {!isLoaded ? (
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
                userStats: {
                  userLVL,
                  userXP,
                  addUserXP,
                  userCompletedTodos,
                  increaseUserCompletedTodosCount,
                },
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
