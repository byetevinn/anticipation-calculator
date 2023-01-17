import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: 100%;

  h1 {
    text-align: center;

    font-size: 2rem;
    color: var(--color-primary);

    padding: 20px;
  }

  form {
    display: flex;
    justify-content: center;

    padding: 20px;

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      height: 100%;
      width: 100%;
      li {
        display: flex;
        flex-direction: column;

        padding: 15px 0px;

        p {
          font-size: 1.16rem;

          color: var(--color-primary);

          padding: 5px 0px;
        }

        span {
          color: #cecece;
          font-size: 0.91;

          padding: 5px 0px;
        }

        input {
          width: 200px;
          height: 20px;

          border: 1px solid var(--color-third);
          border-radius: 4px;
        }

        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }

        input:hover {
          border: 1px solid var(--color-secondary);
        }
        input:focus {
          border: 1px solid var(--color-secondary);
          outline: none;
        }
      }
    }
  }
`;
