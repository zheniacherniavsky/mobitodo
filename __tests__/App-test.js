/**
 * @format
 */

import 'react-native';

import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer, { act } from 'react-test-renderer';
jest.mock('react-native-gesture-handler', () => {});

it('renders correctly', async () => {
  await act(async () => {
    renderer.create(<App />);
  });
});
