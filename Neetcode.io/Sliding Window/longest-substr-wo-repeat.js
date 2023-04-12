// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

//-----------------------------
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


//-----------------------------
// cover edge cases
// create a set - stores values
// declare var 
//   left -- index
//   max -- keeps track of longest substr
// loop through s
// while the ch is in the set
    // remove the letter of start until dupe is removed
    // increase left
// add the ch to the set
// compare max

// return max

//-----------------------------
// Time complexity: O(n^2) + Space complexity: O(1)


var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0
    if(s.length === 1) return 1
    
    let set = new Set()
    let left = 0
    let max = 0

    for(let i=0; i<s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[left])
            left++
        }
        set.add(s[i])
        max = Math.max(max, set.size)
    }
    return max
}