import SettingsForm from 'components/settingsForm';
import { Box, useColorMode } from 'native-base';
import React from 'react';

const Settings = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      flex={1}
      bg={colorMode === 'dark' ? 'coolGray.800' : 'warmGray.50'}
      p={4}
    >
      <SettingsForm />
    </Box>
  );
};

export default Settings;
