class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function dfs(root, target) {
  if (root === null) return 0;
  let total = 0;
  if (root.val >= target) total++;

  total += dfs(root.left, Math.max(target, root.val));
  total += dfs(root.right, Math.max(target, root.val));

  return total;
}

function visibleTreeNode(root) {
  return dfs(root, -Infinity);
}
