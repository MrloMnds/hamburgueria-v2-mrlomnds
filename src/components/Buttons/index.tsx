import styled, { css } from "styled-components";

interface iStyledButtonProps {
  buttonSize: "default" | "medium";
  buttonStyle: "green" | "gray";
  position?: string;
  backgroundColor?: string;
}

export const StyledButton = styled.button<iStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "default":
        return css`
          padding: 0px 20px;
          width: 100%;
          height: 60px;
        `;
      case "medium":
        return css`
          padding: 0px 20px;
          width: 106px;
          height: 40px;
        `;
      default:
        return false;
    }
  }}

  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case "green":
        return css`
          color: var(--White);
          background-color: var(--Primary);
          &:hover {
            background-color: var(--Primary-50);
          }
        `;
      case "gray":
        return css`
          color: var(--Gray-50);
          background-color: var(--Gray-20);
          &:hover {
            background-color: var(--Gray-50);
            color: var(--Gray-20);
          }
        `;
      default:
        return false;
    }
  }}

  ${({ position }) => {
    return css`
      position: ${position};
      top: 10px;
      right: 10px;
    `;
  }}

  background-color: var(
    ${({ backgroundColor }) => backgroundColor && backgroundColor}
  );
`;
