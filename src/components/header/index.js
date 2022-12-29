import {
  Box,
  HStack,
  MoonIcon,
  Pressable,
  Progress,
  SunIcon,
  Text,
  useColorMode,
  useColorModeValue,
} from 'native-base';
import React from 'react';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const changeColorIcon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <Box bg={colorMode === 'dark' ? 'coolGray.800' : 'warmGray.50'}>
      <HStack
        px={4}
        h="12"
        alignItems="center"
        justifyContent={'space-between'}
      >
        <Text fontSize={'md'} fontWeight="bold">
          LVL 1
        </Text>
        <Box w="80%">
          <Progress value={45} mx={'4'} colorScheme={'success'} />
        </Box>
        <Pressable onPress={toggleColorMode}>{changeColorIcon}</Pressable>
      </HStack>
    </Box>
  );
};

export default Header;
