// Store first value in variable -- used to track prefix
// for loop through the strs, starting at 1
// while strs[i] is not an index of prefix
// remove ending ch of prefix
// return prefix

// TC: O(n^2) | SC: O(1)

var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};
