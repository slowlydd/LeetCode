/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {

  function getSum(root, obj) {
    if (root) {
      let temp = root.val;

      if (root.left) {
        temp = temp + getSum(root.left, obj);
      }

      if (root.right) {
        temp = temp + getSum(root.right, obj);
      }

      if (!obj[temp]) {
        obj[temp] = 1;
      } else {
        obj[temp]++;
      }

      if (obj[temp] > max) {
        max = obj[temp];
      }
      return temp;
    }
  }

  let obj = {};
  let max = 0;
  getSum(root, obj);
  let array = [];
  for (let key in obj) {
    if (obj[key] === max) {
      array.push(Number(key));
    }
  }
  return array;
};



findFrequentTreeSum({
  val: 5,
  left: {
    val: 2,
    next: null
  },
  right: {
    val: -3,
    next: null
  }
})