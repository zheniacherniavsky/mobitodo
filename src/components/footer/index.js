import { useNavigation } from '@react-navigation/native';
import {
  Box,
  Text,
  Center,
  HStack,
  PlayIcon,
  Pressable,
  useColorMode,
  CheckIcon,
} from 'native-base';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

const MY_TODOS_TAB = 1;
const SETTINGS_TAB = 2;

const Footer = () => {
  const { colorMode } = useColorMode();
  const [selected, setSelected] = useState(MY_TODOS_TAB);

  const navigation = useNavigation();

  const handleMyTodosPress = () => {
    setSelected(MY_TODOS_TAB);
    navigation.navigate('Todos');
  };

  const handleSettingsPress = () => {
    setSelected(SETTINGS_TAB);
    navigation.navigate('Settings');
  };

  return (
    <Box
      bg={colorMode === 'dark' ? 'coolGray.900' : 'warmGray.200'}
      h={'64px'}
      width={'100%'}
      position={'relative'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <HStack
        alignItems={'center'}
        justifyContent={'space-evenly'}
        width={'60%'}
      >
        <Pressable
          onPress={handleMyTodosPress}
          opacity={selected === MY_TODOS_TAB ? 1 : 0.3}
        >
          <Center>
            <PlayIcon />
            <Text>
              <FormattedMessage id="footerTodos" defaultMessage={'Todos'} />
            </Text>
          </Center>
        </Pressable>
        <Pressable
          onPress={handleSettingsPress}
          opacity={selected === SETTINGS_TAB ? 1 : 0.3}
        >
          <Center>
            <CheckIcon />
            <Text>
              <FormattedMessage
                id="footerSettings"
                defaultMessage={'Settings'}
              />
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default Footer;
