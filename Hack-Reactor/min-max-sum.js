// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example:
// arr = [1, 3, 5, 7, 9]
// The minimum sum is 1+3+5+7=16 and the maximum sum is 3+5+7+9=23. The function prints 16 24

// Pseudocode:
// 5 positive ints
// min and max of the next 4 numbers out of 5
// 1 3 5 7 9
// [1 3 5 7] then. [3 5 7 9]
// 16 24
// sort the arr
// set min and max var
// to maintain a TC of O(n) -> two separate for loops
    // start at index 0 to length - 1
    // start at index +1 to length

// Time Complexity: O(n) + Space complexity O(n)

function miniMaxSum(arr) {
    const newArr = arr.sort((a,b) => a-b)
    
    let min = 0
    let max = 0
    
    for(let i=0; i<newArr.length-1; i++) {
        min += newArr[i]
    } 
    for(let i=1; i<newArr.length; i++) {
        max += newArr[i]
    }

    console.log(min, max)
}
