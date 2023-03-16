// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

//-----------------------------
// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

//-----------------------------
// loop through the arr
// split the words in ea iteration of the arr
// if the ch is in hash
    // push the word
// else add the and word

// turn the obj keys (key:value)into an array
// grab the values by mapping through the arr and return the hash values

//-----------------------------
// Time complexity: O(n^2) + Space complexity: O(n) 

const  groupAnagrams = function(strs) {
    let hash = {}

    for (let word of strs) {
        let chars = word.split('').sort()
        hash[chars] ? hash[chars].push(word) : hash[chars] = [word]
    }

    const strArr = Object.keys(hash)
    const values = strArr.map(val => { 
        return hash[val] 
        });
    return values
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) // [["bat"],["nat","tan"],["ate","eat","tea"]]