import styled from 'styled-components';

import colors from '../../styles/colors';
import { minWidth, maxWidth } from '../../styles/devices';

import tcLogo from '../../assets/logo-tc.png';
import car from '../../assets/car-wireframe.png';
import sizes from '../../styles/sizes';

const SIDEBAR_WIDTH = '252px';
const HEADER_HEIGHT = '94px';
const DEFAULT_SIDEBAR_ELEMENTS_SIZE = '45px';

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
  display: flex;
  justify-content: space-around;
  background: ${colors.header};
  height: ${HEADER_HEIGHT};
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
  height: 100%;
  display: flex;
  align-items: center;

  @media ${maxWidth.mobileXL} {
    display: ${(props) => (props.hideOnMobile && 'none')};
  }
  @media ${minWidth.laptop} {
    display: ${(props) => props.hideOnLaptop && 'none'};
  }
`;

export const PageContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  background: linear-gradient(${colors.wrapper.concat('F2')}, ${colors.wrapper.concat('F2')}),
    url(${car}) no-repeat center;
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  @media ${minWidth.laptop} {
    background-size: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${minWidth.laptop.replace(/\d+/, sizes.laptop + 1)} {
    width: calc(100% - ${SIDEBAR_WIDTH});
  }
`;

export const Input = styled.input`
  height: ${DEFAULT_SIDEBAR_ELEMENTS_SIZE};
  border-radius: 5px;
  padding: 0 5px;
  width: 100%;
  background-color: transparent;
  border: white solid 2px;
`;

export const InputContainer = styled.form`
  height: 100%;
  display: flex;
  align-items: center;
  width: 50%;
  position: relative;
  @media ${maxWidth.mobileXL} {
    display: ${(props) => (props.hide ? 'none' : '')};
  }
  @media ${minWidth.tablet} {
    width: 70%;
  }
`;

export const ButtonInputContainer = styled(Button)`
  position: absolute;
  right: 0;
  background-color: white;
  color: ${colors.header};
  > svg {
    fill: ${colors.header};
  }
`;

export const x = {};
