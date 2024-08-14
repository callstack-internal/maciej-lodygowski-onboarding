import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppRouter} from './app/AppRouter.tsx';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
