/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if(DLR(p) === DLR(q)) {
    return true;
  } else {
    return false;
  }
};

function DLR(tree) {
  if(!tree) {
    return "null";
  } else {
    return String(tree.val) + String(DLR(tree.left)) + String(DLR(tree.right));
  }
}

isSameTree({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 1,
    left: null,
    right: null
  }
},{
  val: 1,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
})