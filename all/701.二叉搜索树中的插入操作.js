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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val)
    if(root.val > val) {
      traversal(root, "l",  val)
    }
    if(root.val < val) {
      traversal(root, "r", val)
    }
    return root
};

function traversal(node, flag, val) {
  let newNode
  if(flag === 'l') {
    if(node.left) {
      if(node.left.val < val) {
        traversal(node.left, 'r', val)
      } else {
        node = node.left
        traversal(node, 'l', val)
      }
    } else {
      node.left = new TreeNode(val)
    }
  } else {
    if(node.right) {
      if(node.right.val > val) {
        traversal(node.right, "l", val)
      } else {
        node = node.right
        traversal(node, 'r', val)
      }
    } else {
      node.right = new TreeNode(val)
    }
  }
}