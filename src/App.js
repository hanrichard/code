import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Header from './containers/Header';
import Cart from './containers/Cart';
import Home from './containers/Home';

const App = () => (
  <Router>
    <div className="container">
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Container>
    </div>
  </Router>
);

export default App;
