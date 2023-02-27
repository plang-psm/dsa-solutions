// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

const lengthOfLastWord = function (s) {
    // Set the first char occurence to false
    // Start from the end of the string
    // If it is not empty(there is a letter), 
      // Set the first char occurence to false 
      // Add 1
    // If the first char occurence is false and the ch is empty
      // Break
  
    // Return the ch count once we exit the for loop
  
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
  