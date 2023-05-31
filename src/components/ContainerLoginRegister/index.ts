import styled from "styled-components";

export const ContainerLoginRegister = styled.div`
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  position: relative;
  align-items: center;

  img {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .divInput {
    position: relative;
    max-width: 288px;
    margin: 0 auto;
    margin-bottom: 10px;
    img {
      position: absolute;
      height: 30px;
      top: 5px;
      right: 6px;
      background-color: var(--Primary);
      margin: 0;
      width: 40px;
      border-radius: 5px;
      padding: 5px;
    }
  }
`;