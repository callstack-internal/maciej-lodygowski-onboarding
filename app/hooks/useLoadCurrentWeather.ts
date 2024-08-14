import {ILocation} from 'react-native-expose-location';
import {useQuery} from '@tanstack/react-query';
import {WeatherApi} from '../services/WeatherApi.ts';

export const useLoadCurrentWeather = (location: ILocation | null) => {
  return useQuery({
    queryKey: ['location', location],
    queryFn: () => WeatherApi.getCurrentWeather(location!),
    enabled: !!location,
  });
};
