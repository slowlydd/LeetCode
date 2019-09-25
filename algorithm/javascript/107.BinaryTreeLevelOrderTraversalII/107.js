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
var levelOrderBottom = function(root) {
  let array = [];
  traversal(0,root, array);
  array.reverse();
  return array;
};

function traversal(depth ,root, array) {
  if(!root) {
    return [];
  } else {

    if(array[depth]) {
      array[depth].push(root.val);
    } else {
      array[depth] = [root.val];
    }

    // 遍历左子树
    let leftTree = traversal(depth + 1, root.left, array);

    // 遍历右子树
    let rightTree = traversal(depth + 1, root.right, array);

  }
}

levelOrderBottom({
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
})