/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) {
    return false;
  } else {
    let res = {
      result: false
    };
    traversal(root, sum, res, 0);
    return res.result;
  }
};

function traversal(tree, sum, res, value) {
  if(tree.left === null && tree.right === null) {
    value = value + tree.val;
    if(value === sum) {
      res.result = true;
    }
  } else {
    value = value + tree.val;
    if(tree.left) {
      traversal(tree.left, sum, res, value);
    }
    if(tree.right) {
      traversal(tree.right, sum, res, value);
    }
  }
}

hasPathSum({
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7,
        left: null,
        right: null
      },
      right: {
        val: 0,
        left: null,
        right: null
      }
    },
    right: null
  },
  right: {
    val: 8,
    left: {
      val: 13,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: {
        val: 1,
        left: null,
        right: null
      }
    }
  }
}, 22);