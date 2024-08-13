import {http, HttpResponse} from 'msw';
import {weatherMock} from './weatherMock.ts';
import {API_URL} from '@env';

export const loadForecastHandler = http.get(`${API_URL}group*`, ({request}) => {
  return HttpResponse.json(weatherMock);
});

export const failForecastHandler = http.get(`${API_URL}group*`, ({request}) => {
  return HttpResponse.error();
});
