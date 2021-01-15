import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import woolworthLogo from '../assets/icon-header-logo.png';

const LogoImg = styled.img`
  height: 50px;
  width: 230px;
`;

const Logo = () => (
  <Link to="/">
    <LogoImg src={woolworthLogo} alt="logo" />
  </Link>
);

export default Logo;
