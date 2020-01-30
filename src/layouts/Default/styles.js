import styled from 'styled-components';

import colors from '../../styles/colors';
import { minWidth, maxWidth } from '../../styles/devices';

import tcLogo from '../../assets/logo-tc.png';
import car from '../../assets/car-wireframe.png';
import sizes from '../../styles/sizes';

const SIDEBAR_WIDTH = '252px';
const HEADER_HEIGHT = '94px';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: ${colors.wrapper};
  position: relative;
`;

export const Sidebar = styled.aside`
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

export const Header = styled.header`
  width: 100%;
  background: ${colors.header};
  height: ${HEADER_HEIGHT};
  top: 0;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
`;

export const ButtonContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  @media ${minWidth.laptop} {
    display: none;
  }
`;

export const PageContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  background: linear-gradient(${colors.header.concat('E6')}, ${colors.header.concat('E6')}),
    url(${car}) no-repeat center;
  background-repeat: no-repeat;
    background-size: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${minWidth.laptop.replace(/\d+/, sizes.laptop + 1)} {
    width: calc(100% - ${SIDEBAR_WIDTH});
  }
`;

export const x = {};
