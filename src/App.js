import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import GlobalStyles from './lib/globalStyles';

const AppBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
`;

const App = () => {
  return (
    <AppBody>
      <GlobalStyles />
      <Header />
    </AppBody>
  );
}

export default App;
