import styled, { css } from 'styled-components';

import colors from '../../../styles/colors';
import { minWidth, maxWidth } from '../../../styles/devices';

export const CONTAINER_HEIGHT = '94px';
export const DEFAULT_SIDEBAR_ELEMENTS_SIZE = '45px';

const CSSs = {
  container: css`
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    @media ${maxWidth.mobileXL} {
      display: ${(props) => (props.hideOnMobile ? 'none' : '')};
    }
  `,
};

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: ${colors.header};
  height: ${CONTAINER_HEIGHT};
  top: 0;
`;

export const Button = styled.button`
  width: ${(props) => props.width || DEFAULT_SIDEBAR_ELEMENTS_SIZE};
  height: ${(props) => props.height || DEFAULT_SIDEBAR_ELEMENTS_SIZE};
  background: ${(props) => props.bgColor || 'transparent'};
  font-weight: ${(props) => (props.bold ? '700' : '')};
  color: ${(props) => props.color};
  padding: 10px;
  border-radius: 3px;
`;

export const ButtonContainer = styled.div`
  ${CSSs.container}

  @media ${minWidth.laptop} {
    display: ${(props) => props.hideOnLaptop && 'none'};
  }
`;

export const Input = styled.input`
  height: ${DEFAULT_SIDEBAR_ELEMENTS_SIZE};
  border-radius: 5px;
  padding: 0 5px;
  width: 100%;
  background-color: transparent;
  border: ${colors.input} solid 2px;
  ::placeholder {
    color: ${colors.input}; 
  }
  :-ms-input-placeholder {
    color: ${colors.input}; 
  }
  ::-ms-input-placeholder {
    color: ${colors.input}; 
  }
`;

export const InputContainer = styled.form`
  width: 50%;
  ${CSSs.container}

  @media ${minWidth.tablet} {
    width: 70%;
  }
`;

export const ButtonInputContainer = styled(Button)`
  position: absolute;
  right: 0;
  background-color: white;
  border-radius: 5px;
  border-color: ${colors.input} ${colors.input} ${colors.input};
  border-style: solid;
  border-width: 2px 2px 2px 0;
  color: ${colors.header};
  > svg {
    fill: ${colors.header};
  }
`;
