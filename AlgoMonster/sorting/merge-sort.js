function mergeSort(array) {
    const len = array.length
    if(len <= 1) return array

    const mid = Math.floor(len / 2)
    const left = sortArray(array.slice(0, mid))
    const right = sortArray(array.slice(mid))


    const res = []
    let leftPtr = 0
    let rightPtr = 0
    

    while(leftPtr < mid || rightPtr < len - mid) {
        if(leftPtr === mid) {
            res.push(right[rightPtr])
            rightPtr++
        } else if(rightPtr === len - mid) {
            res.push(left[leftPtr])
            leftPtr++
        } else if(left[leftPtr] <= right[rightPtr]) {
            res.push(left[leftPtr])
            leftPtr++
        } else {
            res.push(right[rightPtr])
            rightPtr++
        }
    }
    return res
}
mergeSort([5,1,1,2,0,0])