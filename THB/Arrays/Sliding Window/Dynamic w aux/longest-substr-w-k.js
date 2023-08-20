function longestSubstringWK(s, k) {
    let map = new Map();
    let maxLen = -Infinity;
    let uniqueCharsSeen = new Map(); // could be done with a primitive, but this was easiest
    let left = 0;
    // let right = 0;

    for (let right = 0; right < s.length; right++) {
        let letter = s[right];
        // increment windowEnd
        right++;
        // put letter in map
        map.set(letter, right);

        uniqueCharsSeen.set(letter, right);

        // adjust window when there are more distinct chars than the target
        while (map.size > k) {
            // update left side of window to the last seen index of the first item put in map
            let firstKey = map.keys().next().value;
            left = map.get(firstKey) + 1; 
            // remove first char seen from the map
            map.delete(firstKey);
        }

        // update maxLen
        maxLen = Math.max(maxLen, right - left);
    }

    // when string has less distinct chars than the k that are required
    if (uniqueCharsSeen.size < k) {
        return -Infinity;
    }

    return maxLen;
}
console.log(longestSubstringWK('AAAHHIBC', 2));
