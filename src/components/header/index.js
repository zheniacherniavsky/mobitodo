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
        alignItems={'center'}
        justifyContent="space-between"
      >
        <Box w={100}>
          <Text fontSize={'md'}>LVL 1</Text>
        </Box>
        <Box>
          <Text fontSize={'xl'}>Mobitodo</Text>
        </Box>
        <Box w={100} alignItems="flex-end">
          <Pressable onPress={toggleColorMode}>{changeColorIcon}</Pressable>
        </Box>
      </HStack>
      <Box w="100%">
        <Progress value={45} mx={'4'} colorScheme={'success'} />
      </Box>
    </Box>
  );
};

export default Header;
