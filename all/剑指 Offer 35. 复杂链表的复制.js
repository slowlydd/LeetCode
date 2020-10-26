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

// 广度优先搜索
// 1.创建哈希表保存已拷贝节点，格式{原节点：拷贝节点}
// 2.创建队列，并将头结点入队
// 3.当队列不为空时，弹出一个节点，
var copyRandomList = function(head) {
  // 图的基本单元是顶点，顶点之间的关联关系称为 边，因此可以将链表看递归一个图
  function bfs(head) {
    if(!head) return null
    let clone = new Node(head.val) // 创建克隆节点
    const queue = []
    queue.push(head)
    visited.set(head, clone)
    while(queue.length) {
      let temp = queue.shift()
      if(temp.next && !visited.has(temp.next)) {
        visited.set(temp.next, new Node(temp.next.val))
        queue.push(temp.next)
      }
      if(temp.random && !visited.has(temp.random)) {
        visited.set(temp.random, new Node(temp.random.val))
        queue.push(temp.random)
      }
      visited.get(temp).next = visited.get(temp.next) || null 
      visited.get(temp).random = visited.get(temp.random) || null
    }
    return clone
  }
  let visited = new Map()
  return bfs(head)
}

// 迭代法
var copyRandomList = function(head) {
  const visited = new Map()
  function getCloneNode(node) {
    if(node) {
      if(visited.has(node)) {
        return visited.get(node)
      } else {
        let temp = new Node(node.val)
        visited.set(node, new Node(node.val))
        return visited.get(node)
      }
    } else {
      return null
    }
  }

  if(!head) return head
  let old_node = head
  new_node = new Node(old_node.val, null, null)
  visited.set(old_node, new_node)
  while(old_node) {
    new_node.random = getCloneNode(old_node.random)
    new_node.next = getCloneNode(old_node.next)
    old_node = old_node.next
    new_node = new_node.next
  }
  return visited.get(head)
}

// 优化的迭代法；构建两个链表
var copyRandomList = function(head) {
  if(!head) return head
  let cur = head
  // 逐个复制链表
  while(cur) {
    let new_node = new Node(cur.val) // 克隆新节点
    new_node.next = cur.next
    cur.next = new_node 
    cur = new_node.next 
  }

  cur = head
  while(cur) {
    cur.next.random  = cur.random ? cur.random.next : null
    cur = cur.next.next
  }

  new_head = head.next
  let node = head
  while(node != null && node.next != null) {
    temp = node.next
    node.next = temp.next
    node = temp
  }
  return new_head
}

