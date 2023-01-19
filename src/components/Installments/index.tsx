import { ReceiveContext } from "../../contexts/ReceiveContext";
import { StyledDiv } from "./style";
import { useContext } from "react";

function Installments() {
  const { installments } = useContext(ReceiveContext);

  const valueBRL = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <StyledDiv>
      <h2>VOCÊ RECEBERÁ:</h2>
      <hr />
      <ol>
        <li>
          <p>
            Amanhã:
            <span>
              {installments[1] ? valueBRL(installments[1]) : "R$ 0,00"}
            </span>
          </p>
        </li>
        <li>
          <p>
            Em 15 dias:
            <span>
              {installments[15] ? valueBRL(installments[15]) : "R$ 0,00"}
            </span>
          </p>
        </li>
        <li>
          <p>
            Em 30 dias:
            <span>
              {installments[30] ? valueBRL(installments[30]) : "R$ 0,00"}
            </span>
          </p>
        </li>
        <li>
          <p>
            Em 90 dias:
            <span>
              {installments[90] ? valueBRL(installments[90]) : "R$ 0,00"}
            </span>
          </p>
        </li>
      </ol>
    </StyledDiv>
  );
}

export default Installments;
