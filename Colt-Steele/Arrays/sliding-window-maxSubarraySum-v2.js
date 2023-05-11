// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// Nested loops

const maxSubarraySum = (arr, num) => {
  // set max = 0
  // loop through the snap
  // set the max to sum of the first snap
  // temp = max
  // loop through the whole array at position of the num
  // set temp to temp - the fist number in the previous snap and add the first number after the snap.   [-1, 2, +3, 4]
  // if temp > max set as max

  // Time complexity O(n) + Space complexity O(n)

  let max = 0;
  if (num > arr.length) return null;

  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  let temp = max;
  
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
