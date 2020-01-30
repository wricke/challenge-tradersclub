import styled from 'styled-components';

import colors from '../../styles/colors';
import { minWidth } from '../../styles/devices';

import car from '../../assets/car-wireframe.png';
import sizes from '../../styles/sizes';
import { SIDEBAR_WIDTH } from '../../components/layouts/Sidebar/styles';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: ${colors.wrapper};
  position: relative;
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

export const x = {};
