import { useState } from 'react';
import { add } from './stringCalculator';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [inputString, setInputString] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAddNumber = () => {
    if (number.trim() === '') return;

    // Prevent accidental characters
    if (!/^-?\d+$/.test(number.trim())) {
      setError('Only integers are allowed');
      return;
    }

    const newInput = inputString === '' ? number : `${inputString},${number}`;
    setInputString(newInput);
    setNumber('');
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
    setNumber('');
    setResult(null);
    setError(null);
  };

  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>String Calculator</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter number"
        />
        <button onClick={handleAddNumber} style={{ marginLeft: '0.5rem' }}>
          Add Number
        </button>
        <button onClick={handleClear} style={{ marginLeft: '0.5rem' }}>
          Clear
        </button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <strong>Current Input:</strong>
        <div
          style={{
            padding: '0.5rem',
            border: '1px solid #ccc',
            minHeight: '40px',
            marginTop: '0.5rem',
            backgroundColor: '#f9f9f9',
          }}
        >
          {inputString || <i>Empty</i>}
        </div>
      </div>

      <button onClick={handleCalculate}>Calculate</button>

      <div style={{ marginTop: '1rem' }}>
        {result !== null && <p>Result: {result}</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      </div>
    </div>
  );
}

export default App;
