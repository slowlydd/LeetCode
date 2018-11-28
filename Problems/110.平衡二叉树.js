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
// 此题使用全局变量的做法是正确的，但是leetcode中可能不支持这种在函数外边使用全局变量的方法
// let result = true;
// var isBalanced = function(root) {
//     if(!root) {
//       return true;
//     } else {
//         if(root.left === null && root.right === null) {
//         return true;
//       }
//       getDepth(root);
//       return result;
//     }
// };

// function getDepth(tree) {
//   if(!tree) {
//     return 0;
//   } else {
//     let leftDepth = getDepth(tree.left);
//     let rightDepth = getDepth(tree.right);
//     if(Math.abs(leftDepth - rightDepth) > 1) {
//       result = false;
//     }
//     return  1 + Math.max(leftDepth, rightDepth);
//   }
// }



var isBalanced = function(root) {
    if(!root) {
      return true;
    } else {
      let res = {
        result: true
      }
      let leftDepth = getDepth(root, res);
      return res.result;
    }
};

function getDepth(tree, res) {
  if(!tree) {
    return 0;
  } else {
    let leftDepth = getDepth(tree.left, res);
    let rightDepth = getDepth(tree.right, res);
    if(Math.abs(leftDepth - rightDepth) > 1) {
      res.result = false;
    }
    return  1 + Math.max(leftDepth, rightDepth);
  }
}

isBalanced({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: null
})

// isBalanced({
//   val: 1,
//   left: null,
//   right: null
// });


// isBalanced({
//   val: 3,
//   left: {
//     val: 9,
//     left: null,
//     right: null
//   },
//   right: {
//     val: 20,
//     left: {
//       val: 15,
//       left: null,
//       right: null
//     },
//     right: {
//       val: 7,
//       left: null,
//       right: null
//     }
//   }
// })

isBalanced({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: {
        val: 4,
        left: null,
        right: null
      },
      right: {
        val: 4,
        left: null,
        right: null
      }
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
})