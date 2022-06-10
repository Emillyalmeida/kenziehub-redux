import styled, { css } from "styled-components";

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  margin-top: 1rem;
  input {
    width: 100%;
    height: 37px;
    background-color: var(--gray-medium);
    border: 2px solid var(--gray-medium);
    border-radius: 4px;
  }
  input::placeholder {
    padding-left: 5px;
    color: var(--gray-ligth);
  }
  ${(props) =>
    props.isError &&
    css`
      margin-top: 0.5rem;
      label {
        color: var(--red-pink);
      }
      input {
        border: 1px solid var(--red-pink);
      }
      span {
        color: var(--red-pink);
        font-weight: 400;
        font-size: 0.8rem;
        padding: 5px;
      }
    `}
`;
