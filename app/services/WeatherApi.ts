import {OPEN_WEATHER_API_KEY, API_URL} from '@env';
import {ILocation} from 'react-native-expose-location';
import {ForecastItem, ForecastResponse} from './types/Weather.ts';
export class WeatherApi {
  static async getWeatherForecast(cityId: number[]): Promise<ForecastResponse> {
    const result = await fetch(
      `${API_URL}group?id=${cityId.join(
        ',',
      )}&appid=${OPEN_WEATHER_API_KEY}&units=metric`,
    );

    return await result.json();
  }

  static async getCurrentWeather(location: ILocation): Promise<ForecastItem> {
    const result = await fetch(
      `${API_URL}weather?lat=${location.latitude}&lon=${location.longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`,
    );

    return await result.json();
  }
}
