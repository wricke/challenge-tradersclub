import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import DefaultLayout from '../../layouts/Default';

const Wrapper = ({ component, ...otherProps }) => (
  <Route
    {...otherProps}
    render={(props) => (
      <Fragment>
        <ToastContainer />
        <DefaultLayout Page={component} {...props} />
      </Fragment>
    )}
  />
);

export const RouteWrapperPropTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

Wrapper.propTypes = RouteWrapperPropTypes;

export default Wrapper;
