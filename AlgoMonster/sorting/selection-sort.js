function selectionSort(unsortedList) {
    for(let i = 0; i<unsortedList.length; i++) {
        let min = i
        for(let j= i; j < unsortedList.length; j++) {
            if(unsortedList[min] > unsortedList[j]) min = j
        }
        [unsortedList[min], unsortedList[i]] = [unsortedList[i], unsortedList[min]]
    }
    return unsortedList
}
selectionSort([10, 1, 20, 50, 6])