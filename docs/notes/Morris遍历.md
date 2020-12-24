

```js
// 先序遍历
var preorderTraversal = function(root) {
  let res = []
  if(!root) return res
  let cur = root, mo = null
  while(cur) {
    res.push(cur.val)
    // 如果有左子树
    if(cur.left) {
      // 遍历右子树
      mo = cur.left
      while(mo.right) {
        mo = mo.right
      }
      // 左子树的最右侧节点指向根节点
      mo.right = cur.right
      // 当前节点移动到左子树
      cur = cur.left
    } else {
      cur = cur.right
    }
  }
  return res
};

// 中序遍历
var preorderTraversal = function(root) {
  let res = []
  if(!root) return res
  let cur = root, mo = null
  while(cur) {
    // 如果有左子树
    if(cur.left) {
      // 遍历右子树
      mo = cur.left
      while(mo.right) {
        mo = mo.right
      }
      // 左子树的最右侧节点指向根节点
      mo.right = cur
      // 当前节点移动到左子树
      cur = cur.left
      cur.right.left = null
    } else {
      res.push(cur.val)
      cur = cur.right
    }
  }
  return res
};

// 后序遍历 待实现
```