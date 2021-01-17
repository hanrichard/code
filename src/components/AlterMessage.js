import React from 'react';
import PropTypes from 'prop-types';
import { Alert, AlertTitle } from '@material-ui/lab';

const AlterMessage = ({ severity, title, content }) => (
  <Alert severity={severity}>
    <AlertTitle>
      {title}
    </AlertTitle>
    {content}
  </Alert>
);

AlterMessage.propTypes = {
  severity: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

AlterMessage.defaultProps = {
  severity: 'error',
  title: '',
  content: '',
};

export default AlterMessage;
