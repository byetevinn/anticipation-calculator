import { ChangeEventHandler, useContext, useEffect, useState } from "react";
import { validationSchema } from "../../validators/formValidation";
import { ReceiveContext } from "../../contexts/ReceiveContext";
import "react-toastify/dist/ReactToastify.css";
import { IReciveProps } from "./interfaces";
import { toast } from "react-toastify";
import { StyledDiv } from "./style";

function Form() {
  const [inputValue, setInputValue] = useState({} as IReciveProps);
  const [saleValue, setSaleValue] = useState(String);

  const { getReceive } = useContext(ReceiveContext);

  const onSubmit: ChangeEventHandler<HTMLInputElement> = (event) => {
    const name = event.target.name;
    const value = parseInt(event.target.value);

    if (name === "installments") {
      setInputValue({ ...inputValue, installments: value });
    } else {
      setInputValue({ ...inputValue, mdr: value });
    }
  };

  const onSale: ChangeEventHandler<HTMLInputElement> = (event) => {
    let value = stringToNumber(event.target.value);

    const amount = value;

    setInputValue({ ...inputValue, amount });

    valueBRL(value);
  };

  const validationForm = async () => {
    try {
      await validationSchema.validate({ ...inputValue }, { abortEarly: true });

      getReceive(inputValue);
    } catch (err: any) {
      console.log(err);

      const obj = Object.keys(inputValue);

      obj.length > 0 &&
        toast.error(err.message, { autoClose: 1000, theme: "dark" });
    }
  };

  const stringToNumber = (value: String) => {
    return parseInt(value.replace(/[^0-9]/g, "")) / 100;
  };

  const valueBRL = (value: number) => {
    value = isNaN(value) ? 0.0 : value;

    const newValue = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    setSaleValue(newValue);
  };

  useEffect(() => {
    const count = setTimeout(() => {
      validationForm();
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
