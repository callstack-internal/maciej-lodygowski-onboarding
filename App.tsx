import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {AppRouter} from './app/AppRouter.tsx';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {AuthProvider} from './app/context/AuthContext.tsx';
import {useGoogleAuth} from './app/hooks/useGoogleAuth.ts';
import {omhInit} from './app/core/omh-init.ts';
import {CurrentLocationProvider} from './app/context/CurrentLocationContext.tsx';
import {SplashScreen} from './app/screens/SplashScreen.tsx';

const queryClient = new QueryClient();

omhInit();

export default function App() {
  useGoogleAuth();
  const [animationCompleted, setAnimationCompleted] = useState(false);

  return (
    <AuthProvider>
      <CurrentLocationProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <AppRouter />
            {!animationCompleted && (
              <SplashScreen onFinish={setAnimationCompleted} />
            )}
          </NavigationContainer>
        </QueryClientProvider>
      </CurrentLocationProvider>
    </AuthProvider>
  );
}
