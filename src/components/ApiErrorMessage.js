import React from 'react';
import PropTypes from 'prop-types';
import { Alert, AlertTitle } from '@material-ui/lab';

const ApiErrorMessage = ({ title, content }) => (
  <Alert severity="error">
    <AlertTitle>
      {title}
    </AlertTitle>
    {content}
  </Alert>
);

ApiErrorMessage.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

ApiErrorMessage.defaultProps = {
  title: '',
  content: '',
};

export default ApiErrorMessage;
