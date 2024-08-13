import {ForecastItem} from '../services/types/Weather.ts';
import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Color} from '../styles/color.ts';
import {ChevronRight} from '../assets/icons/ChevronRight.tsx';
import {WeatherInfo} from './WeatherInfo.tsx';
import {bottomBorder, paddingStandard} from '../styles/common.ts';

type WeatherListItemProps = {
  item: ForecastItem;
  onPress: () => void;
};

export const WeatherListItem: FC<WeatherListItemProps> = ({item, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, styles.row, paddingStandard, bottomBorder]}>
      <View style={[styles.content]}>
        <WeatherInfo item={item} />
      </View>
      <ChevronRight />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Color.White,
    width: '100%',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  content: {
    flex: 1,
  },
});
