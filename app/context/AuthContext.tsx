import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IAuthContext {
  isLoggedIn: boolean;
  setIsLoggedIn: () => void;
  setLogout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  setLogout: () => {},
});

export const AuthProvider = ({children}: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await AsyncStorage.getItem('loggedIn');
      if (result) {
        setIsLoggedIn(true);
      }
    })();
  }, []);

  const onLogin = async () => {
    setIsLoggedIn(true);
    await AsyncStorage.setItem('loggedIn', 'true');
  };
  const onLogout = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.removeItem('loggedIn');
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setLogout: onLogout,
        setIsLoggedIn: onLogin,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
