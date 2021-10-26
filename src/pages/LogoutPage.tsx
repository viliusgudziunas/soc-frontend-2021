import { PageContainer } from '@components/containers';
import { AuthContext } from '@contexts/authContext';
import { Header } from '@lib/Header';
import { ApiService } from '@services/apiService';
import { LocalStorageService } from '@services/localStorageService';
import { ToastService } from '@services/toastService';
import { ReactElement, useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';

export const LogoutPage = (): ReactElement => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [isLogoutSuccessful, setIsLogoutSuccessful] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    LocalStorageService.clearAuthToken();
    setIsLogoutSuccessful(true);
  };

  useEffect(() => {
    const authToken = LocalStorageService.getAuthToken();
    ApiService.logout(authToken)
      .then(() => {
        ToastService.success('Logged out successfully!');
        handleLogout();
      })
      .catch(() => {
        ToastService.error('An error occurred while logging out!');
        handleLogout();
      });
  }, []);

  if (isLogoutSuccessful) {
    return <Redirect to='/login' />;
  }

  return (
    <PageContainer>
      <Header>Logout</Header>
      You should be redirected in a moment!
    </PageContainer>
  );
};
