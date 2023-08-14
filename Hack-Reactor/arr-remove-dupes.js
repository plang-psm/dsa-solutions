// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

//  create a var to hold the index
// loop through the arr
    // find the new number
    // swap the index -> 1, 1, 2
                    //   1, nums[index], nums[i+1]
    // increment index
// return index

// TC: O(n)  | SC: O(n)

var removeDuplicates = function(nums) {
    let index = 1
    for(let i=0; i<nums.length-1; i++) {
        if(nums[i] !== nums[i+1]) {
            nums[index] = nums[i+1]
            index++
        }
    }
    return index
}

console.log(removeDuplicates([[1,1,2]])) // 1, 2