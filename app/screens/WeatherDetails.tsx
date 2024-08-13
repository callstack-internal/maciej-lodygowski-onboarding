import {RouteProp, useRoute} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {WeatherInfo} from '../components/WeatherInfo.tsx';
import {AppStackParamList} from '../AppRouter.tsx';
import {Color} from '../styles/color.ts';
import {ForecastRow} from '../components/ForecastRow.tsx';
import {bottomBorder, paddingStandard} from '../styles/common.ts';
import React from 'react';

export const WeatherDetailsScreen = () => {
  const route = useRoute<RouteProp<AppStackParamList, 'Details'>>();
  const item = route.params;
  return (
    <View style={styles.container}>
      <View style={[styles.item]}>
        <View style={[paddingStandard, bottomBorder]}>
          <WeatherInfo item={item} />
        </View>
        <ForecastRow name="Humidity" value={`${item.main.humidity}%`} />
        <ForecastRow name="Pressure" value={`${item.main.pressure} hPa`} />
        <ForecastRow name="Wind Speed" value={`${item.wind.speed} mph`} />
        <ForecastRow name="Cloud Cover" value={`${item.clouds.all}%`} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White,
  },
  item: {
    width: '100%',
  },
});
