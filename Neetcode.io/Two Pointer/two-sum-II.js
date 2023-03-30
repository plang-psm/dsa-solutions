// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

//-----------------------------
// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

//-----------------------------
// define an two variable to track indexs
// head at start
// tail at end
// while head < tail
    // check if the sum === target
        // return indices + 1
    // if it is less than target, increase head to increase sum
    // if it is greater than target, decrease tail to decrease sum  

//-----------------------------
// Time complexity: O(n) + Space complexity: O(1)

const twoSum = function(numbers, target) {
    let head = 0
    let tail = numbers.length-1
    while(head < tail) {
        const sum = numbers[head] + numbers[tail]
        if(sum === target) return [head +1, tail+1]
        else if(sum < target) head++
        else if(sum > target) tail--
    }
};

console.log(twoSum([2,7,11,15], 9)) // [1,2]