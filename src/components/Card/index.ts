import styled from "styled-components";

export const Card = styled.li`
  min-width: 270px;
  border: 2px solid var(--Gray-20);
  border-radius: 8px;
  max-height: 350px;
  margin-top: 10px;

  .imgDiv {
    background-color: var(--Gray-10);
    height: 150px;
    display: flex;
    align-items: center;

    img {
      height: 100%;
      width: unset;
      margin: 0;
    }
  }

  .infoDiv {
    gap: 20px;
    padding: 20px;
  }

  &:hover {
    border: 2px solid var(--Primary);
  }
`;
