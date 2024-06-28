function peakOfMountainArray(arr) {
  let left = 1;
  let right = arr.length - 2;
  let peak = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[mid + 1]) {
      peak = mid;
      right = mid - 1;
    } else {
      left = left + 1;
    }
  }
  return peak;
}
