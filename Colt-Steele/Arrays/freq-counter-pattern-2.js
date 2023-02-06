// Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corrresponding value squared in the second array. The frequency of values must be the same.

// Example
// same([1,2,3], [4,1,9])  // true
// same([1,2,3], [1,9])  // false
// same([1,2,1], [4,4,1])  // false

// Time Complexity: O(n)

const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }
    let counter1 = {}
    let counter2 = {}
    // For OF to iterate through.
    for (let num of arr1) {
        counter1[num] = (counter1[num] || 0) + 1
    }
    for (let num of arr2) {
        counter2[num] = (counter2[num] || 0) + 1
    }
    // For IN to return a list of keys on the obj being iterated {1:1}
    for(let num in counter1) {
        // If counter1 num or-> { (2^2) :1 } is NOT in counter 2 -> { 4:1 }
        if(!(num ** 2 in counter2)) {
            return false
        }
        // If counter2[counter1 num (2) ** 2] is NOT equal to  counter 1 -> 2
        if(counter1[num] !== counter2[num ** 2]){
            return false
        }
    }
    // Else return true
    return true
};

console.log(same([1,2,3,2], [9,1,4,4]));    // true
console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1,2,3], [1,9])); // false
console.log(same([1,2,1], [4,4,1]));  // false