function findFirstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let index = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      index = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return index;
}
