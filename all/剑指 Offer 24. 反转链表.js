/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代法反转链表
var reverseList = function(head) {
  let pre = null
  while(head) {
    let temp = head.next
    head.next = pre
    pre = head
    head = temp
  }
  return pre
};