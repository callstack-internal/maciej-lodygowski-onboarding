import '@testing-library/react-native/extend-expect';
import {cleanup} from '@testing-library/react-native';
import {afterEach} from '@jest/globals';
import './msw.polyfill';

afterEach(() => {
  cleanup();
});
