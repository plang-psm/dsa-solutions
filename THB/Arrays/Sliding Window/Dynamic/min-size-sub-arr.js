// Break down:

//  left, sum = 0, min = Infinity
//  loop through the array for nums.length
//  num = arr[right]

//  while(sum >= target)
//      set the min to new min or stay the same
//      remove the left most index
//      increment left up to the next index
//  continue adding  until sum >= target

//  return min === Infinity ? 0 : min

// Difficulty: Medium
// TC: O(n) | SC: O(1)

var minSubArrayLen = function (target, nums) {
  if (nums.length === 0) return 0;
  if (target === 0) return 0;

  let left = 0;
  let sum = 0;
  let min = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return min === Infinity ? 0 : min;
};
