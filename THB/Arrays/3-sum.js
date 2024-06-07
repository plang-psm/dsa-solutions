var threeSum = function(nums) {
    // sort the function
    // -4 -1 -1 0 1 2
    //          i j k
    
    // loop through the arr
            // if i > 0 && nums[i] === nums[i-1] continue
    //     j = i+1
    //     k = end

    //     while j < K
    //         sum = sum of all
    //         sum > 0 k --
    //         sum < 0 j++
    //         else
    //             push sum to res
    //             j++
    //             k--
    //             while nums[j] = nums[j-1] j++
    // T(O): O(n2) S(O): O(1)

    if(nums.length < 3) return []

    let res = []
    nums.sort((a,b) => a-b) // n(logn)

    for(let i = 0; i< nums.length; i++) {
        if(i > 0 && nums[i] === nums[i-1]) continue

        let j = i+1
        let k = nums.length-1

        while(j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if(sum > 0) k--
            else if (sum < 0) j++
            else {
                res.push([nums[i],nums[j],nums[k]])
                j++
                k--
                while(nums[j] === nums[j-1] && j < k) j++
            }
        }
    }
    return res
}