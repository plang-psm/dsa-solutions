// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 
//-----------------------------
// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

//-----------------------------
// return true or false
// close in order of open

// hash map we will store the key to value '{' : '}'
// create a stack - []
// loop through s
// if hash['(']
    // push the val [')'] to the stack
// else if stack is not empty and last ch in stack is === to ch
    // pop from the stack

//-----------------------------
// Time complexity: + Space complexity: 


const isValid = function(s) {


    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    let stack = []
    for (let i=0; i<s.length; i++) {
        let ch = s[i]
        console.log(ch)
        if(map[ch]) {
            stack.push(map[ch])
        } else if(stack.length > 0 && ch === stack[stack.length-1]){
            stack.pop()
        } else {
            return false
        }
    }
    return stack.length === 0
};