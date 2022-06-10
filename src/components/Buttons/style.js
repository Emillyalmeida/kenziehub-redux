import styled from "styled-components";

export const Buttom = styled.button`
  background-color: ${(props) => (props.whiteTheme ? "#FF577F" : "#868E96")};
  color: var(--gray-white);
  border-radius: 7px;
  height: 48px;
  margin-top: 16px;
  font-family: "Inter", serif;
  width: 100%;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  :hover {
    background-color: ${(props) => (props.whiteTheme ? "#FF427F" : "#343B41")};
  }
`;
