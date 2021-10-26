import { UserDto } from '@shared/types';
import { createContext } from 'react';

interface UserContextModel {
  user: UserDto | null;
  setUser: (user: UserDto) => void;
}

const defaultValue: UserContextModel = {
  user: null,
  setUser: () => undefined,
};
export const UserContext = createContext(defaultValue);
