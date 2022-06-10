import styled from "styled-components";
import Logokenzie from "../../assets/Logo.svg";

export const LogoMain = styled.div`
  background: url(${Logokenzie}) no-repeat var(--gray-black);
  background-position: left;
  background-size: contain;
  height: 100%;
  width: 130px;
  @media (min-width: 768px) {
    width: 200px;
  }
`;
