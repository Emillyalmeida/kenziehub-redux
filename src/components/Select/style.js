import styled, { css } from "styled-components";

export const SelectDiv = styled.div`
  margin-top: 1rem;
  select {
    width: 100%;
    height: 36px;
    background-color: var(--gray-medium);
    border: 2px solid var(--gray-medium);
    border-radius: 4px;
    color: var(--gray-ligth);
  }
  option {
    padding-left: 45px;
    color: var(--gray-ligth);
  }
  ${(props) =>
    props.isError &&
    css`
      margin-top: 0.5rem;
      label {
        color: var(--red-pink);
      }
      select {
        border: 1px solid var(--red-pink);
      }
      span {
        color: var(--red-pink);
        font-weight: 400;
        font-size: 0.7rem;
      }
    `}
`;
