// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

//-----------------------------
// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

//-----------------------------
// median = (mid1 + mid2)/2
//-----------------------------
// Merge both arrays -- concat
// Need to sort -- sort()
// arr.length % 2 !== 0
    // find the median new nums.length / 2
    // set mid2 to arr length / 2
    // set mid1 = mid2 - 1
    // mid1 + mid 2 / 2
// else return new nums.length / 2

const findMedianSortedArrays = function (nums1, nums2) {
  const numsArr = nums1.concat(nums2).sort((a, b) => a - b);

  if (numsArr.length % 2 === 0) {
    const mid2 = numsArr.length / 2;
    const mid1 = mid2 - 1;
    return (numsArr[mid2] + numsArr[mid1]) / 2;
  } else {
    return numsArr[Math.floor(numsArr.length / 2)];
  }
};
