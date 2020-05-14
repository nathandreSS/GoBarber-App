import React from 'react';
import GlobalStyle from './styles/global';
// import {} from 'react-router-dom';
import SignIn from './pages/SignIn';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
