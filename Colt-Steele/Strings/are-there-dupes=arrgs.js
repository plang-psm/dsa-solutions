// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Time complexity O(n)

const areThereDuplicates = (...args) => {
    // head - 0
    // for loop
        // search = i
        // num[head] === num[search]
            // return true
    // return false

    let head = 0
    for(let i = 1; i < args.length; i++) {
        let search = i
        if(args[head] === args[search]) {
            return true
        } else {
            head = search
        }
    }
    return false
};

console
  .log(
  areThereDuplicates(1, 2, 3), // false
  areThereDuplicates(1, 2, 2), // true 
  areThereDuplicates('a', 'b', 'c', 'a') // true 
  );