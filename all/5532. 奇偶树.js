/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    if(!root) return true
    let queue = [root, null]
    let flag = 0
    let prev = 0
    let node
    while(queue.length > 0) {
      node = queue.shift()
      if(node === null) {
        if(queue.length === 0) return true
        queue.push(null)
        flag++
        if(flag % 2 === 0) {
          prev = 0
        } else {
          prev = Number.MAX_SAFE_INTEGER
        }
        continue;
      }

      if(flag % 2 === 0) {
        if(prev >= node.val || node.val % 2 === 0) return false
      } else {
        if(prev <= node.val || node.val % 2 === 1) return false
      }

      prev = node.val
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    return true
};
isEvenOddTree([1,10,4,3,null,7,9,12,8,6,null,null,2])