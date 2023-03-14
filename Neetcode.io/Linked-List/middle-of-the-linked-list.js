// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

//-----------------------------
// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

//-----------------------------
// set slow and fast to head
// while fast and fast.next is not false
// increase slow by 1
// increase fast by 2
// [1,2,3,4,5]
//      s   f <--- will exit here because fast will be false
// return slow

//-----------------------------
// Time complexity: O(n) + Space complexity:

const middleNode = function (head) {
  slow = fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

console.log(middleNode[1,2,3,4,5]) // [3,4,5]