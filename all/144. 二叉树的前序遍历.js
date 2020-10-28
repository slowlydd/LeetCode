/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归法前序遍历
var preorderTraversal = function(root) {
  let res = []
  function traversal(root) {
    if(!root) return 
    res.push(root.val)
    traversal(root.left)
    traversal(root.right)
  }
  traversal(root)
  return res
};

// 迭代法前序遍历
var preorderTraversal = function(root) {
  if(!root) return root
  let res = []
  let stack = []
  stack.push(root)
  while(stack.length) {
    let node = stack.shift()
    res.push(node.val)
    if(node.right) {
      stack.push(node.right)
    }
    if(node.left) {
      stack.push(node.left)
    }
  }
  return res
};

// Morris 遍历
/**
 * 核心思想是利用树的大量空闲指针，实现空间开销的极限缩减，前序遍历规则总结如下：
 * 1.新建临时节点，令该节点为 root
 * 2.如果当前节点的左子节点为空，将当前节点加入答案，并遍历当前节点的右子节点
 * 3.如果当前节点的左子节点不为空，在当前节点的左子树中找到当前节点在中序遍历下的前驱节点：
 *  -如果前驱节点的右子节点为空，将前驱节点的右子节点设置为当前节点。然后将当前节点加入答案，
 *  并将前驱节点的右子节点更新为当前节点
 *  -如果前驱节点的右子节点为当前节点，将它的右子节点重新设为空。当前节点更新为当前节点的
 *  右子节点
 * 4.重复步骤 2 和步骤 3，直到遍历结束
 */
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
