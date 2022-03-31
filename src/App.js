import './App.css';
import MyButton from './components/MyButton';
import Display from './components/Display';
import MyClearButton from './components/MyClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState("");

  const addInput = (valor) => {
    setInput(input + valor)
  };

  const calcResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("¡Debe ingresar valores para realizar los cálculoss!")
    };
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Calculadora</h1>
      </div>
      <div className="calculator-container">
        <Display input={input}/>
        <div className="file">
          <MyButton handleClick={addInput}>1</MyButton>
          <MyButton handleClick={addInput}>2</MyButton>
          <MyButton handleClick={addInput}>3</MyButton>
          <MyButton handleClick={addInput}>+</MyButton>
        </div>
        <div className="file">
          <MyButton handleClick={addInput}>4</MyButton>
          <MyButton handleClick={addInput}>5</MyButton>
          <MyButton handleClick={addInput}>6</MyButton>
          <MyButton handleClick={addInput}>-</MyButton>
        </div>
        <div className="file">
          <MyButton handleClick={addInput}>7</MyButton>
          <MyButton handleClick={addInput}>8</MyButton>
          <MyButton handleClick={addInput}>9</MyButton>
          <MyButton handleClick={addInput}>*</MyButton>        
        </div>
        <div className="file">
          <MyButton handleClick={calcResult}>=</MyButton>
          <MyButton handleClick={addInput}>0</MyButton>
          <MyButton handleClick={addInput}>.</MyButton>
          <MyButton handleClick={addInput}>/</MyButton>        
        </div>
        <div className="file">
          <MyClearButton handleClear={() => setInput("")}>
            Borrar
          </MyClearButton>
        </div>
      </div>
    </div>
  );
}
  
export default App;
