import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppRouter} from './app/AppRouter.tsx';

export default function App() {
  return (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  );
}
