import {useQuery} from '@tanstack/react-query';
import {CITIES_CONFIG} from '../config/cities.ts';

export const useCities = () => {
  return useQuery({queryKey: ['cities'], queryFn: () => CITIES_CONFIG});
};
