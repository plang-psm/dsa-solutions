function firstNotSmaller(arr, target) {
    let left = 0
    let right = arr.length-1
    let index
    
    while(left <= right){
        const mid = Math.floor((left + right)/2)
        if(arr[mid] >= target) {
            index = mid
            right = mid - 1
        } else {
            left = mid + 1

        }
    }
    
    return index;
}