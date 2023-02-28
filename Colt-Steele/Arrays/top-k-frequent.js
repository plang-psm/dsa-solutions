// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

const topKFrequent = function(nums, k) {
    // Create an empty map
    // Loop through obj adding to map { 'val':freq }
        // if the freq >= k -> then push the index ('val') to an empty array
    // return arr

    let map = {}
    let result = []

    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]
        map[num] = (map[num] || 0) + 1 
    }

    // Converts the obj to an arr
    let arr = Object.entries(map)

    // Sorts the arr
    arr.sort((a,b) => {
        return b[1]-a[1]
    })

    // slices the arr up to k
    arr.slice(0,k).forEach(element => result.push(+element[0]))
    
    return result
};