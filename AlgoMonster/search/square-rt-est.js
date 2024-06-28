function squareRoot(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] * arr[mid] === n) {
      return arr[mid];
    } else if (arr[mid] > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return 0;
}
