import React, { useState, useCallback } from 'react';
import { Menu, Close, Search } from '@material-ui/icons';
import { Formik } from 'formik';

import { useSelector, useDispatch } from 'react-redux';
import {
  Wrapper,
  Button,
  ButtonContainer,
  Input,
  InputContainer,
  ButtonInputContainer,
} from './styles';
import colors from '../../../styles/colors';
import { greaterThan } from '../../../helpers/sizes';
import { Types } from '../../../store/ducks/sidebar';

const Header = () => {
  const { laptop: gtLaptop } = greaterThan;
  const [isGreaterThanLaptop, setIsGreaterThanLaptop] = useState(gtLaptop());
  const formik = {
    initialValues: {
      search: '',
    },
    onSubmit: () => null,
  };
  const showingSidebar = useSelector((state) => state.sidebar.showing);
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
      <ButtonContainer hideOnLaptop>
        <Button onClick={() => dispatcher({ type: Types.SET_SHOWING, showing: !showingSidebar })}>
          {
        !showingSidebar ? <Menu /> : <Close />
      }
        </Button>
      </ButtonContainer>
      <Formik
        onSubmit={formik.onSubmit}
        initialValues={formik.initialValues}
      >
        {(formProps) => (
          <InputContainer
            hideOnMobile={showingSidebar}
            onSubmit={formProps.handleSubmit}
          >
            <Input
              placeholder="Pesquise por um veículo"
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
      <ButtonContainer hideOnMobile={showingSidebar}>
        <Button bold bgColor="white" width="auto" color={colors.header}>
          Cadastrar
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Header;
