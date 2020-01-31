import styled from 'styled-components';

export const Separator = styled.hr`
  width: 100%;
  height: 0px;
  border: #ffffff1a solid 0.4px;
`;

export const Container = styled.div`
  width: 100%;
  &:last-child {
    hr {
      display: none;
    }
  }
`;
