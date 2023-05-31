import styled, { css } from "styled-components";

interface iHeadingsProps {
  children: React.ReactNode;
  tag: string;
  className?: string;
  fontWeight?: number;
  color?: string;
  fontSize: "one" | "two" | "three" | "four";
  paddingTop?: number;
}

const Headings = ({ children, tag, className }: iHeadingsProps) => {
  return (
    <>
      {tag === "h1" && <h1 className={className}>{children}</h1>}
      {tag === "h2" && <h2 className={className}>{children}</h2>}
      {tag === "h3" && <h3 className={className}>{children}</h3>}
      {tag === "h4" && <h4 className={className}>{children}</h4>}
    </>
  );
};

export const StyledHeadings = styled(Headings)`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 600)};
  color: var(${({ color }) => (color ? color : "--Black")});
  ${({ fontSize }) => {
    switch (fontSize) {
      case "one":
        return css`
          font-size: 1.625rem;
        `;
      case "two":
        return css`
          font-size: 1.375rem;
        `;
      case "three":
        return css`
          font-size: 1.125rem;
        `;
      case "four":
        return css`
          font-size: 0.875rem;
        `;
      default:
        return false;
    }
  }}
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : 0)}px;
`;
