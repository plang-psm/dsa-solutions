// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

//-----------------------------
// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

//-----------------------------
// define alphanumeric to compare
// loop through and create a new string with only alpha

// set a left and a right
// loop thru the new arr -- while left < right
// if left !== right return false
// else increase left and decrease right
// return true

// Time complexity: O(n) + Space complexity: O(1)

//-----------------------------
// Time complexity: O(n) + Space complexity: O(1)

var isPalindrome = function (s) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let newStr = '';

  for (let ch of s.toLowerCase()) {
    if (alpha.indexOf(ch) !== -1) {
      newStr += ch;
    }
  }

  let left = 0;
  let right = newStr.length - 1;
  while (left < right) {
    if (newStr[left] !== newStr[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};
