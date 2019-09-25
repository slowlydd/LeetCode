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
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  } else {
    let array = [];
    getLevelTraversal(root, 0, array);
    for(let i = 0; i < array.length; i++) {
      if(i % 2 === 1) {
        array[i].reverse();
      }
    }
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

zigzagLevelOrder({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null
    }
  }
})