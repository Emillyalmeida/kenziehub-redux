import styled from "styled-components";

export const NavBar = styled.nav`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  @media (min-width: 1024px) {
    width: 80%;
  }
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

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
  height: 15%;
  padding: 10px;
  width: 100%;
  background-color: var(--gray-black);
  @media (min-width: 1024px) {
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  h2 {
    font-size: 1.2rem;
    @media (min-width: 1024px) {
    }
  }
  p {
    font-size: 0.9rem;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 72%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
  @media (min-width: 1024px) {
    width: 80%;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10%;
    button {
      background-color: var(--gray-dark);
      border: none;
      color: var(--gray-white);
      border-radius: 5px;
      height: 85%;
      width: 50px;
      font-size: 1.8rem;
      font-weight: bold;
    }
  }
`;

export const ListTech = styled.ul`
  background-color: var(--gray-dark);
  width: 100%;
  height: 88%;
  overflow-y: scroll;
  padding: 10px;
  > h3 {
    text-align: center;
    margin-top: 1rem;
  }
`;
