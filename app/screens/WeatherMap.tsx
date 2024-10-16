import {StyleSheet, View} from 'react-native';
import {OmhMapView, OmhMarker} from '@openmobilehub/maps-core';
import React, {useMemo} from 'react';
import {useLoadForecast} from '../hooks/useLoadForecast.ts';
import {useCities} from '../hooks/useCities.ts';
import {Color} from '../styles/color.ts';

export const WeatherMap = () => {
  const cities = useCities();
  const forecast = useLoadForecast(cities.data);
  const markers = useMemo(
    () =>
      forecast.data?.list.map(item => (
        <OmhMarker
          key={item.id}
          icon={{
            uri: `https://openweathermap.org/img/w/${item.weather[0].icon}.png`,
            width: 150,
            height: 150,
          }}
          title={`${item.name}: ${item.main.temp}C`}
          position={{
            latitude: item.coord.lat,
            longitude: item.coord.lon,
          }}
        />
      )),
    [forecast],
  );

  return (
    <View style={style.container}>
      <OmhMapView>{markers}</OmhMapView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: Color.LightGrey,
  },
  image: {
    height: 40,
    width: 40,
  },
});
