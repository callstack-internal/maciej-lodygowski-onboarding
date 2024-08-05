import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Color} from '../styles/color.ts';
import {bottomBorder, paddingStandard} from '../styles/common.ts';

type ForecastRowProps = {
  name: string;
  value: string;
};

export const ForecastRow: FC<ForecastRowProps> = ({name, value}) => {
  return (
    <View style={[styles.row, paddingStandard, bottomBorder]}>
      <Text style={[styles.title]}>{name}</Text>
      <Text style={[styles.value]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
  },
  value: {
    color: Color.Grey,
    fontSize: 16,
  },
});
