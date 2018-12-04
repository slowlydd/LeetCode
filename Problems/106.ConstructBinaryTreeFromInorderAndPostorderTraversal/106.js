/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (postorder.length > 0) {
    let root = new TreeNode(postorder[postorder.length - 1]);
    let indexIn = inorder.indexOf(root.val);
    postorder.splice(postorder.length - 1, 1);
    if (inorder.length - indexIn - 1 > 0) {
      root.right = buildTree(inorder.slice(indexIn + 1), postorder);
    }
    if (indexIn > 0) {
      root.left = buildTree(inorder.slice(0, indexIn), postorder);
    }
    return root;
  } else {
    return null;
  }
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

buildTree([9,3,15,20,7], [9,15,7,20,3])