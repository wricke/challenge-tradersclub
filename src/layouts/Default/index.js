import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Menu, Close, Search } from '@material-ui/icons';

import {
  Wrapper,
  Sidebar,
  Header,
  Button,
  ButtonContainer,
  PageContainer,
  Container,
  Input,
  InputContainer,
  ButtonInputContainer,
} from './styles';
import { greaterThan } from '../../helpers/sizes';
import colors from '../../styles/colors';

const Default = ({ Page, ...props }) => {
  const { laptop: gtLaptop } = greaterThan;
  const [isGreaterThanLaptop, setIsGreaterThanLaptop] = useState(gtLaptop());
  const [showSidebar, setShowSidebar] = useState(isGreaterThanLaptop);

  useCallback(() => {
    const validateSidebarWidth = () => {
      setIsGreaterThanLaptop(gtLaptop());
      setShowSidebar(isGreaterThanLaptop);
    };
    window.addEventListener('resize', validateSidebarWidth);

    return () => window.removeEventListener('resize', validateSidebarWidth);
  }, [gtLaptop, isGreaterThanLaptop]);

  return (
    <Wrapper>
      <Sidebar show={showSidebar}>
        <h1> TradersClub </h1>
      </Sidebar>
      <Container>
        <Header>
          <ButtonContainer hideOnLaptop={isGreaterThanLaptop}>
            <Button onClick={() => setShowSidebar(!showSidebar)}>
              {
                !showSidebar ? <Menu /> : <Close />
              }
            </Button>
          </ButtonContainer>
          <InputContainer hideOnMobile={showSidebar}>
            <Input />
            <ButtonInputContainer>
              <Search />
            </ButtonInputContainer>
          </InputContainer>
          <ButtonContainer hideOnMobile={showSidebar}>
            <Button bold bgColor="white" width="auto" color={colors.header}>
              CADASTRAR
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
