class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function dfs(root) {              
    // Null node adds no depth
    if (root === null) return 0;
    // num nodes in longest path of current subtree = max num nodes of its two subtrees + 1 current node
    return Math.max(dfs(root.left), dfs(root.right)) + 1;      
}

function treeMaxDepth(root) {
    return (root !== null) ? dfs(root) - 1 : 0;
}