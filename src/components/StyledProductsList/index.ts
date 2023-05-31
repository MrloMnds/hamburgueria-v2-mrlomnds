import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: 15px;
  min-height: 400px;

  @media (min-width: 880px) {
    flex-wrap: wrap;
    width: 100%;
    overflow-x: unset;
    justify-content: center;
  }
`;
