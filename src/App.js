import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';

import Header from './containers/Header';
import Cart from './containers/Cart';
import Home from './containers/Home';

const AppWrapper = styled(Container)`
  padding: 50px 20px;
  background-color: #eee;
`;

const App = () => (
  <Router>
    <div className="container">
      <Header />
      <AppWrapper>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </AppWrapper>
    </div>
  </Router>
);

export default App;
