import React from 'react';
import './App.css';
import RandomNumberList from './components/sortvis';
import MergeSortVisualizer from './components/MergeSortVis.js';
import QuickSortVisualizer from './components/QUICKSORT/QuickSortVisualizer.js';
import HeapSortVisualizer from './components/HEAPSORT/HeapSortVisualizer.js';
import SortingVisualizer from './components/SortingVisualizer';

function App() {
  return (
    <div className="App">
      {/* <RandomNumberList />
      <MergeSortVisualizer />
      <QuickSortVisualizer /> */}
      {/* <HeapSortVisualizer /> */}
      <SortingVisualizer />
    </div>
  );
}

export default App;
