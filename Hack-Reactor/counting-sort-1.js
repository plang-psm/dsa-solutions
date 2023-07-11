// Write your code here
// index       0. 1. 2. 3
// new array filled with 100 0s
// loop through the arr and add + 1 to result[i]: result[arr[i]] += 1
// return result
function countingSort(arr) {
  let freqArr = new Array(100).fill(0);

  for (let i of arr) {
    freqArr[i] += 1;
  }

  return freqArr;
}
