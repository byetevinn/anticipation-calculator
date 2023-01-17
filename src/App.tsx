import Installments from "./components/Installments";
import Form from "./components/Form";

import GlobalStyle from "./styles/GlobalStyle";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Form />
      <Installments />
    </div>
  );
}

export default App;
