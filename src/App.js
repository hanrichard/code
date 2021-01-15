import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './containers/Header';
import Cart from './containers/Cart';
import Home from './containers/Home';

const App = () => (
  <Router>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </div>
  </Router>
);

export default App;
