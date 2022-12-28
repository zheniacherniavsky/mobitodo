import React from 'react';
import { Text } from 'react-native';
import { FormattedMessage } from 'react-intl';

const HelloWorld = () => {
  return (
    <Text>
      <FormattedMessage id="helloWorldMessage" defaultMessage="Hello World" />
    </Text>
  );
};

export default HelloWorld;
