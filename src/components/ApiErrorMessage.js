import React from 'react';
import PropTypes from 'prop-types';
import { Alert, AlertTitle } from '@material-ui/lab';

const ApiErrorMessage = ({ severity, title, content }) => (
  <Alert severity={severity}>
    <AlertTitle>
      {title}
    </AlertTitle>
    {content}
  </Alert>
);

ApiErrorMessage.propTypes = {
  severity: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

ApiErrorMessage.defaultProps = {
  severity: 'error',
  title: '',
  content: '',
};

export default ApiErrorMessage;
