import axios from 'axios';
import {OPEN_WEATHER_API_KEY, API_URL} from '@env';
import {ForecastResponse} from './types/Weather.ts';
export class WeatherApi {
  static getWeatherForecast(cityId: number[]) {
    return axios.get<ForecastResponse>(
      `${API_URL}group?id=${cityId.join(
        ',',
      )}&appid=${OPEN_WEATHER_API_KEY}&units=metric`,
    );
  }
}
