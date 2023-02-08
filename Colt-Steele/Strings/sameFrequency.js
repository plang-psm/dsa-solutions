// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// same length?
    // two objs
    // iterate through the number? -> add them to the objs along with their value
    // 1:1 -> obj[ch] = (obj[ch] || 0) + 1

    // for num of in first
        // if (!(num in second)) check if key is in second
            // false
        // first[num] !== second[num] check freq
            // false
    // return true
// false

// Time complexity O(n)

const sameFrequency = (inputOne, inputTwo) => {
    const numOne = inputOne.toString();
    const numTwo = inputTwo.toString();
  
    if (numOne.length === numTwo.length) {
      let first = {};
      let second = {};
  
      for (let num of numOne) {
        first[num] = (first[num] || 0) + 1;
      }
      for (let num of numTwo) {
        second[num] = (second[num] || 0) + 1;
      }
      for (let num in first) {
        if (!(num in second)) {
          return false;
        }
        if (first[num] !== second[num]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  };
  
  console
    .log
    sameFrequency(182,281), // true
    sameFrequency(34,14), // false
    sameFrequency(3589578, 5879385), // true
    sameFrequency(22,222) // false
    ();