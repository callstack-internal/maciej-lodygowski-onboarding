import {
  OmhMapsModule,
  OmhMapsAppleMapsIOSProvider,
} from '@openmobilehub/maps-core';
import {OmhMapsGoogleMapsProvider} from '@openmobilehub/maps-plugin-googlemaps';
import {OmhMapsOpenStreetMapProvider} from '@openmobilehub/maps-plugin-openstreetmap';
export const omhInit = () => {
  OmhMapsModule.initialize({
    iosProvider: OmhMapsAppleMapsIOSProvider,
    gmsProvider: OmhMapsGoogleMapsProvider,
    nonGmsProvider: OmhMapsOpenStreetMapProvider,
  });
};
