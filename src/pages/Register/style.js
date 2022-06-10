import styled from "styled-components";

export const DivLogo = styled.div`
  display: flex;
  width: 40%;
  min-width: 300px;
  height: 12%;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  button {
    background-color: var(--gray-dark);
    border: none;
    color: var(--gray-white);
    border-radius: 5px;
    height: 65%;
    width: 70px;
    font-size: 0.8rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 40%;
  max-width: 800px;
  height: auto;
  background-color: var(--gray-dark);
  border-radius: 10px;
  padding: 10px;
  padding-bottom: 30px;
  overflow-y: scroll;
  margin: 20px 0;
  ::-webkit-scrollbar {
    display: none;
  }
  h2 {
    margin-top: 1rem;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.9rem;
  }
`;

export const Form = styled.form`
  width: 90%;
  height: auto;
`;
