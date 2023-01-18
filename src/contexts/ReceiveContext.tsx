import {
  IReceiveContext,
  IReceiveContextProps,
  IReceiveResponse,
  IReciveProps,
} from "./interfaces";
import { createContext } from "react";
import api from "../services/api";

export const ReceiveContext = createContext<IReceiveContext>(
  {} as IReceiveContext
);

const ReceiveProvider = ({ children }: IReceiveContextProps) => {
  async function getReceive(data: IReciveProps) {
    return await api
      .post<IReceiveResponse>("", { data })
      .then((response) => console.log(response))
      .then((response) => response)
      .catch((error) => console.log(error));
  }

  return (
    <ReceiveContext.Provider value={{ getReceive }}>
      {children}
    </ReceiveContext.Provider>
  );
};

export default ReceiveProvider;
