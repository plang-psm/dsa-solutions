// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

//-----------------------------
// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

//-----------------------------
// create hash
// loop the t into the hash
//t is in hash
// hash[t] += 1
// else
// hash[t] =1

// loop through s
// if s is in hash
// delete hash -1
// return if hash is empty

//-----------------------------
// Time complexity: + Space complexity:

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let hash = {};

  for (let ch of t) {
    hash[ch] = (hash[ch] || 0) + 1;
  }
  for (let ch of s) {
    if (hash[ch]) {
      hash[ch] -= 1;
    } else {
      return false;
    }
  }
  return true;
};
