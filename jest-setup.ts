import '@testing-library/react-native/extend-expect';
import './msw.polyfill';
import {jest} from '@jest/globals';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import geolocationMock from './mocks/geolocationMock.ts';
jest.doMock('@react-native-community/geolocation', () => geolocationMock);

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('app-info-package', () => {});
jest.mock('save-file-picker-package', () => {});
