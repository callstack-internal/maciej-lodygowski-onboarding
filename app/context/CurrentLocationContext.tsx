import {ILocation} from 'react-native-expose-location';
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

export interface ICurrentLocationContext {
  currentLocation: ILocation | null;
  setLocation: (location: ILocation) => void;
}

export const CurrentLocationContext = createContext<ICurrentLocationContext>({
  currentLocation: null,
  setLocation: () => {},
});

export const CurrentLocationProvider: FC<PropsWithChildren> = ({children}) => {
  const [currentLocation, setLocation] = useState<ILocation | null>(null);

  return (
    <CurrentLocationContext.Provider value={{setLocation, currentLocation}}>
      {children}
    </CurrentLocationContext.Provider>
  );
};

export const useCurrentLocation = () => useContext(CurrentLocationContext);
