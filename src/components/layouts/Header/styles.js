import styled, { css } from 'styled-components';

import colors from '../../../styles/colors';
import { minWidth, maxWidth } from '../../../styles/devices';
import { Button } from '../../Form';
import { CONTAINER_HEADER_HEIGHT } from '../../../styles/elements-sizes';


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
  height: ${CONTAINER_HEADER_HEIGHT};
  top: 0;
`;

export const ButtonContainer = styled.div`
  ${CSSs.container}

  @media ${minWidth.laptop} {
    display: ${(props) => props.hideOnLaptop && 'none'};
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
