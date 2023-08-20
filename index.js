// // Extra Credit
// function bubbleSort(arr) {}

// function selectionSort(arr) {}

// // function insertionSort(arr) {
// // }

// // console.log(bubbleSort([37, 29, 45, 8])); // 45, 37, 29, 8
// console.log(selectionSort([33, 22, 10, 19, 17])); // 10, 17, 19, 22, 32
// // console.log(insertionSort([37, 29, 45, 8, 25])); // 8, 25, 29, 37, 45

// const binarySearch = (arr, val) => {
//     let left = 0
//     let right = arr.length
//     let midIdx = Math.floor((left+right) /2)

//     while(val !== arr[midIdx] && left <= right) {
//         if(val > arr[midIdx]) {
//             left = midIdx + 1
//         } else {
//             right = midIdx - 1
//         }
//         midIdx = Math.floor((left+right) /2)
//     }
//     return arr[midIdx] === val ? midIdx : -1
//   }

//   console.log(
//     binarySearch([1,2,3,4,5],2), // 1
//   )

// function naiveSearch(long, short) {
//     let count = 0
//     for(let i=0; i<long.length;i++) {
//         for(let j=0; j<short.length; j++) {
//             if(short[j] !== long[[i+j]]) break
//             if(j === short.length-1) count++
//         }
//     }
//     return count
// }

// console.log(naiveSearch('lorie loled', 'lol')); // 1

function longestSubstringWK(s, k) {
    let map = new Map();
    let maxLen = -Infinity;
    let uniqueCharsSeen = new Map(); // could be done with a primitive, but this was easiest
    let left = 0;
    // let right = 0;

    for (let right = 0; right < s.length; right++) {
        let letter = s[right];
        // increment windowEnd
        right++;
        // put letter in map
        // console.log(right)
        map.set(letter, right);
        // console.log(map)

        uniqueCharsSeen.set(letter, right);

        // adjust window when there are more distinct chars than the target
        while (map.size > k) {
            // update left side of window to the last seen index of the first item put in map
            let firstKey = map.keys().next().value;
            left = map.get(firstKey) + 1; 
            // remove first char seen from the map
            map.delete(firstKey);
        }

        // update maxLen
        maxLen = Math.max(maxLen, right - left);
    }

    // when string has less distinct chars than the k that are required
    if (uniqueCharsSeen.size < k) {
        return -Infinity;
    }

    return maxLen;
}
console.log(longestSubstringWK('AAAHHIBC', 2));
