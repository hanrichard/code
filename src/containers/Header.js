import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../components/Logo';

const Header = () => (
  <div className="App">
    <div>
      <Link to="/">
        <Logo />
      </Link>
    </div>
    <div>
      <Link to="/cart">cart</Link>
    </div>
  </div>
);

export default Header;
