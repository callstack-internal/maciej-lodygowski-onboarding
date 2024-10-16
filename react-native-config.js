const path = require('path');
module.exports = {
  dependencies: {
    '@openmobilehub/maps-core': {
      platforms: {
        ios: null,
      },
    },
    '@react-native-community/geolocation': {
      platforms: {
        android: null,
      },
    },
    'react-native-maps': {
      platforms: {
        android: null,
      },
    },
    'react-native-app-auth': {
      platforms: {
        android: null,
      },
    },
    'app-info-package': {
      root: path.resolve(__dirname, './app-info-package'),
    },
    'conic-gradient-package': {
      root: path.resolve(__dirname, './conic-gradient-package'),
    },
  },
};
