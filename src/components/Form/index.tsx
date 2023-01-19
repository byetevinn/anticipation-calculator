import { ChangeEventHandler, useContext, useEffect, useState } from "react";
import { ReceiveContext } from "../../contexts/ReceiveContext";
import { StyledDiv } from "./style";
import { IReciveProps } from "./interfaces";

function Form() {
  const [inputValue, setInputValue] = useState({} as IReciveProps);
  const [saleValue, setSaleValue] = useState(String || Number);

  const { getReceive } = useContext(ReceiveContext);

  const onSubmit: ChangeEventHandler<HTMLInputElement> = (data) => {
    const name = data.target.name;
    const value = data.target.value;

    if (name === "installments") {
      setInputValue({ ...inputValue, installments: value });
    } else {
      setInputValue({ ...inputValue, mdr: value });
    }
  };

  const onSale: ChangeEventHandler<HTMLInputElement> = (data) => {
    let value = stringToNumber(data.target.value);

    const amount = value.toString();

    setInputValue({ ...inputValue, amount });

    valueBRL(value);
  };

  const stringToNumber = (value: String) => {
    return parseInt(value.replace(/[^0-9]/g, "")) / 100;
  };

  const valueBRL = (value: Number) => {
    const newValue = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    setSaleValue(newValue);
  };

  useEffect(() => {
    const count = setTimeout(() => {
      const objValues = Object.values(inputValue);

      if (objValues.length >= 3) {
        if (objValues.every((value) => value !== "")) {
          getReceive(inputValue);
        }
      }
    }, 600);

    return () => clearTimeout(count);
  }, [inputValue]);

  return (
    <StyledDiv>
      <h1>Simule sua Antecipação</h1>
      <form>
        <ul>
          <li>
            <p>Informe o valor da venda</p>
            <input
              onChange={onSale}
              defaultValue={"R$ 0,00"}
              value={saleValue}
            />
          </li>
          <li>
            <p>Em quantas parcelas</p>
            <input type="number" onChange={onSubmit} name="installments" />
            <span>Máximo de 12 parcelas</span>
          </li>
          <li>
            <p>Informe o percentual de MDR</p>
            <input type="number" onChange={onSubmit} name={"mdr"} />
          </li>
        </ul>
      </form>
    </StyledDiv>
  );
}

export default Form;
