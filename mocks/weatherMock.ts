import {ForecastResponse} from '../app/services/types/Weather.ts';

export const weatherMock = {
  list: [
    {
      id: 1,
      name: 'Alaska',
      main: {
        temp: 0,
      },
      wind: {
        speed: 4,
      },
      clouds: {
        all: 10,
      },
      weather: [
        {
          icon: 'snow',
        },
      ],
    },
    {
      id: 2,
      name: 'Los Angeles',
      main: {
        temp: 25,
      },
      weather: [
        {
          icon: 'sun',
        },
      ],
    },
  ],
} as ForecastResponse;
