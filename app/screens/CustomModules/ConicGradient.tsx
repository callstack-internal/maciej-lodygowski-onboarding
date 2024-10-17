import {StyleSheet, View} from 'react-native';
import {ConicGradientView} from 'conic-gradient-package';
import React, {useState} from 'react';
import {RangeSliderView} from 'range-slider-package';

export const ConicGradientScreen = () => {
  const colors = ['red', 'white', 'green'];
  const locations = [0.1, 0.4, 1];
  const [centerPointX, setCenterPointX] = useState(0);
  const [centerPointY, setCenterPointY] = useState(0);

  return (
    <View style={styles.container}>
      <View />
      <View>
        <RangeSliderView
          leftKnobValue={centerPointX}
          rightKnobValue={centerPointY}
          style={styles.slider}
          onRangeSliderViewEndDrag={e => {
            setCenterPointY(e.nativeEvent.rightKnobValue);
            setCenterPointX(e.nativeEvent.leftKnobValue);
          }}
        />
      </View>

      <ConicGradientView
        style={styles.gradient}
        colors={colors}
        locations={locations}
        centerPoint={{x: centerPointX, y: centerPointY}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
  gradient: {
    alignItems: 'center',
    height: 250,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 250,
  },
  slider: {
    width: 300,
    height: 40,
    marginVertical: 10,
  },
});
