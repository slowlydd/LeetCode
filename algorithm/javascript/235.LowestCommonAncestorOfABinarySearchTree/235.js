/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let res = {};

  getRoot(root, p, q, res);

  return res.res;

};

function getRoot(root, p, q, res) {

  if(res.res) {
    return [];
  }

  if(root === null) {
    return [];
  }

  let left = getRoot(root.left, p, q, res);
  let right = getRoot(root.right, p, q, res);

  if((~left.indexOf(p)) && (~right.indexOf(q)) || (~left.indexOf(q)) && (~right.indexOf(p))) {
    res.res = root;
    return [];
  }

  let array = left.concat(right);
  if(root.val === p.val && (~array.indexOf(q))) {
    res.res = root;
    return [];
  }

  if(root.val === q.val && (~array.indexOf(p))) {
    res.res = root;
    return [];
  }

  return [root].concat(array);
}

let p = {
  val: 2,
  left: {
    val: 0,
    left: null,
    right: null
  },
  right: {
    val: 4,
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
  }
};

let q = {
  val: 8,
  left: {
    val: 7,
    left: null,
    right: null
  },
  right: {
    val: 9,
    left: null,
    right: null
  }
};

lowestCommonAncestor({
  val: 6,
  left: p,
  right: q
}, p, q);