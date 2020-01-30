import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Menu, Close, Search } from '@material-ui/icons';
import { Formik } from 'formik';

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
  const formik = {
    initialValues: {
      search: '',
    },
    onSubmit: console.log,
  };

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
          <Formik
            onSubmit={formik.onSubmit}
            initialValues={formik.initialValues}
          >
            {(formProps) => (
              <InputContainer
                hideOnMobile={showSidebar}
                onSubmit={formProps.handleSubmit}
              >
                <Input
                  name="search"
                  type="text"
                  onChange={formProps.handleChange}
                  onBlur={formProps.handleBlur}
                  value={formProps.values.search}
                />
                <ButtonInputContainer type="submit">
                  <Search />
                </ButtonInputContainer>
              </InputContainer>
            )}
          </Formik>
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
