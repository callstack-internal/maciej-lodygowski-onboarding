import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/Home.tsx';
import React from 'react';
import {WeatherDetailsScreen} from './screens/WeatherDetails.tsx';
import {ForecastItem} from './services/types/Weather.ts';

const Stack = createNativeStackNavigator<AppStackParamList>();

export type AppStackParamList = {
  Home: undefined;
  Details: ForecastItem;
};

export type AppStackNavigationProps =
  NativeStackNavigationProp<AppStackParamList>;

export const AppRouter = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{title: 'Weather'}}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="Details" component={WeatherDetailsScreen} />
    </Stack.Navigator>
  );
};
