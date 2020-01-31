import styled from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > h1 {
    width: calc(4em + 9vw);
    font-size: calc(4em + 4vw);
    font-family: 'Engagement', cursive;
    text-align: center;
    text-align-last: right;
    font-weight: lighter;
    > span {
      background-color: ${colors.span};
      z-index: -1;
    }
  }
`;

export const x = {};
