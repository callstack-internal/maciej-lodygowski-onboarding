import {OmhMapsModule} from '@openmobilehub/maps-core';

export const omhInit = () => {
  const defaultMapProvider = OmhMapsModule.getDefaultMapProvider();

  OmhMapsModule.initialize({
    gmsProvider: defaultMapProvider,
    nonGmsProvider: defaultMapProvider,
    iosProvider: defaultMapProvider,
  });
};
