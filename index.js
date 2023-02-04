// Write a function with takes in a string and returns counts of each character in the string.

// Example:
// Hello -> {h:1, e:1, l:2, 0:1 }

// Pseudocode:
// make obj to return at end
    // loop over string for each ch..
        // if ch(letter/num) is in obj, add one to count
        // if not add value and set to one
        // else if not a letter/num return nothing
// return obj at end

const charCount = str => {
    let object = {}

    const newS = str.toLowerCase()

    for(let ch of newS) {
        if(/[a-z0-9]/.test(ch)){
            object[ch] ? object[ch]++ : object[ch] = 1
        }
    }
    console.log(object);
    return object
}

charCount('Your number is 1234')