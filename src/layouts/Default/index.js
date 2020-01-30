import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import {
  Wrapper,
  PageContainer,
  Container,
} from './styles';
import { greaterThan } from '../../helpers/sizes';
import Header from '../../components/layouts/Header';
import { Types } from '../../store/ducks/sidebar';
import Sidebar from '../../components/layouts/Sidebar';

const Default = ({ Page, ...props }) => {
  const { laptop: gtLaptop } = greaterThan;
  const [isGreaterThanLaptop, setIsGreaterThanLaptop] = useState(gtLaptop());
  const showSidebar = useSelector((state) => state.sidebar.showing);
  const dispatcher = useDispatch();

  useCallback(() => {
    const setShowing = (s) => {
      dispatcher({ type: Types.SET_SHOWING, showing: s });
    };
    const validateSidebarWidth = () => {
      setIsGreaterThanLaptop(gtLaptop());
      setShowing(isGreaterThanLaptop);
    };
    window.addEventListener('resize', validateSidebarWidth);

    return () => window.removeEventListener('resize', validateSidebarWidth);
  }, [dispatcher, gtLaptop, isGreaterThanLaptop]);

  return (
    <Wrapper>
      <Sidebar show={showSidebar} />
      <Container>
        <Header />
        <PageContainer>
          <Page {...props} />
        </PageContainer>
      </Container>
    </Wrapper>
  );
};

Default.propTypes = {
  Page: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export default Default;
