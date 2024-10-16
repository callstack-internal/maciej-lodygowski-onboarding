import {jest} from '@jest/globals';
export default {
  getCurrentPosition: jest.fn((success: (result: any) => void, error) => {
    success({
      coords: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    });
  }),
  watchPosition: jest.fn(),
  clearWatch: jest.fn(),
  stopObserving: jest.fn(),
};
