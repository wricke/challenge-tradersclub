import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Menu, Close } from '@material-ui/icons';

import {
  Wrapper, Sidebar, Header, Button, ButtonContainer, PageContainer, Container,
} from './styles';
import { greaterThan } from '../../helpers/sizes';

const Default = ({ Page, ...props }) => {
  const { laptop: gtLaptop } = greaterThan;
  const [showSidebar, setShowSidebar] = useState(gtLaptop());

  useCallback(() => {
    const validateSidebarWidth = () => setShowSidebar(gtLaptop());
    window.addEventListener('resize', validateSidebarWidth);

    return () => window.removeEventListener('resize', validateSidebarWidth);
  }, [gtLaptop]);

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
