/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Q -- return the largest sum of a sub arr
    // E -- empty, negative numbers?
    // R -- Return Sum -- we dont need subarr
    // N -- two pointers, sliding window?, 

    // max - 0 
    // temp - 0

    // loop through the arr
    //     temp += nums[i]
    //     max = Math.Max(max, temp)
    //     temp < 0 && temp = 0
    // return max

    // TC: O(n) SC: O(1)

    let max = nums[0]
    let temp = 0
    for(let i = 0; i<nums.length; i++) {
        temp += nums[i]
        if(temp > max) max = temp
        if(temp < 0) temp = 0
    }
    return max
};