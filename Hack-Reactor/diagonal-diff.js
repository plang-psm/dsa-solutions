// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9
// | 1+5+9 - 3+5+9 |

function diagonalDifference(arr) {
  const n = arr.length;
  let dd1 = 0;
  let dd2 = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        dd1 += arr[i][j];
      }
      if (i + j === n - 1) {
        dd2 += arr[i][j];
      }
    }
  }
  return Math.abs(dd1 - dd2);
}
