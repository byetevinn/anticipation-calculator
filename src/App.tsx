import Installments from "./components/Installments";
import Form from "./components/Form";

import GlobalStyle from "./styles/GlobalStyle";
import "./App.css";
import ReceiveProvider from "./contexts/ReceiveContext";

function App() {
  return (
    <ReceiveProvider>
      <div className="App">
        <GlobalStyle />
        <Form />
        <Installments />
      </div>
    </ReceiveProvider>
  );
}

export default App;
