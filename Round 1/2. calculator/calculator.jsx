import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NumberCalculator = () => {
  const [numberId, setNumberId] = useState('p'); // Initial number type
  const [storedNumbersBefore, setStoredNumbersBefore] = useState([]);
  const [storedNumbersAfter, setStoredNumbersAfter] = useState([]);
  const [average, setAverage] = useState(0);
  const [error, setError] = useState(null);

  const handleNumberIdChange = (event) => {
    setNumberId(event.target.value);
  };

  const fetchNumberAndCalculate = async () => {
    setError(null); // Clear any previous errors
    try {
      const response = await axios.get(`http://your-server-address:5000/numbers/${numberId}`, {
        timeout: 500, // Set timeout for response
      });
      setStoredNumbersBefore(response.data.before);
      setStoredNumbersAfter(response.data.after);
      setAverage(response.data.average);
    } catch (error) {
      setError('Failed to fetch data from server');
    }
  };

  useEffect(() => {
    fetchNumberAndCalculate();
  }, [numberId]); // Fetch data when numberId changes

  return (
    <div>
      <h2>Number Calculator</h2>
      <select value={numberId} onChange={handleNumberIdChange}>
        <option value="p">Prime</option>
        <option value="f">Fibonacci</option>
        <option value="e">Even</option>
        <option value="r">Random</option>
      </select>
      <button onClick={fetchNumberAndCalculate}>Calculate</button>
      {error && <p className="error">{error}</p>}
      <br />
      {storedNumbersBefore.length > 0 && (
        <div>
          <h4>Stored Numbers (Before):</h4>
          <ul>
            {storedNumbersBefore.map((number) => (
              <li key={number}>{number}</li>
            ))}
          </ul>
        </div>
      )}
      {storedNumbersAfter.length > 0 && (
        <div>
          <h4>Stored Numbers (After):</h4>
          <ul>
            {storedNumbersAfter.map((number) => (
              <li key={number}>{number}</li>
            ))}
          </ul>
        </div>
      )}
      <p>Average: {average}</p>
    </div>
  );
};

export default NumberCalculator;
