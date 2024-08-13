import {Image, Text, View, StyleSheet} from 'react-native';
import {Color} from '../styles/color.ts';
import {ForecastItem} from '../services/types/Weather.ts';
import React, {FC} from 'react';

type WeatherInfoProps = {
  item: ForecastItem;
};

export const WeatherInfo: FC<WeatherInfoProps> = ({item}) => {
  return (
    <View style={[styles.row]}>
      <View style={[styles.row]}>
        <Image
          style={styles.icon}
          source={{
            uri: `https://openweathermap.org/img/w/${item.weather[0].icon}.png`,
          }}
        />
        <View>
          <Text style={[styles.title]}>{item.name}</Text>
          <Text style={[styles.description]}>{item.weather[0].main}</Text>
        </View>
      </View>
      <View style={[styles.temperature]}>
        <Text style={[styles.temperatureText]}>{item.main.temp} °C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    columnGap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 14,
  },
  description: {
    fontSize: 12,
    color: Color.Grey,
  },
  temperature: {
    borderRadius: 16,
    backgroundColor: Color.Primary,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  temperatureText: {
    color: Color.White,
  },
});
