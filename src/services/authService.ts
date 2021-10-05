import Utils from '@shared/utils';

export const AuthService = {
  getAuthToken: (): string => localStorage.getItem('authToken') || '',
  clearAuthToken: (): void => localStorage.removeItem('authToken'),

  login: (authToken: string | undefined): void => {
    if (authToken) {
      localStorage.setItem('authToken', authToken);
    }
  },

  isLoggedIn: (): boolean => {
    const authToken = AuthService.getAuthToken();
    return Utils.isSet(authToken);
  },
};
