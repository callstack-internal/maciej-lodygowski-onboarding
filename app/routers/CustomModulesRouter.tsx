import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {CustomModulesScreen} from '../screens/CustomModules.tsx';
import {AppInfoScreen} from '../screens/CustomModules/AppInfo.tsx';
import React from 'react';
import {ConicGradientScreen} from '../screens/CustomModules/ConicGradient.tsx';
import {FileManagerScreen} from '../screens/CustomModules/FileManager.tsx';

export type ModulesStackParamList = {
  Index: undefined;
  AppInfo: undefined;
  ConicGradient: undefined;
  FileManager: undefined;
};

export type ModulesStackNavigationProps =
  NativeStackNavigationProp<ModulesStackParamList>;

const ModulesStack = createNativeStackNavigator<ModulesStackParamList>();

export const CustomModulesStack = () => {
  return (
    <ModulesStack.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName="Index">
      <ModulesStack.Screen name="Index" component={CustomModulesScreen} />
      <ModulesStack.Screen name="AppInfo" component={AppInfoScreen} />
      <ModulesStack.Screen
        name="ConicGradient"
        component={ConicGradientScreen}
      />
      <ModulesStack.Screen name="FileManager" component={FileManagerScreen} />
    </ModulesStack.Navigator>
  );
};
