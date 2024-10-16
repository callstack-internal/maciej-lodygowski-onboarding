import {StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationButton} from '../components/NavigationButton.tsx';
import {useNavigation} from '@react-navigation/native';
import {ModulesStackNavigationProps} from '../routers/CustomModulesRouter.tsx';

export const CustomModulesScreen = () => {
  const navigation = useNavigation<ModulesStackNavigationProps>();
  return (
    <View style={styles.container}>
      <NavigationButton
        onPress={() => navigation.navigate('AppInfo')}
        title="App info"
      />
      <NavigationButton
        onPress={() => navigation.navigate('ConicGradient')}
        title="Conic gradient"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 12,
  },
});
