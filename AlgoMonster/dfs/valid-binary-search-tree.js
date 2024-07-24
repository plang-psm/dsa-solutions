class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function bst(root, min, max) {
  if (root === null) return true;
  if (!(min < root.val && root.val < max)) return false;

  return bst(root.left, min, root.val) && bst(root.right, root.val, max);
}
