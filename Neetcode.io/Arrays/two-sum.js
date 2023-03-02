const twoSum = function(nums, target) {
  // val:idx
    let map = {} // {'1':0, '2':1, }
    for(let i = 0; i<nums.length; i++) {
      // define num1 and num2
      let num1 = nums[i] // 3
      let num2 = target - num1 // 2

      // check to see if map[num2] is in the hash map
      if(map[num2] !== undefined) {
        // if found, return value(index), current index
        return [map[num2] , i]
      } else {
        // add to hash map 'val':idx
        map[num1] = i
      }
    }
};

console.log(twoSum([1,2,3],5))