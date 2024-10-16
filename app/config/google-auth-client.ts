import {PlatformAuthConfig} from '@openmobilehub/auth-core';
import {CLIENT_ID} from '@env';

const scopes = [
  'openid',
  'profile',
  'email',
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.file',
];

export const googleAuthClientConfig: PlatformAuthConfig = {
  android: {
    scopes,
  },
  ios: {
    scopes,
    clientId: CLIENT_ID,
    redirectUrl: `com.googleusercontent.apps.${
      CLIENT_ID.split('.')[0]
    }:/oauth2redirect/google`,
  },
};
