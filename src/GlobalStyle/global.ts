import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Inter", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --Black: #000;
    --White: #fff;
    --Primary: #27AE60;
    --Primary-50: #93D7AF;
    --Secondary: #EB5757;
    --Gray-100: #333333;
    --Gray-50: #828282;
    --Gray-20: #E0E0E0;
    --Gray-10: #f5f5f5;
    --Negative: #E60000;
    --Warning: #FFCD07;
    --Success: #168821;
  }

  span {
    color: var(--Primary);
  }

  button {
    cursor: pointer;
    border: none;
  }

  ul, ol {
    list-style: none;
  }

  section, aside, div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
    label {
      font-size: 0.75rem;
      color: var(--Gray-50);
      padding-left: 5px;
    }
    p {
      color: var(--Negative);
      font-size: 0.875rem;
      padding-left: 10px;
    }
  }

  form {
    border: 2px solid var(--Gray-20);
    border-radius: 5px;
    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 15px;
    width: 99.5%;
    max-width: 377px;
    margin-top: 15px;
    .h2Div {
      flex-direction: row;
      justify-content: space-between;
      h2 {
        font-size: 1.125rem;
      }
      p {
        color: var(--Gray-50);
        font-size: 0.875rem;
        border-bottom: 2px solid var(--Gray-20);
        &:hover {
          cursor: pointer;
        }
      }
    }
    .pDiv {
      font-size: 0.8rem;
      color: var(--Gray-50);
      width: fit-content;
      align-items: center;
    }
    
    @media (min-width: 1000px) {
      max-width: 500px;
    }
  }
`;
