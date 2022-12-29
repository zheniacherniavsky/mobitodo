import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text, Center } from 'native-base';

const HelloWorld = () => {
  return (
    <Center>
      <Text bg={'primary.100'}>
        <FormattedMessage id="helloWorldMessage" defaultMessage="Hello World" />
      </Text>
    </Center>
  );
};

export default HelloWorld;
