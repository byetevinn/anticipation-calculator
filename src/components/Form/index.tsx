import { StyledDiv } from "./style";

function Form() {
  return (
    <StyledDiv>
      <h1>Simule sua Antecipação</h1>
      <form>
        <ul>
          <li>
            <p>Informe o valor da venda</p>
            <input type="number" />
          </li>
          <li>
            <p>Em quantas parcelas</p>
            <input type="number" />
            <span>Máximo de 12 parcelas</span>
          </li>
          <li>
            <p>Informe o percentual de MDR</p>
            <input type="number" />
          </li>
        </ul>
      </form>
    </StyledDiv>
  );
}

export default Form;
