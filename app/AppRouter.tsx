import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/Home.tsx';
import React from 'react';

const Stack = createNativeStackNavigator();

export const AppRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: 'Weather'}}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
