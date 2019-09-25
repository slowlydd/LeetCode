/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if(!root) {
    return [];
  } else {
    let array = [];
    getLevelTraversal(root, 0, array);
    return array;
  }
};

function getLevelTraversal(root, depth, array) {
  if(root) {
    if(!array[depth]) {
      array[depth] = [];
    }
    array[depth].push(root.val);
    if(root.left) {
      getLevelTraversal(root.left, depth + 1, array);
    }
    if(root.right) {
      getLevelTraversal(root.right, depth + 1, array);
    }
  }
}

