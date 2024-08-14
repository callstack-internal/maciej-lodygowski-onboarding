import {NativeModules, Platform} from 'react-native';

const LINKING_ERROR =
  "The package 'react-native-expose-location' doesn't seem to be linked. Make sure: \n\n" +
  Platform.select({ios: "- You have run 'pod install'\n", default: ''}) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const ExposeLocationModule = isTurboModuleEnabled
  ? require('./NativeExposeLocation').default
  : NativeModules.ExposeLocation;

const ExposeLocation = ExposeLocationModule
  ? ExposeLocationModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      },
    );

export function getCurrentLocation(): Promise<ILocation> {
  return ExposeLocation.getCurrentLocation();
}

export function requestLocationPermission(): Promise<boolean> {
  return ExposeLocation.requestLocationPermission();
}

export interface ILocation {
  latitude: number;
  longitude: number;
}
