import { UserDto } from '@shared/types';
import Utils from '@shared/utils';
import { LocalStorageService } from './localStorageService';

export const AuthService = {
  login: (authToken: string | undefined, user: UserDto | undefined): void => {
    LocalStorageService.setAuthToken(authToken);
    LocalStorageService.setUser(user);
  },

  isLoggedIn: (): boolean => {
    const authToken = LocalStorageService.getAuthToken();
    return Utils.isSet(authToken);
  },
};
