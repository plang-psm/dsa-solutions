// Given an array of integers, where all elements but one occur twice, find the unique element.

// a = [1,2,3,4,3,2,1]
// u = 4

// create two arrs one original and the other a set for 1 number
// loop through each arr and grab the sum
// return setSum*2 - arrSum to get the unique number.

function lonelyinteger(a) {
  const arr = [...a];
  const setArr = Array.from(new Set(arr));

  let arrSum = 0;
  let setSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  for (let i = 0; i < setArr.length; i++) {
    setSum += setArr[i];
  }
  return setSum * 2 - arrSum;
}
