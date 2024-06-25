function insertionSort(nums) {
    for(let i = 0; i < nums.length; i++) {
        let curr = i
        while(curr < 0 && nums[curr] < nums[curr-1]) {
            [nums[curr], nums[curr-1]] = [nums[curr-1], nums[curr]]
            curr--
        }
    }
    return nums
}
insertionSort([10, 1, 20, 50, 6])