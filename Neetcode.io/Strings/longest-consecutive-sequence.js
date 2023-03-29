// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

//-----------------------------
// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

//-----------------------------
// Create two function - one to sort and one to search
// sort funtion checks edge cases 
// - length of string
// - sorts the strings

// search function
// defines a max and length
// loop through the string
    // set a duplicate checker
        // check for a streak, -- if nums[i] + 1 = nums[i+1]
            // increment the length
        // if the seq breaks -- set the max length to the max length between maxlenght and length
// finally return max length

//-----------------------------
// Time complexity: + Space complexity:

const longestConsecutive = function(nums) {
    if (!nums.length) return 0;
    nums.sort((a, b) => a - b);

    return search(nums);
}

const search = (nums) => {
    let maxLength = 1å
    let length = 1

    for (let i = 1; i < nums.length; i++) {/
        const isPrevDuplicate = nums[i - 1] === nums[i]
        if (isPrevDuplicate) continue

        const isStreak = nums[i] === ((nums[i - 1]) + 1)
        if (isStreak) { 
            length++; 
            continue; 
            }

        maxLength = Math.max(maxLength, length);
        length = 1;
    }

    return Math.max(maxLength, length);
}

console.log(longestConsecutive([100,4,200,1,3,2])) // 4