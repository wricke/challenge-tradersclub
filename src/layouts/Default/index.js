import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Menu, Close } from '@material-ui/icons';

import {
  Wrapper, Sidebar, Header, Button, ButtonContainer, PageContainer, Container,
} from './styles';

const Default = ({ Page, ...props }) => {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 768);
  const validateSidebarWidth = () => {
    setShowSidebar(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener('resize', validateSidebarWidth);

    return () => window.removeEventListener('resize', validateSidebarWidth);
  }, []);

  return (
    <Wrapper>
      <Sidebar show={showSidebar}>
        <h1> TradersClub </h1>
      </Sidebar>
      <Container>
        <Header>
          <ButtonContainer>
            <Button onClick={() => setShowSidebar(!showSidebar)}>
              {
                !showSidebar ? <Menu /> : <Close />
              }
            </Button>
          </ButtonContainer>
        </Header>
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
