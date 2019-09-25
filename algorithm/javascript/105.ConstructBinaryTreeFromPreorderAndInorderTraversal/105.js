/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length > 0) {
    let root = new TreeNode(preorder[0]);
    let indexIn = inorder.indexOf(root.val);
    preorder.splice(0, 1);
    if (indexIn > 0) {
      root.left = buildTree(preorder, inorder.slice(0, indexIn));
    }
    if (inorder.length - indexIn - 1 > 0) {
      root.right = buildTree(preorder, inorder.slice(indexIn + 1));
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

buildTree([3,9,20,15,7], [9,3,15,20,7]);