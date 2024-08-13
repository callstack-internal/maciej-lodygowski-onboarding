import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {
  it,
  describe,
  expect,
  jest,
  beforeAll,
  afterAll,
  afterEach,
} from '@jest/globals';
import {useCities} from '../app/hooks/useCities.ts';
import {HomeScreen} from '../app/screens/Home.tsx';
import {setupServer} from 'msw/native';
import {RequestHandler} from 'msw';
import {failForecastHandler, loadForecastHandler} from '../mocks/handlers.ts';
import {TestWrapper} from './helpers/TestWrapper.tsx';
jest.mock('../app/hooks/useCities');

const setupAPIMocks = (handlers: RequestHandler[]) => {
  const server = setupServer(...handlers);
  beforeAll(() => {
    server.listen({onUnhandledRequest: 'warn'});
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  return server;
};

describe('HomeScreen Integration Tests', () => {
  const mocks = setupAPIMocks([]);
  it('should display loading indicator when forecast is loading', () => {
    (useCities as jest.Mock).mockReturnValue({data: ['Dubai']});
    mocks.use(loadForecastHandler);

    const view = render(
      <TestWrapper>
        <HomeScreen />
      </TestWrapper>,
    );

    expect(view.getByTestId('loading-indicator')).toBeTruthy();
  });

  it('should display forecast data when loading is successful', async () => {
    (useCities as jest.Mock).mockReturnValue({
      data: ['Alaska', 'Los Angeles'],
    });
    mocks.use(loadForecastHandler);

    const {getByText} = render(
      <TestWrapper>
        <HomeScreen />
      </TestWrapper>,
    );

    await waitFor(() => expect(getByText('Alaska')).toBeTruthy());
    await waitFor(() => expect(getByText('Los Angeles')).toBeTruthy());
  });

  it('should display error message when forecast fetching fails', async () => {
    (useCities as jest.Mock).mockReturnValue({data: ['New York']});
    mocks.use(failForecastHandler);

    const screen = render(
      <TestWrapper>
        <HomeScreen />
      </TestWrapper>,
    );

    await waitFor(() =>
      expect(screen.getByText('Weather fetching failed')).toBeTruthy(),
    );
    await waitFor(() =>
      expect(screen.getByText('Failed to fetch')).toBeTruthy(),
    );
  });

  it('should filter the list based on search input', async () => {
    (useCities as jest.Mock).mockReturnValue({
      data: ['New York', 'Los Angeles'],
    });
    mocks.use(loadForecastHandler);

    const screen = render(
      <TestWrapper>
        <HomeScreen />
      </TestWrapper>,
    );

    const searchInput = screen.getByTestId('search');

    fireEvent.changeText(searchInput, 'Los');

    await waitFor(() => expect(screen.getByText('Los Angeles')).toBeTruthy());
    expect(screen.queryByText('New York')).toBeNull();
  });
});
