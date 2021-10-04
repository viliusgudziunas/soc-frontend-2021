import { AppContainer } from '@components/containers';
import { ReactElement } from 'react';

const App = (): ReactElement => (
  <div className='font-mono h-screen bg-gray-100 text-gray-700'>
    <AppContainer>Hello world</AppContainer>
  </div>
);

export default App;
