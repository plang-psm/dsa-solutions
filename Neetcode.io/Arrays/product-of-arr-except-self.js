// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

//-----------------------------
// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

//-----------------------------
    // [1, 2, 3, 4]
    // [24, 12, 8, 6]
    // prefix * postfix
    // set an empty arr, and two variables prefix + postfix
    // loop through and set the prefix into the arr [1, 1, 2, 6]
    // loop backwards and multiply prefix by the postfix nums [24, 12, 8, 6]
    // return result

//-----------------------------
// Time complexity: O(n) + Space complexity: O(n)

const productExceptSelf = function (nums) {
    const result = []
    let prefix = 1
    let postfix = 1

    for(let i=0; i< nums.length; i++){
        result[i] = prefix
        prefix *= nums[i]
    }

    for(let i=nums.length - 2; i>=0; i--) {
        postfix *= nums[i + 1]
        result[i] *= postfix
    }
    return result
};

console.log(
    productExceptSelf([1,2,3,4]), // [24,12,8,6]
    productExceptSelf([-1,1,0,-3,3]) // [0,0,9,0,0]
)