import {StyleSheet, Text, View} from 'react-native';
import {ConicGradientView} from 'conic-gradient-package';
import Slider from '@react-native-community/slider';
import {useState} from 'react';

export const ConicGradientScreen = () => {
  const colors = ['red', 'white', 'green'];
  const locations = [0.1, 0.4, 1];
  const [centerPointX, setCenterPointX] = useState(0);
  const [centerPointY, setCenterPointY] = useState(0);

  return (
    <View style={styles.container}>
      <View />
      <View>
        <Text>X Location {centerPointX.toFixed(2)}</Text>
        <Slider
          style={styles.slider}
          value={centerPointX}
          onValueChange={setCenterPointX}
        />
      </View>
      <View>
        <Text>Y Location: {centerPointY.toFixed(2)}</Text>
        <Slider
          style={styles.slider}
          value={centerPointY}
          onValueChange={setCenterPointY}
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
    height: 10,
  },
});
