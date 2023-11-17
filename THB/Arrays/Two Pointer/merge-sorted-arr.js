/**
    Remove m,n - nums arr lengths from ea arr
    Push nums2 into nums1
    Use .sort to sort from smallest to greatest

    TC O(n) SC O(1)
*/

var merge = function (nums1, m, nums2, n) {
  for (let i = nums1.length - 1; nums1.length - m; i--) {
    nums1.pop();
  }
  for (let i = nums2.length - 1; nums2.length - n; i--) {
    nums2.pop();
  }

  for (let i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i]);
  }

  nums1.sort((a, b) => a - b);
};
