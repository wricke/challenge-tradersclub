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

export const SidebarPropTypes = {
  show: PropTypes.bool.isRequired,
};

Sidebar.propTypes = SidebarPropTypes;

export default Sidebar;
