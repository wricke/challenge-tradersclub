import styled from 'styled-components';

import tcLogo from '../../../assets/logo-tc.png';
import colors from '../../../styles/colors';
import { maxWidth } from '../../../styles/devices';
import sizes from '../../../styles/sizes';

export const SIDEBAR_WIDTH = '252px';

export const Wrapper = styled.aside`
  height: 100%;
  background: ${colors.sidebar};
  min-width: ${SIDEBAR_WIDTH};
  display: flex;
  justify-content: center;

  > h1 {
    margin-top: 37px;
    display: inline-block;
    background: url(${tcLogo}) no-repeat;
    background-size: 70px;
    width: 70px;
    height: 70px;
    color: transparent;
  }

  @media ${maxWidth.laptop.replace(/\d+/, sizes.laptop - 1)} {
    ${(props) => `${!props.show ? 'display: none;' : null}`}
  }
`;
