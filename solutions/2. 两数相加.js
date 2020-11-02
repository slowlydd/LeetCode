/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head, tail, carry = 0, m, n
    while(l1 || l2) {
      m = l1 ? l1.val : 0
      n = l2 ? l2.val : 0
      let sum = m + n + carry
      if(!head) {
        head = tail = new ListNode(sum % 10)
      } else {
        tail.next = new ListNode(sum % 10)
        tail = tail.next
      }     
      carry = Math.floor(sum / 10)
      if(l1) l1 = l1.next
      if(l2) l2 = l2.next
    }
    if(carry) {
      tail.next = new ListNode(carry)
    }
    return head
};