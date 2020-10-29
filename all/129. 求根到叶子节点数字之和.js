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
// dfs
var sumNumbers = function(root) { 
  let res = 0
  function dfs(root, num) {
    if(!root.left && !root.right) {
      res += root.val + num * 10
    } else {
      if(root.left) dfs(root.left, num * 10 + root.val)
      if(root.right) dfs(root.right, num * 10 + root.val)
    }
  }
  if(root) {
    dfs(root, 0)
  }
  return res
};

// bfs
var sumNumbers = function(root) { 
  if(!root) return root
  let res = 0
  let queue = [root]
  let numQueue = [root.val]
  while(queue.length) {
    const node = queue.shift()
    const num = numQueue.shift()
    const left = node.left, right = node.right
    if(left === null && right === null) {
      res += num
    } else {
      if(left) {
        queue.push(node.left)
        numQueue.push(num * 10 + left.val)
      }
      if(right) {
        queue.push(node.right)
        numQueue.push(num * 10 + right.val)
      }
    }
  }
  return res
};