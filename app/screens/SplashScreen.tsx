import LottieView from 'lottie-react-native';
import {StyleSheet} from 'react-native';
import React, {FC} from 'react';

interface SplashScreenProps {
  onFinish: (completed: boolean) => void;
}

export const SplashScreen: FC<SplashScreenProps> = ({onFinish}) => {
  return (
    <LottieView
      source={require('../assets/animated/splash-animation.json')}
      style={styles.splash}
      autoPlay
      loop={false}
      onAnimationFinish={() => onFinish(true)}
    />
  );
};

const styles = StyleSheet.create({
  splash: {
    width: '100%',
    height: '100%',
  },
});
