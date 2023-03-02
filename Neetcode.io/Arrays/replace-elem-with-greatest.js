// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
// After doing so, return the array.

//-----------------------------
// Time O(N) | Space O(1)
const replaceElements = function (arr, max = -1) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];
    console.log(num);

    arr[i] = max;
    max = Math.max(max, num);
  }
  return arr;
};
