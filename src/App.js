import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import GlobalStyles from './lib/globalStyles';

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
            <p>Первый</p>
            <Link to="/ab">Переход</Link>
          </Route>
          <Route path="/ab">
            <p>Второй</p>
          </Route>
        </Switch>
      </AppBody>
    </Router>
  );
}

export default App;
