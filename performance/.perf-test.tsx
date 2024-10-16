import {measureRenders} from 'reassure';
import {describe, test} from '@jest/globals';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {setupAPIMocks} from '../__tests__/helpers/mock-api.ts';
import {loadForecastHandler} from '../mocks/handlers.ts';
import {fireEvent, screen} from '@testing-library/react-native';
import {AppRouter} from '../app/AppRouter.tsx';
import {AuthContext, AuthProvider} from '../app/context/AuthContext.tsx';

describe('Performance tests', () => {
  const mocks = setupAPIMocks([loadForecastHandler]);
  test('Home screen performance', async () => {
    const scenario = async () => {
      await screen.findByText('Alaska');
      fireEvent.press(screen.getByText('Alaska'));
      await screen.findByText('Alaska');
    };
    const client = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });
    const loginStub = () => {};

    await measureRenders(
      <NavigationContainer>
        <AuthContext.Provider
          value={{
            isLoggedIn: true,
            setIsLoggedIn: loginStub,
            setLogout: loginStub,
          }}>
          <QueryClientProvider client={client}>
            <AppRouter />
          </QueryClientProvider>
        </AuthContext.Provider>
      </NavigationContainer>,
      {scenario},
    );
  }, 25000);
});
