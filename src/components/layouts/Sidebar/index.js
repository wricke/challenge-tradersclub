import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const Sidebar = (props) => {
  const { show } = props;

  return (
    <Wrapper show={show}>
      <h1> TradersClub </h1>
    </Wrapper>
  );
};

Sidebar.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Sidebar;
