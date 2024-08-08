import React, { useState, useEffect } from 'react';
import { mergeSort } from '../MergeSort.js';
import './index.css';

function MergeSortVisualizer() {
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

  const visualizeMergeSort = () => {
    const animations = mergeSort(numbers);
    for (let i = 0; i < animations.length; i += 1) {
      const arrayBars = document.getElementsByClassName('bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'red' : 'turquoise';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 50);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 50);
      }
    }
    // Ensure the final state is correctly colored
    setTimeout(() => {
      const arrayBars = document.getElementsByClassName('bar');
      for (let i = 0; i < arrayBars.length; i++) {
        arrayBars[i].style.backgroundColor = 'turquoise';
      }
    }, animations.length * 50);
  };

  return (
    <div>
      {/* <button onClick={generateRandomNumbers} type="button">Generate New Array</button> */}
      <button onClick={visualizeMergeSort} type="button">Visualize Merge Sort</button>
      {/* <div className="container">
        {numbers.map((num) => (
          <div key={num} className="bar" style={{ height: `${num}px` }}>{num}</div>
        ))}
      </div> */}
    </div>
  );
}

export default MergeSortVisualizer;
