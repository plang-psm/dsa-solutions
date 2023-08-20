// right = 0 -> 4 | right = 1 -> 4,2 ... 4,2,1
// once right reaches the subbary limit - k = 3
// compare max for current max and sum of 4,2,1
// remove first value from sum -- X,2,1
// increment left up 1 to eval the new subaaray 2,1,7
// return max

function maxSumSub(arr, k) {

    let left = 0
    let max = -Infinity
    let sum = 0

    for(let right = 0; right < arr.length; right++) {
        sum += arr[right]                   // right = 0 -> 4 | right = 1 -> 4,2 ... 4,2,1
        if(right === left + (k - 1)) {      // once right reaches the subbary limit - k = 3
            max = Math.max(max, sum)        // compare max for current max and sum of 4,2,1
            sum -= arr[left]                // remove first value from sum -- X,2,1
            left++                          // increment left up 1 to eval the new subaaray 2,1,7
        }
    }
    return max                              // return max
}

console.log(maxSumSub([4,2,1,7,8,1,2,8,1,0], 3))