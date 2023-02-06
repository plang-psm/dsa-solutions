// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values to zero or undefined if a pair does not exist.

// Two index positions of an array -> left(first) and right(end)
// While left is less than right
// Create a variable that takes the sum of arr[left] + arr[right]
// if sum === 0 -> return indexs arr[left], arr[right]
// else if sum > 0 -> move down an index from end
// else move up an index from start

// Time complexity O(n) + Space complexity O(1)

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // und
console.log(sumZero([1, 2, 3])); // und
