import React, { useState } from 'react';
import './style.css'

function App() {
  const [input, setInput] = useState(''); // The current input string
  const [result, setResult] = useState(0); // The result of the calculation

  const putInputScreen = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInputScreen = () => {
    setInput('');
    setResult(0);
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} disabled />
        <input value={result}/>
      </div>
      <div className="button">
        <button onClick={() => putInputScreen('1')}>1</button>
        <button onClick={() => putInputScreen('2')}>2</button>
        <button onClick={() => putInputScreen('3')}>3</button>
        <button onClick={() => putInputScreen('4')}>4</button>
        <button onClick={() => putInputScreen('5')}>5</button>
        <button onClick={() => putInputScreen('6')}>6</button>
        <button onClick={() => putInputScreen('7')}>7</button>
        <button onClick={() => putInputScreen('8')}>8</button>
        <button onClick={() => putInputScreen('9')}>9</button>
        <button onClick={() => putInputScreen('0')}>0</button>
        <button onClick={() => putInputScreen('+')}>+</button>
        <button onClick={() => putInputScreen('-')}>-</button>
        <button onClick={() => putInputScreen('*')}>*</button>
        <button onClick={() => putInputScreen('/')}>/</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={clearInputScreen}>C</button>
      </div>
    </div>
  );
}

export default App;
