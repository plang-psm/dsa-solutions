/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // Q: Multiply all numbers in array but itself and store in the its index
    // I: array of numbers
    // O: array of numbers
    // E: empty, single digit?
    // N: need to stay in bounds, precomputation

    // 1 [ 1 2 3 4 ] 1
    // 
    // let res = []
    // let pre = 1
    // let post = 1
    // for loop
    //  let num = nums[i]
    //  arr.push(pre)
    //  pre *= num
    // for loop desc
    //  let num = nums[i]
    //  arr[i] = arr[i]*pre
    //  pre *= num
    // return result

    // TC: O(n) | SC: O(1)

    let res = []
    let pre = 1
    let post = 1

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        res.push(pre)
        pre *= num
    }

    for (let i = res.length - 1; i >= 0; i--) {
        res[i] *= post 
        post *= nums[i] 
    }
    return res
};