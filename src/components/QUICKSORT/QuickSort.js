export const quickSort = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
  };
  
  const quickSortHelper = (mainArray, startIdx, endIdx, animations) => {
    if (startIdx < endIdx) {
      const pivotIdx = partition(mainArray, startIdx, endIdx, animations);
      quickSortHelper(mainArray, startIdx, pivotIdx - 1, animations);
      quickSortHelper(mainArray, pivotIdx + 1, endIdx, animations);
    }
  };
  
  const partition = (mainArray, startIdx, endIdx, animations) => {
    const pivotValue = mainArray[endIdx];
    let pivotIdx = startIdx;
    for (let i = startIdx; i < endIdx; i++) {
      animations.push([i, endIdx, "compare"]);
      animations.push([i, endIdx, "revert"]);
      if (mainArray[i] <= pivotValue) {
        animations.push([i, pivotIdx, "swap"]);
        [mainArray[i], mainArray[pivotIdx]] = [mainArray[pivotIdx], mainArray[i]];
        pivotIdx++;
      }
    }
    animations.push([pivotIdx, endIdx, "swap"]);
    [mainArray[pivotIdx], mainArray[endIdx]] = [mainArray[endIdx], mainArray[pivotIdx]];
    return pivotIdx;
  };
  