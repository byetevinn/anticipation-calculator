import { useContext, useState } from "react";
import { ReceiveContext } from "../../contexts/ReceiveContext";
import { StyledDiv } from "./style";
import { useForm } from "react-hook-form";
import { IReciveProps } from "./interfaces";

function Form() {
  const { register, handleSubmit } = useForm();
  const [inputValue, setInputValue] = useState({} as IReciveProps);

  const { getReceive } = useContext(ReceiveContext);

  const onSubmit = (data: any) => {
    setInputValue(data);
  };

  getReceive(inputValue);

  return (
    <StyledDiv>
      <h1>Simule sua Antecipação</h1>
      <form onChange={handleSubmit(onSubmit)}>
        <ul>
          <li>
            <p>Informe o valor da venda</p>
            <input type="number" {...register("amount")} />
          </li>
          <li>
            <p>Em quantas parcelas</p>
            <input type="number" {...register("installments")} />
            <span>Máximo de 12 parcelas</span>
          </li>
          <li>
            <p>Informe o percentual de MDR</p>
            <input type="number" {...register("mdr")} />
          </li>
        </ul>
      </form>
    </StyledDiv>
  );
}

export default Form;
