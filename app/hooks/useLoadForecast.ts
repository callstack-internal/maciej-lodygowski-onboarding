import {useQuery} from '@tanstack/react-query';
import {WeatherApi} from '../services/WeatherApi.ts';

export const useLoadForecast = (cityIds: number[] | undefined) => {
  return useQuery({
    queryKey: ['forecast', cityIds],
    queryFn: () => WeatherApi.getWeatherForecast(cityIds || []),
    enabled: !!cityIds,
  });
};
