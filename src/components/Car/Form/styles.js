import styled from 'styled-components';

import { Button as Btn, Field as F } from '../../Form';

export const Wrapper = styled.form`
  > .container {
    display: flex;
    justify-content: space-between;
    > div input {
      width: 100%;
    }
    input {
      border-width: 0 0 1px 0;
      border-radius: 0;
    }
    .half {
      width: 50%;
      button {
        margin-right: 5px;
      }
    }
  }
`;

export const Field = styled(F)`
  width: ${(props) => props.width || '100%'};
`;

export const Button = styled(Btn)``;
