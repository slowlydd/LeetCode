/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  if(head && head.val === val) return head.next
  let pre = {next: head}
  let cur = head
  while(cur) {
    if(cur.val === val) {
      pre.next = cur.next
      return head
    } else {
      pre = pre.next
      cur = cur.next
    }
  }
};