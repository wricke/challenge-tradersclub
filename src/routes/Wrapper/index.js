import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import DefaultLayout from '../../layouts/Default';

const Wrapper = ({ component, ...otherProps }) => (
  <Route
    {...otherProps}
    render={(props) => <DefaultLayout Page={component} {...props} />}
  />
);

Wrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export default Wrapper;
