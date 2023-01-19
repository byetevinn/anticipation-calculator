import {
  IReceiveContext,
  IReceiveContextProps,
  IInstallments,
  IReciveProps,
} from "./interfaces";
import { createContext, useState } from "react";
import api from "../services/api";

export const ReceiveContext = createContext<IReceiveContext>(
  {} as IReceiveContext
);

const ReceiveProvider = ({ children }: IReceiveContextProps) => {
  const [installments, setInstallments] = useState({} as IInstallments);

  async function getReceive(data: IReciveProps) {
    return await api
      .post<IInstallments>("", data)
      .then((response) => setInstallments(response.data))
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <ReceiveContext.Provider value={{ getReceive, installments }}>
      {children}
    </ReceiveContext.Provider>
  );
};

export default ReceiveProvider;
