function findMinRotated(arr) {
  let left = 0;
  let right = arr.length - 1;
  let index = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] <= arr[arr.length - 1]) {
      index = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return index;
}
