// Implement a function called countUniqueValues which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// if !(arr.length < 0)
    // Two pointers -> Start -> Search
    // start = 0 - starting index
    // counter = 1 - starting counter
    // iterate through the array
        // let search = i - moving index
            // if arr[start] !== arr[search] -> 
                // counter++
                // arr[start] = arr[search]
            // else search should iterate
    // return counter
// else -> return 0

const countUniqueValues = (arr) => {
    if (arr.length > 0) {
      let start = 0;
      let counter = 1;
      for (let i = 0; i < arr.length; i++) {
        let search = i;
        if (arr[start] !== arr[search]) {
          arr[start] = arr[search];
          counter++;
        }
      }
      return counter;
    } else {
      return 0;
    }
  };
  
  console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
  console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
  console.log(countUniqueValues([])); // 0
  console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4