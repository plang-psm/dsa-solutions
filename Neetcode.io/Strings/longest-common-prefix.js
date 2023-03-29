// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

//-----------------------------
// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

//-----------------------------
// Return empty - edge case

// douple loop
// loop 1 loops through the letters
// loop 2 loops through the remaining words
// check if [0][i] !== [i][j] so we can break 
    // return strs[0] and slice 0 and the index it broke off at

// return strs[0]

//-----------------------------
// Time complexity: O(n^2) + Space complexity: O(1)

const longestCommonPrefix = function (strs) {
    if (!strs.length) return '';

    for(let i = 0; i <= strs[0].length; i++) {
        for(let j = 1; j < strs.length; j++) {
            if(strs[0][i] !== strs[j][i]) {
                return strs[0].slice(0, i)
            }
        }
    }
    return strs[0]
};

console.log(longestCommonPrefix(["flower","flow","flight"])) // 'fl'