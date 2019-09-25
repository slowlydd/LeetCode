/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length <= 0) {
    return [];
  } else {
    mid = parseInt((nums.length - 1) / 2);
    let tree = new TreeNode(nums[mid]);
    let array1 = nums.slice(0, mid);
    let array2 = nums.slice(mid + 1, nums.length);
    tree.left = createTree(array1);
    tree.right = createTree(array2);
    return tree;
  }
};

function createTree(array) {
  if(array.length === 0) {
    return null;
  } else {
    mid = parseInt((array.length - 1) / 2);
    let tree = new TreeNode(array[mid]);
    let array1 = array.slice(0, mid);
    let array2 = array.slice(mid + 1, array.length);
    tree.left = createTree(array1);
    tree.right = createTree(array2);
    return tree;
  }
}

sortedArrayToBST([-10, -3, 0, 5, 9]);

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}