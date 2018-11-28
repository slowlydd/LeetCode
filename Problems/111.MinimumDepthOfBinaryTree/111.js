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
var minDepth = function(root) {
    if(!root) {
      return 0;
    } else {
      if(root.left === null && root.right != null) {
        return 1 + minDepth(root.right);
      }

      if(root.right === null && root.left != null) {
        return 1 + minDepth(root.left);
      }
      return 1 + Math.min(minDepth(root.left), minDepth(root.right));
    }
};

let s = minDepth({
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: null
});

console.log(s);