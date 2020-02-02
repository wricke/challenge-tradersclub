import React from 'react';
import styled, { css } from 'styled-components';
import { FormHelperText, InputBase } from '@material-ui/core';

import colors from '../../styles/colors';
import { DEFAULT_SIDEBAR_ELEMENTS_SIZE } from '../../styles/elements-sizes';

const includeError = (props) => (props.error && props.touched ? 'red' : colors.input);
const inputCSS = css`
  height: ${DEFAULT_SIDEBAR_ELEMENTS_SIZE};
  border-radius: 5px;
  padding: 0 5px;
  width: ${(props) => props.width || '100%'};
  background-color: transparent;
  border: ${includeError} solid 2px;
  ::placeholder, :-ms-input-placeholder, ::-ms-input-placeholder {
    color: ${includeError}; 
  }
`;

export const Input = styled.input`${inputCSS}`;

export const Button = styled.button`
  width: ${(props) => props.width || DEFAULT_SIDEBAR_ELEMENTS_SIZE};
  height: ${(props) => props.height || DEFAULT_SIDEBAR_ELEMENTS_SIZE};
  background: ${(props) => (props.outline ? 'transparent' : props.bgColor || 'transparent')};
  font-weight: ${(props) => (props.bold ? '700' : '')};
  color: ${(props) => props.color};
  padding: 10px;
  border-radius: 3px;
  ${(props) => props.outline && `
    border-color: white;
    border-style: solid;
    border-width: 2px;
  `}
`;

const Container = styled.div`
  width: ${(props) => props.width || '100%'};
`;

export const Select = styled(InputBase)`${inputCSS}`;

export const Field = ({
  error, touched, width = '100%', component: Component, ...props
}) => (
  <Container width={width}>
    <Component
      width="100%"
      {...props}
    />
    <FormHelperText color={colors.input}>{(touched || !/(obrigatóri(o|a)\.$)/.test(error)) && error}</FormHelperText>
  </Container>
);
