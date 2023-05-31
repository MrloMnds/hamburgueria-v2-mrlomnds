import styled from "styled-components";

export const StyledCartModal = styled.section`
  background-color: rgba(51, 51, 51, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  .modalContainer {
    position: relative;
    margin: auto;
    background-color: var(--White);
    border-radius: 5px;
    width: 90%;
    max-width: 500px;
    .closeButton {
      position: absolute;
      right: 15px;
      top: 15px;
      background-color: transparent;
      color: rgba(255, 255, 255, 0.5);
      font-weight: 700;
      font-size: 1rem;
    }
    .title {
      background-color: var(--Primary);
      color: var(--White);
      font-size: 1.125rem;
      padding: 15px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    .divEmptyCart {
      padding: 40px 20px;
      align-items: center;
      h2 {
        font-size: 1.125rem;
        margin-bottom: 10px;
      }
      p {
        font-size: 0.85rem;
        color: var(--Gray-50);
      }
    }

    .cartWithProducts {
      ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 15px;
        max-height: 300px;
        overflow-y: auto;
        li {
          position: relative;
          display: flex;
          gap: 10px;
          .divCartImage {
            width: 40%;
            background-color: var(--Gray-20);
            border-radius: 5px;
            img {
              margin: 0;
              width: 100%;
            }
          }
          .divCartInfo {
            justify-content: space-evenly;
            h3 {
              font-size: 1rem;
            }
            div {
              flex-direction: row;
              width: 70px;
              height: 24px;
              button {
                width: 30%;
                color: var(--Secondary);
                font-weight: 700;
                font-size: 1rem;
              }
              p {
                width: 40%;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
            .trashButton {
              position: absolute;
              top: 30px;
              right: 0px;
              height: 25px;
              width: 20px;
              background-color: transparent;
              img {
                margin: 0;
              }
            }
          }
        }
      }
    }
    .divTotal {
      padding: 15px;
      flex-direction: row;
      justify-content: space-between;
      border-top: 1px solid var(--Gray-20);
      h4 {
        font-size: 0.875rem;
      }
      p {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--Gray-50);
      }
    }
    .removeAllProducts {
      width: unset;
      margin-bottom: 15px;
      margin-inline: 15px;
    }
  }
`;
