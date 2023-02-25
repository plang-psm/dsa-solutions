const containsDuplicate = function (nums) {
    // sort the numbers
    // loop through the numbers
        // compare i and its neighbor(i+1)
        // if i+1 === the i then return true else return false

    const newNum = nums.sort()
    for (let i = 0; i < newNum.length -1; i++) {
        const next = i+1
        const isDupe = newNum[i] === newNum[next]
        if(isDupe) return true
    }
    return false
};

console.log(
    containsDuplicate([1,2,3,1]), // true
    containsDuplicate([1,2,3,1]), // false
    containsDuplicate([1,1,1,3,3,4,3,2,4,2]) //true
)