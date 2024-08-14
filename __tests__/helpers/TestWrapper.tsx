import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {FC, PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const TestWrapper: FC<PropsWithChildren> = ({children}) => (
  <NavigationContainer>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </NavigationContainer>
);
