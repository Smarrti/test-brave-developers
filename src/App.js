import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';

const AppBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
`;

const App = () => {
  return (
    <AppBody>
      <Header />
    </AppBody>
  );
}

export default App;
