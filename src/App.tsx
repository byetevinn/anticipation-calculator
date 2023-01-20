import ReceiveProvider from "./contexts/ReceiveContext";
import Installments from "./components/Installments";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/GlobalStyle";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <ReceiveProvider>
      <ToastContainer />
      <div className="App">
        <GlobalStyle />
        <Form />
        <Installments />
      </div>
    </ReceiveProvider>
  );
}

export default App;
