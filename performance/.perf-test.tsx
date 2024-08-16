import {measureRenders} from 'reassure';
import {HomeScreen} from '../app/screens/Home.tsx';
import {describe, test} from '@jest/globals';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {setupAPIMocks} from '../__tests__/helpers/mock-api.ts';
import {loadForecastHandler} from '../mocks/handlers.ts';
import {fireEvent, screen} from '@testing-library/react-native';

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

    await measureRenders(
      <NavigationContainer>
        <QueryClientProvider client={client}>
          <HomeScreen />
        </QueryClientProvider>
      </NavigationContainer>,
      {scenario},
    );
  });
});
