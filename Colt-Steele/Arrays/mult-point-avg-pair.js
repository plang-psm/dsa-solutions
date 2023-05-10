// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
// Example

// Time Complexity: O(n) + Space complexity O(n)

function averagePair(arr, avg) {
  // sorted arr of ints
  // pairs of values where avg pair = target avg
  // multiple pairs
  // use multiple pointers since ordered arr
  // 2 pts one at the left and right
  // loop as long as left < right
  // grab the curr avg
  // if avg === target return true
  // avg is bigger then decrease right(its ordered so right holds the largest #)
  // avg is smaller then increase left
  // return false if we exit loop

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let currAvg = (arr[start] + arr[end]) / 2;
    if (currAvg === avg) return true;
    if (currAvg < avg) start++;
    if (currAvg > avg) end--;
  }

  return false;
}

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
