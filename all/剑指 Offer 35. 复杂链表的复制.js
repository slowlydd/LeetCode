/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// dfs
// 1.从头结点 head 开始拷贝
// 2.由于一个结点可能被多个指针指到，因此如果该节点已被拷贝，则不粗要重复拷贝
// 3.如果还没有拷贝该节点，则创建一个新的节点进行拷贝，并将考这go的节点保存在哈希表中
// 4.使用递归拷贝所有的 next 节点，在递归拷贝所有的 random 节点
var copyRandomList = function(head) {
  // 图的基本单元是顶点，顶点之间的关联关系称为 边，因此可以将链表看递归一个图
  function dfs(head) {
    if(!head) return null
    if(visited.has(head)) return visited.get(head)
    let copy = new Node(head.val)
    visited.set(head, copy)
    copy.next = dfs(head.next)
    copy.random = dfs(head.random)
    return copy
  }
  let visited = new Map()
  return dfs(head)
}