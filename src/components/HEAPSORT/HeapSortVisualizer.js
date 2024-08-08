import React, { useState, useEffect } from 'react';
import { heapSort } from './HeapSort';
// import './index.css';

function HeapSortVisualizer() {
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

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  const visualizeHeapSort = () => {
    const animations = heapSort(numbers);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('bar');
      const [barOneIdx, barTwoIdx, action] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = action === "swap" ? 'red' : 'turquoise';
      if (action === "swap") {
        setTimeout(() => {
          const tempHeight = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = tempHeight;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 50);
      }
    }
  };

  return (
    <div>
      {/* <button onClick={generateRandomNumbers} type="button">Generate New Array</button> */}
      <button onClick={visualizeHeapSort} type="button">Visualize Heap Sort</button>
      {/* <div className="container">
        {numbers.map((num, index) => (
          <div key={index} className="bar" style={{ height: `${num}px` }} />
        ))}
      </div> */}
    </div>
  );
}

export default HeapSortVisualizer;
