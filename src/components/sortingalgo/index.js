// sortingAlgorithms.js
export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  
 



  export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice(); // Create a copy of the array
    quickSortHelper(auxiliaryArray, 0, auxiliaryArray.length - 1, animations);
    return animations;
}

function quickSortHelper(auxiliaryArray, startIdx, endIdx, animations) {
    if (startIdx < endIdx) {
        const pivotIdx = partition(auxiliaryArray, startIdx, endIdx, animations);
        quickSortHelper(auxiliaryArray, startIdx, pivotIdx - 1, animations);
        quickSortHelper(auxiliaryArray, pivotIdx + 1, endIdx, animations);
    }
}

function partition(auxiliaryArray, startIdx, endIdx, animations) {
    const pivotValue = auxiliaryArray[endIdx];
    let pivotIdx = startIdx;
    for (let i = startIdx; i < endIdx; i++) {
        animations.push([i, endIdx]);
        animations.push([i, endIdx]);
        if (auxiliaryArray[i] <= pivotValue) {
            animations.push([i, auxiliaryArray[pivotIdx]]);
            animations.push([pivotIdx, auxiliaryArray[i]]);
            [auxiliaryArray[i], auxiliaryArray[pivotIdx]] = [auxiliaryArray[pivotIdx], auxiliaryArray[i]];
            pivotIdx++;
        } else {
            animations.push([i, auxiliaryArray[i]]);
            animations.push([pivotIdx, auxiliaryArray[pivotIdx]]);
        }
    }
    animations.push([pivotIdx, endIdx]);
    animations.push([pivotIdx, endIdx]);
    animations.push([pivotIdx, auxiliaryArray[endIdx]]);
    animations.push([endIdx, auxiliaryArray[pivotIdx]]);
    [auxiliaryArray[pivotIdx], auxiliaryArray[endIdx]] = [auxiliaryArray[endIdx], auxiliaryArray[pivotIdx]];
    return pivotIdx;
}

  
  export function getHeapSortAnimations(array) {
    // Add actual heapsort implementation
    const animations = [];
    // HeapSort logic here
    return animations;
  }
  
  export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return animations;
    bubbleSortHelper(array, animations);
    return animations;
}

function bubbleSortHelper(array, animations) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Record the comparison
            animations.push({ type: 'compare', indices: [j, j + 1] });
            
            if (array[j] > array[j + 1]) {
                // Record the swap
                animations.push({ type: 'swap', indices: [j, j + 1], values: [array[j + 1], array[j]] });
                
                // Perform the swap
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
}
