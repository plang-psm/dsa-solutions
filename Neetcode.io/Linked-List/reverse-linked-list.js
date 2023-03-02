//Given the head of a singly linked list, reverse the list, and return the reversed list.

//-----------------------------
// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

//-----------------------------
// create three variables
// current holds first position. Next for next node, prev for prev node
// set a while loop that exits when head = null (no node to jump to)
    // set next to the node next to current
    // set current next to prev to change arrow direction
    // set prev to current
    // set current to next node and do again until exit
// return prev

const reverseList = function(head) {
    let current = head
    let next = null
    let prev = null

    while(current !== null) {
        next = current.next
        current.next = prev
        prev = current
        current = next

    }
    return prev
};

console.log(
    reverseList(
        [1,2,3,4,5]
    )
)