import { AppContainer } from '@components/containers';
import { Navbar } from '@components/Navbar';
import { ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const App = (): ReactElement => (
  <div className='font-mono h-screen bg-gray-100 text-gray-700'>
    <Router>
      <Navbar />
      <AppContainer>Hello world</AppContainer>
    </Router>
  </div>
);

export default App;
