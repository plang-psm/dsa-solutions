const binarySearch = (arr, val) => {
    let left = 0
    let right = arr.length - 1
    while (arr[middle] !== val && left <= right) {
        let middle = Math.floor((left + right) / 2)
        if(val < arr[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return arr[middle] === val ? middle : -1
  }