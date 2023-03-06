// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

//-----------------------------
// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

//-----------------------------
// Set the first char occurence to false
// Start from the end of the string
// If it is not empty(there is a letter), 
  // Set the first char occurence to false 
  // Add 1
// If the first char occurence is false and the ch is empty
    // Break
// Return the ch count once we exit the for loop

//-----------------------------
// Time complexity: O(n) + Space complexity: O(1)

const lengthOfLastWord = function (s) {
  let firstChOccurance = false;
  let lastStrLen = 0;
  
  for (let i = s.length - 1; i > -1; i--) {
    if (s[i] !== ' ') {
      firstChOccurance = true;
      lastStrLen++;
    }
    if (firstChOccurance && s[i] === ' ') {
      break;
    }
  }
  return lastStrLen;
};

console.log(
  lengthOfLastWord("Hello World"), // 5
  lengthOfLastWord("   fly me   to   the moon  ") // 4
)