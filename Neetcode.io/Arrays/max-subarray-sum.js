// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
// Nested loops

//-----------------------------


//-----------------------------
  // set max = to lowest possible #
  // loop through the whole array - length of snap
  // loop through the snap and grab the sum [i + j]
  // temp = new snap
  // if temp > max set max
  
//-----------------------------
  // Time complexity O(n^2) + Space complexity O(n)

const maxSubarraySum = (arr, num) => {
  if (num > arr.length) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
      if (max < temp) {
        max = temp;
      }
    }
  }
  return max;
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
