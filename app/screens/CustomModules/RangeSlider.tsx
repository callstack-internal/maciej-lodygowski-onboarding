import {Button, StyleSheet, View} from 'react-native';
import {RangeSliderView} from 'range-slider-package';
import React, {useRef} from 'react';

export const RangeSliderScreen = () => {
  const sliderRef = useRef<RangeSliderView>(null);
  const [leftKnobValue, setLeftKnobValue] = React.useState(2);
  const [rightKnobValue, setRightKnobValue] = React.useState(8);

  function resetLeftKnobValue() {
    sliderRef.current?.setLeftKnobValueProgrammatically(2);
  }

  function resetRightKnobValue() {
    sliderRef.current?.setRightKnobValueProgrammatically(8);
  }

  return (
    <View style={styles.container}>
      <RangeSliderView
        style={styles.slider}
        ref={sliderRef}
        minValue={0}
        maxValue={10}
        leftKnobValue={leftKnobValue}
        rightKnobValue={rightKnobValue}
        onRangeSliderViewEndDrag={e => {
          setLeftKnobValue(e.nativeEvent.leftKnobValue);
          setRightKnobValue(e.nativeEvent.rightKnobValue);
        }}
      />
      <Button onPress={resetLeftKnobValue} title="Reset left knob" />
      <Button onPress={resetRightKnobValue} title="Reset right knob" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  slider: {
    height: 40,
  },
});
