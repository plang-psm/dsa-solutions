// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// Pseudocode:
// while loop
// first
// second
// until we finish the loop
// return in arr

function matchingStrings(strings, queries) {
  let first = 0;
  let second = 0;
  let count = 0;
  let arr = [];

  while (first < queries.length) {
    if (second >= strings.length) {
      first++;
      second = 0;
      arr.push(count);
      count = 0;
    }
    if (queries[first] === strings[second]) {
      count += 1;
      second++;
    } else {
      second++;
    }
  }
  return arr;
}
