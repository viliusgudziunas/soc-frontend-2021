import { AppContainer } from '@components/containers';
import { Navbar } from '@components/Navbar';
import { AuthContext } from '@contexts/authContext';
import { AuthService } from '@services/authService';
import { ReactElement, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Routes } from './Routes';

const App = (): ReactElement => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    AuthService.isLoggedIn()
  );

  return (
    <div className='font-mono h-screen bg-gray-100 text-gray-700'>
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Router>
          <Navbar />
          <AppContainer>
            <Routes />
            <ToastContainer />
          </AppContainer>
        </Router>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
