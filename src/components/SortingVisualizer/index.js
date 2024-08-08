// SortingVisualizer.js
import React, { useState, useEffect } from 'react';
import { getMergeSortAnimations, getQuickSortAnimations, getHeapSortAnimations, getBubbleSortAnimations } from '../sortingalgo/index.js';
import './index.css';

const ANIMATION_SPEED_MS = 1;
const NUMBER_OF_ARRAY_BARS = 20;
const PRIMARY_COLOR = 'pink';
const SECONDARY_COLOR = 'red';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArray = Array.from({ length: NUMBER_OF_ARRAY_BARS }, () =>
      randomIntFromInterval(10, 400)
    );
    setArray(newArray);
  };

  const animateSorting = (animations) => {
    animations.forEach((animation, i) => {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animation;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = color;
          arrayBars[barTwoIdx].style.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animation;
          arrayBars[barOneIdx].style.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    });
  };

  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);
    animateSorting(animations);
  };

  const quickSort = () => {
    const animations = getQuickSortAnimations(array);
    animateSorting(animations);
  };

  const heapSort = () => {
    const animations = getHeapSortAnimations(array);
    animateSorting(animations);
  };

  const bubbleSort = () => {
    const animations = getBubbleSortAnimations(array);
    animateSorting(animations);
  };

  return (
    <div className="array-container">
      {array.map((value, idx) => (
        <div
          className="array-bar"
          key={idx}
          style={{
            backgroundColor: PRIMARY_COLOR,
            height: `${value}px`,
          }}
        ></div>
      ))}
      <div class="button-container">
  <button onClick={resetArray}>Generate New Array</button>
  <button onClick={mergeSort}>Merge Sort</button>
  <button onClick={quickSort}>Quick Sort</button>
  <button onClick={heapSort}>Heap Sort</button>
  <button onClick={bubbleSort}>Bubble Sort</button>
</div>
    </div>
  );
};

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default SortingVisualizer;
