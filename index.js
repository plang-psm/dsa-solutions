// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/


const binarySearch = (arr, val) => {
  let left = 0
  let right = arr.length - 1
  let middle = Math.floor((left + right) / 2)
  while (arr[middle] !== val && left <= right) {
      // console.log('middle', arr[middle], 'val', val)
      if(val < arr[middle]) {
          right = middle - 1
          // console.log('left', left)
      } else {
          left = middle + 1
          // console.log('right', right)
      }
      middle = Math.floor((left + right) / 2)
  }
  return arr[middle] === val ? middle : -1
}

console.log(
  binarySearch([1,2,3,4,5],2), // 1
  binarySearch([1,2,3,4,5],3), // 2
  binarySearch([1,2,3,4,5],5), // 4
  binarySearch([1,2,3,4,5],6) // -1
)