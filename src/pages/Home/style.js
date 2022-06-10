import styled from "styled-components";

export const Box = styled.div`
  max-width: 400px;
  min-width: 250px;
  width: 50%;
  h1 {
    text-align: center;
    color: var(--pink);
    font-size: 3.5rem;
  }
  div {
    display: flex;
    flex: 1;
    margin-top: 1rem;
    button + button {
      margin-left: 1rem;
    }
  }
`;
