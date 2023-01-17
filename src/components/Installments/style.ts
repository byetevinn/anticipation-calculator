import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  background: rgba(209, 220, 227, 0.18);

  padding: 20px 0px;
  h2 {
    font-size: 1.33rem;
    font-weight: 700;
    font-style: italic;

    color: var(--color-secondary);
  }

  hr {
    opacity: 0.3;
    border: 1px solid var(--color-fourth);
  }

  ol {
    width: max-content;
    li {
      padding: 10px 0px;
      p {
        display: flex;

        font-size: 1.33rem;
        font-weight: 400;

        color: var(--color-fourth);

        span {
          font-weight: 600;
        }
      }
    }
  }
  @media (min-width: 720px) {
    padding: 110px 0px;
  }
`;
