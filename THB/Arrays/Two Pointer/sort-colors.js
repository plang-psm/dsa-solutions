// for nums.length, left = i
// let right = left + 1
// while(right < nums.length) {
//   if i > j -> swap
// right++

var sortColors = function (nums) {
  for (let left = 0; left < nums.length; left++) {
    let right = left + 1;
    while (right < nums.length) {
      if (nums[left] > nums[right])
        [nums[left], nums[right]] = [nums[right], nums[left]];
      right++;
    }
  }
  return nums;
};
