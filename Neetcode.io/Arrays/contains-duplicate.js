// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//-----------------------------
// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

//-----------------------------
// create a hash
// loop the numbers in
// if the value is in return true
// else return false

//-----------------------------
// Time complexity: O(n) + Space complexity: O(1)

const containsDuplicate = function (nums) {
  let hash = {};
  for (let num of nums) {
    if (hash[num]) {
      return true;
    } else {
      hash[num] = 1;
    }
  }
  return false;
};

console.log(containsDuplicate([1,2,3,1])) // true