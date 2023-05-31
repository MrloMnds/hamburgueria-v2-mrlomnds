import styled from "styled-components";

export const StyledHeadline = styled.div`
  border: 2px solid var(--Gray-20);
  border-radius: 5px;
  width: 100%;
  max-width: 377px;
  height: 95px;
  padding: 13px;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);

  div {
    min-width: 60px;
    width: 60px;
    height: 60px;
    border-radius: 5px;
    background-color: #27ae601a;
    img {
      margin: 0;
      margin: auto;
      height: 40%;
    }
  }

  p {
    color: var(--Gray-50);
    font-size: 0.875rem;
    span {
      font-weight: 700;
      color: var(--Black);
    }
  }
  
  @media (min-width: 1000px) {
    max-width: 500px;
  }
`;
