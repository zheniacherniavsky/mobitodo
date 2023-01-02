import { ApplicationContext } from 'contexts';
import {
  Box,
  CheckIcon,
  ChevronDownIcon,
  FormControl,
  Select,
  useColorMode,
} from 'native-base';
import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

const SettingsForm = () => {
  const { colorMode } = useColorMode();
  const { locale, setLocale = () => {} } = useContext(ApplicationContext);

  return (
    <Box
      p={4}
      borderRadius={'md'}
      bg={colorMode === 'dark' ? 'coolGray.900' : 'warmGray.200'}
    >
      <FormControl>
        <FormControl.Label mt={0}>
          <FormattedMessage id="settingsLanguage" defaultMessage={'Language'} />
        </FormControl.Label>
        <Select
          maxW={150}
          selectedValue={locale}
          _selectedItem={{
            bg: 'primary.900',
            endIcon: <CheckIcon size={5} />,
          }}
          onValueChange={setLocale}
          dropdownIcon={<ChevronDownIcon mr={3} />}
        >
          <Select.Item label="English" value="en" />
          <Select.Item label="Belarus" value="ru" />
          <Select.Item label="Ukraine" value="uk" />
        </Select>
      </FormControl>
    </Box>
  );
};

export default SettingsForm;
