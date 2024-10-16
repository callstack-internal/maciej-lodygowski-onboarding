import {useAuth} from '../context/AuthContext.tsx';
import GoogleAuthClient from '@openmobilehub/auth-google';
import {TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Color} from '../styles/color.ts';

export const LogoutButton = () => {
  const auth = useAuth();
  const logout = async () => {
    await GoogleAuthClient.signOut();
    auth.setLogout();
  };

  return (
    <TouchableOpacity onPress={logout}>
      <Icon name="logout" size={20} color={Color.Primary} />
    </TouchableOpacity>
  );
};
