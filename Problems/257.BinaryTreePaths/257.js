/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) {
    return [];
  }
  let array = [];
  getPath(root, [], array);
  for (let i = 0; i < array.length; i++) {
    let str = "";
    for (let j = 0; j < array[i].length; j++) {
      if (j === array[i].length - 1) {
        str = str + array[i][j];
      } else {
        str = str + array[i][j] + '->';
      }
    }
    array[i] = str;
  }
  return array;
};

function getPath(root, path, array) {
  path.push(root.val);
  if (root.left === null && root.right === null) {
    array.push(path);
  } else {
    let arrayLeft = path.slice(0);
    let arrayRight = path.slice(0);
    if (root.left !== null) {
      getPath(root.left, arrayLeft, array);
    }
    if (root.right !== null) {
      getPath(root.right, arrayRight, array);
    }
  }
}

binaryTreePaths({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
})