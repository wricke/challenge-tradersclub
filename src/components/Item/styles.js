import styled from 'styled-components';

import { minWidth } from '../../styles/devices';

const PADDING_SIZE = '30px';

export const Wrapper = styled.li`
  min-height: calc(120px - ${PADDING_SIZE});
  padding: ${PADDING_SIZE};
  width: calc(100% - ${PADDING_SIZE});
  display: flex;
  justify-content: space-between;
  :hover {
    background-color: #FFFFFF33;
  }

  > div {
    width: 50%;

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

  @media ${minWidth.mobileXL} {
    width: 80%;
  }

  @media ${minWidth.tablet} {
    width: 100%;
  }
`;

export const OrdenedList = styled.ul`
  list-style-type: disc;
  width: 80%;

  @media ${minWidth.tablet} {
    display: flex;

    > li {
      max-width: 31%;
      width: inherit;
      &:first-child {
        list-style-type: none;
      }
    }
  }
`;
