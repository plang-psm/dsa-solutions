// Write your code here
// create a var 'alpha' holding the alphabet
// split the ch into a new array 'newAlpha'
// loop through s
// lowercase the ch 'lowercasedCh'
// if the the newAlpha includes lowercasedCh
// find the index of the lowercasedCh
// 2 variables holding the slice before and after the index
// concat them together and continue until fully down iterating
// return 'pangram' if arr is empty else 'not pangram'

function pangrams(s) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let newAlpha = alpha.split('');

  for (let ch of s) {
    let lowercasedCh = ch.toLowerCase();
    if (newAlpha.includes(lowercasedCh)) {
      // console.log('start ---------------------')
      // console.log(newAlpha)
      let index = newAlpha.indexOf(lowercasedCh);
      // console.log(lowercasedCh, index)
      let firstHalf = newAlpha.slice(0, index);
      // console.log('first',firstHalf)
      let secondHalf = newAlpha.slice(index + 1, newAlpha.length);
      // console.log('sec', secondHalf)
      newAlpha = firstHalf.concat(secondHalf);
      // console.log(newAlpha)
    }
  }
  return newAlpha.length > 0 ? 'not pangram' : 'pangram';
}
