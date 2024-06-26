var applyOperations = function(nums) {
    for(let i = 0; i < nums.length -1; i++) {
        if(nums[i] === nums[i+1]) {
            nums[i] *= 2
            nums[i+1] = 0
        }
    }

    const result = new Array(nums.length).fill(0)
    let index = 0

    for(const num of nums) {
        if(num !== 0) {
            result[index++] = num
        }
    }
    return result
};