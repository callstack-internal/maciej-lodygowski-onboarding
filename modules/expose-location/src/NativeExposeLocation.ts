import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  requestLocationPermission(): Promise<boolean>;
  getCurrentLocation(): Promise<object>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('ExposeLocation');
