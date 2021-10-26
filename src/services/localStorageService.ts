import { UserDto } from '@shared/types';

const authTokenKey = 'authToken';
const userKey = 'user';

export const LocalStorageService = {
  getAuthToken: (): string | null => localStorage.getItem(authTokenKey),
  clearAuthToken: (): void => localStorage.removeItem(authTokenKey),
  setAuthToken: (authToken: string | undefined): void => {
    if (authToken) {
      localStorage.setItem(authTokenKey, authToken);
    }
  },

  getUser: (): UserDto | null => {
    const userString = localStorage.getItem(userKey);
    return userString ? JSON.parse(userString) : null;
  },
  setUser: (user: UserDto | undefined): void => {
    if (user) {
      localStorage.setItem(userKey, JSON.stringify(user));
    }
  },
};
