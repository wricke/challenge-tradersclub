import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const Default = ({ Page, ...props }) => (
  <Wrapper>
    <Page {...props} />
  </Wrapper>
);

Default.propTypes = {
  Page: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export default Default;
