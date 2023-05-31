import styled from "styled-components";

export const StyledSearchBar = styled.input`
  position: relative;
  width: 100%;
  max-width: 288px;
  border: 2px solid var(--Gray-20);
  border-radius: 8px;
  height: 40px;
  padding-left: 10px;
  background-color: var(--Gray-10);
  &:focus {
    outline: 2px solid var(--Black);
  }
`;
