import styled from "styled-components";

export const DivLogo = styled.div`
  display: flex;
  width: 40%;
  min-width: 300px;
  height: 12%;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  max-width: 450px;
  width: 40%;
  height: 65%;
  background-color: var(--gray-dark);
  border-radius: 10px;
  padding: 10px;
  h2 {
    margin-top: 1rem;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const Form = styled.form`
  width: 90%;
  height: 60%;
`;

export const DivNotcount = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }
`;
