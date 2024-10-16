import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';
import React from 'react';
import {WeatherDetailsScreen} from './screens/WeatherDetails.tsx';
import {ForecastItem} from './services/types/Weather.ts';
import {Login} from './screens/Login.tsx';
import {useAuth} from './context/AuthContext.tsx';

import {HomeTabsParamList, TabsRouter} from './routers/TabsRouter.tsx';
import {LogoutButton} from './components/LogoutButton.tsx';
import {CurrentLocationButton} from './components/CurrentLocationButton.tsx';

const Stack = createNativeStackNavigator<AppStackParamList>();

export type AppStackParamList = {
  Tabs: NavigatorScreenParams<HomeTabsParamList>;
  Details: ForecastItem;
  Login: undefined;
};

export type AppStackNavigationProps =
  NativeStackNavigationProp<AppStackParamList>;

export const AppRouter = () => {
  const auth = useAuth();

  return (
    <Stack.Navigator initialRouteName="Tabs">
      {auth.isLoggedIn ? (
        <>
          <Stack.Screen
            options={{
              title: 'Weather',
              headerRight: LogoutButton,
              headerLeft: CurrentLocationButton,
            }}
            name="Tabs"
            component={TabsRouter}
          />
          <Stack.Screen name="Details" component={WeatherDetailsScreen} />
        </>
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};
