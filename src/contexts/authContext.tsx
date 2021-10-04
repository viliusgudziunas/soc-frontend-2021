import { createContext } from 'react';

interface AuthContextModel {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const defaultValue: AuthContextModel = {
  isLoggedIn: false,
  setIsLoggedIn: () => undefined,
};
export const AuthContext = createContext(defaultValue);
