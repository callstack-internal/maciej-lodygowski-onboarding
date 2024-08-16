import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {it, describe, expect, jest} from '@jest/globals';
import {useCities} from '../app/hooks/useCities.ts';
import {HomeScreen} from '../app/screens/Home.tsx';
import {failForecastHandler, loadForecastHandler} from '../mocks/handlers.ts';
import {TestWrapper} from './helpers/TestWrapper.tsx';
import {setupAPIMocks} from './helpers/mock-api.ts';
jest.mock('../app/hooks/useCities');

describe('HomeScreen Integration Tests', () => {
  const mocks = setupAPIMocks([]);
  it('should display loading indicator when forecast is loading', () => {
    (useCities as jest.Mock).mockReturnValue({data: ['Dubai']});
    mocks.use(loadForecastHandler);

    render(
      <TestWrapper>
        <HomeScreen />
      </TestWrapper>,
    );

    expect(screen.getByTestId('loading-indicator')).toBeTruthy();
  });

  it('should display forecast data when loading is successful', async () => {
    (useCities as jest.Mock).mockReturnValue({
      data: ['Alaska', 'Los Angeles'],
    });
    mocks.use(loadForecastHandler);

    render(
      <TestWrapper>
        <HomeScreen />
      </TestWrapper>,
    );

    expect(await screen.findByText('Alaska')).toBeTruthy();
    expect(await screen.findByText('Los Angeles')).toBeTruthy();
  });

  it('should display error message when forecast fetching fails', async () => {
    (useCities as jest.Mock).mockReturnValue({data: ['New York']});
    mocks.use(failForecastHandler);

    render(
      <TestWrapper>
        <HomeScreen />
      </TestWrapper>,
    );

    expect(await screen.findByText('Weather fetching failed')).toBeTruthy();
    expect(await screen.findByText('Failed to fetch')).toBeTruthy();
  });

  it('should filter the list based on search input', async () => {
    (useCities as jest.Mock).mockReturnValue({
      data: ['New York', 'Los Angeles'],
    });
    mocks.use(loadForecastHandler);

    render(
      <TestWrapper>
        <HomeScreen />
      </TestWrapper>,
    );

    const searchInput = screen.getByTestId('search');

    fireEvent.changeText(searchInput, 'Los');

    expect(await screen.findByText('Los Angeles')).toBeTruthy();
    expect(screen.queryByText('New York')).toBeNull();
  });
});
