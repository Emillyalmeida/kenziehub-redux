import styled from "styled-components";

export const LiCard = styled.li`
  width: 100%;
  min-height: 45px;
  background-color: var(--gray-black);
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  &:hover {
    background-color: var(--gray-medium);
  }
  h4 {
    margin-left: 0.5rem;
    font-size: 1.1rem;
  }
  span {
    margin-right: 0.5rem;
    font-size: 0.9rem;
  }
`;
