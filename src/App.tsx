import { useState } from 'react';
import { add } from './stringCalculator';
import './App.css';

function App() {
  const [inputString, setInputString] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const appendToInput = (value: string) => {
    setInputString((prev) => prev + value);
    setResult(null);
    setError(null);
  };

  const handleCalculate = () => {
    try {
      const sum = add(inputString);
      setResult(sum);
      setError(null);
    } catch (err: any) {
      setResult(null);
      setError(err.message);
    }
  };

  const handleClear = () => {
    setInputString('');
    setResult(null);
    setError(null);
  };

  return (
    <div className="App">
      <h1>Calculator</h1>

      <div className="ContainerOut">
        <div className="ContainerOutLvlOne">
          {inputString || <i>Enter input</i>}
        </div>
    
        <div className="ContainerOutLvlTwo" >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button key={num} onClick={() => appendToInput(num.toString())}>
              {num}
            </button>
          ))}
          <button onClick={() => appendToInput(',')}>Comma (,)</button>
          <button onClick={() => appendToInput('\\n')}>New Line (\\n)</button>
          <button onClick={() => appendToInput('//;\n')}>Custom Delim</button>
        </div>

        <div className="btncalClrDiv">
          <button onClick={handleClear} style={{ flex: 1, marginRight: '0.5rem' }}>Clear</button>
          <button onClick={handleCalculate} style={{ flex: 1 }}>Calculate</button>
        </div>

        <div style={{ marginTop: '1rem' }}>
          {result !== null && <p>Result: {result}</p>}
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
