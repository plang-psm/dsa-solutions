// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

//-----------------------------
// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

//-----------------------------
// create two pointers
// run a while loop with the pointers being less then the length of their input
// if s[pointer1] === t[pointer2]
    // then increase bother pointers
// increase pointer 2

// if pointer1 is the same length of its input -> return true else false

//-----------------------------
// Time complexity: O(n) + Space complexity: O(n)

const isSubsequence = function (s, t) {
    let p1 = 0
    let p2 = 0

    while(p1 < s.length && p2 < t.length) {
        if(s[p1] === t[p2]) {
            p1++
            p2++
        } else {
            p2++
        }
    }
    return p1 === s.length
};

console.log(isSubsequence("abc", "ahbgdc")) // true