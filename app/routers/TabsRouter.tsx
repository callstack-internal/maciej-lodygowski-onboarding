import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/Home.tsx';
import {WeatherMap} from '../screens/WeatherMap.tsx';
import {StorageView} from '../screens/Storage.tsx';
import React from 'react';
import {
  CustomModulesStack,
  ModulesStackParamList,
} from './CustomModulesRouter.tsx';
import {NavigatorScreenParams} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export type HomeTabsParamList = {
  Home: undefined;
  Map: undefined;
  Storage: undefined;
  Custom: NavigatorScreenParams<ModulesStackParamList>;
};

export type HomeTabsNavigationProps =
  BottomTabNavigationProp<HomeTabsParamList>;

const Tabs = createBottomTabNavigator<HomeTabsParamList>();
interface IconProps {
  color: string;
  size: number;
}
const iconRenderer =
  (icon: string) =>
  ({color, size}: IconProps) =>
    <Icon name={icon} color={color} size={size} />;

export const TabsRouter = () => {
  return (
    <Tabs.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Tabs.Screen
        options={{
          tabBarIcon: iconRenderer('home'),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: iconRenderer('map'),
        }}
        name="Map"
        component={WeatherMap}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: iconRenderer('storage'),
        }}
        name="Storage"
        component={StorageView}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: iconRenderer('dashboard-customize'),
        }}
        name="Custom"
        component={CustomModulesStack}
      />
    </Tabs.Navigator>
  );
};
