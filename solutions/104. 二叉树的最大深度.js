/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归实现
var maxDepth = function (root) {
  if (!root) {
    return 0;
  } else {
    return Math.max(dfs(root.left), dfs(root.right)) + 1
  }
};

// 迭代实现
var maxDepth = function (root) {
  if (root) {
    // 层次遍历，使用标志位来表示层数
    let queue = [root, null]
    let depth = 1
    while (queue.length > 0) {
        let node = queue.shift()
        if(node === null) {
            if(queue.length === 0) return depth
            depth ++
            queue.push(null)
            continue
        }
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
    return depth
  } else {
      return 0
  }
};
