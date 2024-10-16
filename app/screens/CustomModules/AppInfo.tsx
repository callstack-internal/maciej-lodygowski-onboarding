import {StyleSheet, Text, View} from 'react-native';
import {AppInfoModule} from 'app-info-package';
import React from 'react';

export const AppInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Application Info</Text>
      <Text>{`Bundle id: ${AppInfoModule.getAppBundleId()}`}</Text>
      <Text>{`App version: ${AppInfoModule.getAppVersion()}`}</Text>
      <Text>{`Build version: ${AppInfoModule.getAppBuildNumber()}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
