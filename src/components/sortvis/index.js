import React, { useState, useEffect } from 'react';
import './index.css';

function RandomNumberList() {
  const [numbers, setNumbers] = useState([]);

  const generateRandomNumbers = () => {
    const min = 10;
    const max = 400;
    const numCount = 15;
    const randomNumbers = Array.from(
      { length: numCount },
      () => Math.floor(Math.random() * (max - min + 1)) + min,
    );
    setNumbers(randomNumbers);
  };

  // Use useEffect to generate numbers when the component mounts
  useEffect(() => {
    generateRandomNumbers();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <button onClick={generateRandomNumbers} type="button">Generate new Array</button>
      <div className="container">
        {numbers.map((num) => (
          <div key={num} className="bar" style={{ height: `${num}px` , width: '30px'}}></div>
        ))}
      </div>
    </div>
  );
}

export default RandomNumberList;
