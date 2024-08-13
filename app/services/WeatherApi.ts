import {OPEN_WEATHER_API_KEY, API_URL} from '@env';
import {ForecastResponse} from './types/Weather.ts';
export class WeatherApi {
  static async getWeatherForecast(cityId: number[]): Promise<ForecastResponse> {
    const result = await fetch(
      `${API_URL}group?id=${cityId.join(
        ',',
      )}&appid=${OPEN_WEATHER_API_KEY}&units=metric`,
    );

    return await result.json();
  }
}
