 /**
    Reqs
     - Positive nums
     - Find the subArr of unique ch
        - Can't include dupe
        = need to track sum of elements in subArr
        - Use map to add/remove values
     - Sliding window/two pointer technique
     */

     // Edge case - empty arr
     // define map, score, temp, left, right
     // for loop
        // define num
        // increment right
        // while loop - map has num in the Map
            // set first key value
            // move left up
            // remove firstKey value from temp
            // remove firstKey value from map
        // set num in map
        // add num to temp
        // grab max between temp and score
    // return score


var maximumUniqueSubarray = function (nums) {
    if(nums.length === 0) return 0

    let map = new Map()
    let score = -Infinity
    let temp = 0
    let left = 0
    let right = 0

    for(let i=0; i < nums.length; i++) {
        let num = nums[i]
        right++
        while(map.has(num)) {
            let firstKey = map.keys().next().value
            left = map.get(firstKey) + 1
            temp -= firstKey
            map.delete(firstKey)
        }
        map.set(num, right)
        temp += num
        score = Math.max(score, temp)
    }
    return score
};