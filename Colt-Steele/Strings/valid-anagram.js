// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Edge case -- check lengths -> false if they do not match
// Create an empty obj
// Append the first str into the object
// Iterate through the 2nd obj and find matching char in lookup obj holding str1
    // If char from str2 is not in lookup -> return false
    // if char from str2 is in lookup -> remove 1

// return true if:
//  - Strs are the same length
//  - Char from str2 are in lookup

// Time Complexity: O(n) + Space complexity O(n)

const validAnagram = (str1, str2) => {

    if (str1.length !== str2.length) {
      return false;
    }
  
    let lookup = {};
  
    for (let i = 0; i < str1.length; i++) {
      let char = str1[i];
      lookup[char] ? lookup[char] += 1 : lookup[char] = 1
    }
  
    for (let i = 0; i < str2.length; i++) {
      let char = str2[i];
      if(!(lookup[char])) {
          return false
      } else {
          lookup[char] -= 1
      }
    }
    return true
  
  };
  
  console.log(validAnagram('','')) // true
  console.log(validAnagram('aaz','zza')) // false
  console.log(validAnagram('abaa', 'aaab')); // true
  console.log(validAnagram('anagram','nangaram')) // false