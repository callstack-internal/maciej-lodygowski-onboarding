import {useEffect} from 'react';
import GoogleAuthClient from '@openmobilehub/auth-google';
import {googleAuthClientConfig} from '../config/google-auth-client.ts';

export const useGoogleAuth = () => {
  useEffect(() => {
    (async () => {
      await GoogleAuthClient.initialize(googleAuthClientConfig);
    })();
  }, []);
};
