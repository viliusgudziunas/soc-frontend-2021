import { AppContainer } from '@components/containers';
import { Navbar } from '@components/Navbar';
import { AuthContext } from '@contexts/authContext';
import { UserContext } from '@contexts/userContext';
import { AuthService } from '@services/authService';
import { LocalStorageService } from '@services/localStorageService';
import { ToastService } from '@services/toastService';
import { UserDto } from '@shared/types';
import { ReactElement, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Routes } from './Routes';

const App = (): ReactElement => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    AuthService.isLoggedIn()
  );

  const logUserOut = (): void => {
    LocalStorageService.clearAuthToken();
    setIsLoggedIn(false);

    const reason = 'User details could not be found';
    ToastService.error(reason);
  };

  const getLoggedInUser = (): UserDto | null => {
    if (!isLoggedIn) {
      return null;
    }

    const user = LocalStorageService.getUser();
    if (!user) {
      logUserOut();
      return null;
    }
    return user;
  };

  const [user, setUser] = useState<UserDto | null>(getLoggedInUser());

  return (
    <div className='font-mono h-screen bg-gray-100 text-gray-700'>
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Router>
            <Navbar />
            <AppContainer>
              <Routes />
              <ToastContainer />
            </AppContainer>
          </Router>
        </UserContext.Provider>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
