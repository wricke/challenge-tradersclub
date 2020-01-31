import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Separator = styled.hr`
  width: 100%;
  height: 0px;
  border: #ffffff1a solid 1px;

  &:last-child {
    display: none;
  }
`;
