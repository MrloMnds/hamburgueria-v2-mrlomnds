import styled from "styled-components";

export const HeaderMobile = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 15px;
  background-color: var(--Gray-10);

  .divButtonsHeader {
    flex-direction: row;
    width: fit-content;
    gap: 20px;
    img {
      height: 20px;
      &:hover {
        cursor: pointer;
      }
    }
    .cartDiv {
      position: relative;
    }
    .productsOnCart {
      background-color: var(--Primary);
      width: fit-content;
      padding-inline: 4px;
      padding-bottom: 1px;
      border-radius: 5px;
      position: absolute;
      top: -13px;
      right: -11px;
      color: #fff;
      font-weight: 900;
      font-size: 14px;
    }
  }
  @media (min-width: 880px) {
    padding-inline: 100px;

    
  }
`;
