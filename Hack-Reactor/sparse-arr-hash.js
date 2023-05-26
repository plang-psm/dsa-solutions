// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// Pseudocode:
// while loop
// first
// second
// until we finish the loop
// return in arr

function matchingStrings(strings, queries) {
    let map = {}

    for (let ch of strings) {
        map[ch] = (map[ch] || 0) + 1
    }

    return queries.map(query => map[query] || 0)
  }
  