    // a  a  a
    // <- i ->
    // Check palindromes by using bounds
    // Count = 0
    // Loop through s
        // left, right = i
        // Create helper function and pass left and right
        // Use a second helper function to cover even vals right+1
        
    // Helper funcion will set bounds
        // Ensure 2 things to increase count
            // left >= 0 && right <= s.legnth-1
            // s[left] === s[right]
    // return count
    // TC: O(N^2) SC: O(1)

var countSubstrings = function(s) {
    let count = 0
    for(let i = 0; i < s.length; i++) {
        let left = i
        let right = i

        // covers odd palindromes
        helper(left, right)
        // covers even palindromes
        helper(left, right+1)
    }

    // Help function that will check for bounds
    function helper(left, right) {
        while(left >= 0 && right <= s.length-1 && s[left] === s[right]) {
            count++
            left--
            right++
        }
    }
    return count
};