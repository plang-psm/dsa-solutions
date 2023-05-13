// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example:
// arr = [1,1,0,-1,-1]
// There are n=5 elements, two positive, two negative and one zero. Their ratios are 2/5 .40000 , 2/5 .40000 and 1/5 .20000. Results are printed as:

// 0.400000
// 0.400000
// 0.200000

// Pseudocode:
// determine +, - , 0
// result in 6 decimal places
// create 3 var to hold count
// loop through arr and check if > < or = 0
// console.log the count/arr.length .toFixed(decimal)

// Time Complexity: O(n) + Space complexity O(1)

function plusMinus(arr) {

    let positive = 0
    let negative = 0
    let zero = 0

    for (let ch of arr) {
        if (ch > 0) positive++
        if (ch < 0) negative++
        if (ch === 0) zero++
    }
    console.log((positive / arr.length).toFixed(6))
    console.log((negative / arr.length).toFixed(6))
    console.log((zero / arr.length).toFixed(6))
}