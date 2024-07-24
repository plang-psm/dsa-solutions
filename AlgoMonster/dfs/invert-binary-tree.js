class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function invertBinaryTree(tree) {
  if (tree === null) return null;

  temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;

  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);

  return tree;
}
