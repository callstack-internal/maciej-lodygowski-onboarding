import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Color} from '../styles/color.ts';
import GoogleAuthClient from '@openmobilehub/auth-google';
import {useAuth} from '../context/AuthContext.tsx';

export const Login = () => {
  const auth = useAuth();
  const loginWithGoogle = async () => {
    await GoogleAuthClient.signIn();
    auth.setIsLoggedIn();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to Weather App!</Text>
        <Text style={styles.subtitle}>Sign in with provider below</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={loginWithGoogle} style={styles.google}>
          <Text style={styles.text}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  google: {
    backgroundColor: Color.Google,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    color: Color.White,
  },
});
