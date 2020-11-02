/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let res = 0, p = head
  while(p) {
    res = (res << 1) + p.val // 位运算的运算符优先级比较低
    p = p.next 
  }
  return res
};