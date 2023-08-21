    // Req
    // length of the longest substr
    //    - No repeating chs
    // edge cases
    //    - s is empty
    //    - s is one

    // define
    //  a map
    //  max
    //  left
    // let temp = 0

    // for loop through s.length w/ right = 0
        // let ch = s[right]
        // while(Map[ch])
            // map.delete(s[left])
            // left++
            // temp = Map.size
        // Map.set(ch)
        // temp++
        // Max = Math.max(max, temp)
    // return max

    // TC: O(n) | SC: O(1)
    
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0

    let chars = new Map()
    let max = -Infinity
    let left = 0
    let temp = 0

    for(let right = 0; right < s.length; right++) {
        let ch = s[right]
        while(chars.has(ch)) {
            chars.delete(s[left])
            left++
            temp = chars.size
        }
        chars.set(ch)
        temp++
        max = Math.max(max, temp)
    }
    return max
}