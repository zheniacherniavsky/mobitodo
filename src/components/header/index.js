import {
  Box,
  Divider,
  Flex,
  MoonIcon,
  Pressable,
  Progress,
  SunIcon,
  Text,
  useColorMode,
  useColorModeValue,
} from 'native-base';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const changeColorIcon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <Box bg={colorMode === 'dark' ? 'coolGray.900' : 'warmGray.200'} pb={4}>
      <Flex
        direction="row"
        px={4}
        h="12"
        alignItems={'center'}
        justifyContent="space-between"
      >
        <Flex direction="row" w={100} h="5">
          <Text fontSize={'sm'}>LVL 89</Text>
          <Divider
            bg="emerald.500"
            thickness="2"
            mx="1"
            orientation="vertical"
          />
          <Text fontSize={'sm'}>29</Text>
        </Flex>
        <Flex alignSelf={'center'}>
          <Text fontSize={'xl'}>
            <FormattedMessage id="applicationName" defaultMessage="Mobitodo" />
          </Text>
        </Flex>
        <Box w={100} alignItems="flex-end">
          <Pressable onPress={toggleColorMode}>{changeColorIcon}</Pressable>
        </Box>
      </Flex>
      <Box w="100%">
        <Progress value={45} mx={'4'} colorScheme={'success'} />
      </Box>
    </Box>
  );
};

export default Header;
