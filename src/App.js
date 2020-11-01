import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import GlobalStyles from './lib/globalStyles';
import Main from './pages/Main';

const AppBody = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <AppBody>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/pay/:operator">
            <p>Оплата</p>
          </Route>
        </Switch>
      </AppBody>
    </Router>
  );
}

export default App;
