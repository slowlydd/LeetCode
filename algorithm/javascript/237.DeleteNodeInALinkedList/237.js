/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  while (node.next !== null) {
    node.val = node.next.val;
    if (node.next.next === null) {
      node.next = null;
    } else {
      node = node.next;
    }
  }
};
let node = {
  val: 5,
  next: {
    val: 1,
    next: null
  }
};

let s = {
  val: 4,
  next: node
}
deleteNode(node);
console.log(s);
