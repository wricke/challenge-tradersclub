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

export const RouteWrapperPropTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

Wrapper.propTypes = RouteWrapperPropTypes;

export default Wrapper;
