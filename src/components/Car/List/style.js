import styled from 'styled-components';

import { ITEM_WIDTH } from '../Item/styles';

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Separator = styled.hr`
  height: 0px;
  border: #ffffff1a solid 1px;

  &:last-child {
    display: none;
  }

  ${ITEM_WIDTH}
`;
