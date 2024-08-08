export const heapSort = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    buildMaxHeap(array, animations);
    for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
      animations.push([0, endIdx, "swap"]);
      [array[0], array[endIdx]] = [array[endIdx], array[0]];
      siftDown(array, 0, endIdx - 1, animations);
    }
    return animations;
  };
  
  const buildMaxHeap = (array, animations) => {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      siftDown(array, currentIdx, array.length - 1, animations);
    }
  };
  
  const siftDown = (array, startIdx, endIdx, animations) => {
    let currentIdx = startIdx;
    while (currentIdx <= endIdx) {
      const leftChildIdx = 2 * currentIdx + 1;
      const rightChildIdx = 2 * currentIdx + 2;
      let idxToSwap = null;
      if (leftChildIdx <= endIdx) {
        idxToSwap = leftChildIdx;
        if (rightChildIdx <= endIdx && array[rightChildIdx] > array[leftChildIdx]) {
          idxToSwap = rightChildIdx;
        }
        if (array[idxToSwap] > array[currentIdx]) {
          animations.push([currentIdx, idxToSwap, "swap"]);
          [array[currentIdx], array[idxToSwap]] = [array[idxToSwap], array[currentIdx]];
          currentIdx = idxToSwap;
        } else {
          return;
        }
      } else {
        return;
      }
    }
  };
  