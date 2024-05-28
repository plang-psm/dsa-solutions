/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Q -- To return 2 indices that = the target (2+7=9)
    // E -- Empty or 1 nums
    // R -- indices [0,1]
    // N -- Two pointer method
    //      - Are we grabbing multiple or just one pair?

    // two pointers one on 0, and one on 1
    // 2 7 11 15. w/ target 9
    // a b
    // loop where a = 0
        // while b < nums.length
            // c = target - nums[a]
            // if c === nums[b]
                // return indices
            // else 
                // b++
    // T(O): O(n)  S(O): O(1)
    
     for(let left = 0; left<nums.length; left++) {
        let right = left + 1
        while(right < nums.length) {
            let answer = target - nums[right]
            if(nums[left] === answer) return [left, right]
            else right++
        }
     }
    
};