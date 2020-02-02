import styled, { css } from 'styled-components';

import { minWidth } from '../../../styles/devices';
import { PADDING_SIZE } from '../../../styles/elements-sizes';

export const ITEM_WIDTH = css`
  width: calc(100% - ${PADDING_SIZE});

  @media ${minWidth.mobileXL} {
    width: 80%;
  }

  @media ${minWidth.tablet} {
    width: 100%;
  }
`;

export const Wrapper = styled.li`
  min-height: calc(120px - ${PADDING_SIZE});
  padding: ${PADDING_SIZE};
  :hover {
    background-color: #FFFFFF33;
  }

  > a {
    width: 100%;
  }

  > div, a {
    display: flex;
    justify-content: space-between;
    
    > div {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  
      &:last-child {
        text-align: right;
      }
  
      > p {
        &:first-child {
          margin-bottom: 8px;
          font-weight: bolder;
        }
      }
    }
  }
  
  ${ITEM_WIDTH}
`;
