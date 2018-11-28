/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) {
      return true;
    } else {
      if(traversalLeft(root.left) === traversalRight(root.right)) {
        console.log(traversalLeft(root.left));
        console.log(traversalRight(root.right));
        return true;
      } else {
        return false;
      }
    }
};

function traversalLeft(left) {
  if(!left) {
    return "null";
  } else {
    return String(left.val) + String(traversalLeft(left.left)) + String(traversalRight(left.right));
  }
}

function traversalRight(right) {
  if(!right) {
    return "null";
  } else {
    return String(right.val) + String(traversalRight(right.right)) + String(traversalLeft(right.left)) ;
  }
}

isSymmetric({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: {
      val: 5,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  }
})