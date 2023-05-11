// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// edge case if str len 0
// return 0

// start
// end
// max
// arr

// while end < str len
// let ch = str[end] // str[0]
// if(!arr.includs(ch))
// arr.push(ch)
// max = Math.max(arr.length, max)
// else
// i = str.indexOf(ch, start)
// end = start + 1
// start = end

// Time Complexity - O(n)
function findLongestSubstring(str) {
  if (str.lenght < 0) return 0;

  let start = 0;
  let end = 0;
  let max = 0;
  let arr = [];

  while (end < str.length) {
    let ch = str[end];
    if (!arr.includes(ch)) {
      arr.push(ch);
      end++;
      max = Math.max(arr.length, max);
    } else {
      let i = str.indexOf(ch, start);
      start = i + 1;
      end = start;
      arr = [];
    }
  }
  return max;
}

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
