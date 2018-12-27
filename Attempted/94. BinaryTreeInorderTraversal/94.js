/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 递归
var inorderTraversal = function(root) {
  if(root) {
    let left = [];
    let right = [];
    if(root.left) {
      left = inorderTraversal(root.left);
    }

    if(root.right) {
      right = inorderTraversal(root.right);
    }
    left.push(root.val);
    return left.concat(root.right);
  }
};

inorderTraversal({
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null
  }
})