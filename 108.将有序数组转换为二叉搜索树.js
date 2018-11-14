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
var sortedArrayToBST = function(nums) {
  console.log(nums);
    if(nums.length === 0) {
      return null;
    } else {
      let tree = new TreeNode(nums[0]);
      tree.left = 
      createTree(tree.left, 1, nums, true);
      createTree(tree.right, parseInt((nums.length - 2) / 2), nums, false);

      console.log(tree);
    }
};

function createTree(tree, index, array, flag) {
  if(flag) {
    if(index >=  parseInt((array.length - 2) / 2)) {
      return ;
    } else {
      tree = new TreeNode(array[index++]);
      createTree(tree.left, index , array);
    }
  } else {
    if(index >= array.length) {
      return ;
    } else {
      tree = new TreeNode(array[index++]);
      createTree(tree.left, index , array);
    }
  }
}



 function TreeNode(val) {
       this.val = val;
       this.left = this.right = null;
   }

   sortedArrayToBST([-10,-3,0,5,9]);