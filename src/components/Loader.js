import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  .MuiCircularProgress-svg {
    color: #125430;
  }
`;
const Loader = () => (
  <Wrapper>
    <CircularProgress size={100} />
  </Wrapper>
);

export default Loader;
