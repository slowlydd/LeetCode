/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    let temp = BST(1, n, i);
    res = res + temp;
  }
  return res;
};

function BST(left, right, root) {
  let resLeft = 0;
  let resRight = 0;
  if (root - left > 0) {
    for (let i = left; i < root; i++) {
      resLeft = resLeft + BST(left, root - 1, i);
    }
  } else {
    resLeft = 1;
  }

  if (right - root > 0) {
    for (let i = root + 1; i <= right; i++) {
      resRight = resRight + BST(root + 1, right, i);
    }
  } else {
    resRight = 1;
  }
  return resLeft * resRight;
}

numTrees(4);