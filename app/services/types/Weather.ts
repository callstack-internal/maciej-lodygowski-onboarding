export type ForecastResponse = {
  cnt: number;
  list: ForecastItem[];
};

export type ForecastItem = {
  id: number;
  name: string;
  visibility: number;
  main: MainForecast;
  sys: SystemInfo;
  wind: WindData;
  clouds: Clouds;
  coord: Coordinates;
  dt: number;
  weather: Weather[];
};

export type Clouds = {
  all: number;
};

export type WindData = {
  speed: number;
  deg: number;
};

export type Coordinates = {
  lat: number;
  lon: number;
};

export type SystemInfo = {
  country: string;
  sunrise: number;
  sunset: number;
  timezone: number;
};

export type MainForecast = {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};
