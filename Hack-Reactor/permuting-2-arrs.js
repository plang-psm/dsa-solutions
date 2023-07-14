// Sort the arrays
// ASC
// DSC - reverse arr
// We do this to match the greatest with the lowest
// [1, 2, 3]
// [8, 7, 6]
// Loop through the arr and check if the sum is < k
// return no
// If we exit loop return yes
function twoArrays(k, A, B) {
  const ascA = A.sort((a, b) => a - b);
  const dscB = B.sort((a, b) => b - a);
  for (let i = 0; i < ascA.length; i++) {
    if (ascA[i] + dscB[i] < k) {
      return 'NO';
    }
  }
  return 'YES';
}
