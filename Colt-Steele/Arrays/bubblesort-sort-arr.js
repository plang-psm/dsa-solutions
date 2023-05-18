// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

// **** Practice bubble sort -- does not meet conditions

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.

// Time Complexity: O(n^2) | Space Complexity: O(n)

function sortArray(nums) {
    for(let i = nums.length; i > 0; i--) {
        let temp
        for(let j = 0; j < i-1; i++) {
            if(nums[j] > nums[j+1]) {
                temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
    } console.log(nums)
}
console.log(sortArray(37, 29, 45, 8));