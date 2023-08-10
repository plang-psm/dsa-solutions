//
// cant return banned

// lower case
// split into words -- regex provides + to keep strings together
// remove special char -- .replace()

// hash key:value -> word:freq
// iterate the arr
// hash[word] = ( hash[word] || 0 + )1

// let mostFreq = ''
// for key in hash
// if hash[mostFreq] === undefined || if hash[key] > hash[mostFreq] && key !== banned
// mostFreq = key

// return mostFreq

var mostCommonWord = function (paragraph, banned) {
  const newPar = paragraph.toLowerCase().match(/[a-z]+/g);
  let hash = {};
  const bannedArr = [...banned];

  for (let word of newPar) {
    if (!bannedArr.includes(word)) {
      hash[word] = (hash[word] || 0) + 1;
    }
  }

  let mostFreq = '';

  for (let key in hash) {
    if (hash[mostFreq] === undefined || hash[key] > hash[mostFreq]) {
      mostFreq = key;
    }
  }

  return mostFreq;
};
