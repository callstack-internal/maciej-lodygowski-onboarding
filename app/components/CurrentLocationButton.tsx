import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  getCurrentLocation,
  requestLocationPermission,
} from 'react-native-expose-location';
import React from 'react';
import {useCurrentLocation} from '../context/CurrentLocationContext.tsx';
import {Color} from '../styles/color.ts';

export const CurrentLocationButton = () => {
  const {setLocation} = useCurrentLocation();
  return (
    <TouchableOpacity
      onPress={async () => {
        const result = await requestLocationPermission();
        if (result) {
          const location = await getCurrentLocation();
          setLocation(location);
        }
      }}>
      <Icon name="gps-fixed" size={20} color={Color.Primary} />
    </TouchableOpacity>
  );
};
