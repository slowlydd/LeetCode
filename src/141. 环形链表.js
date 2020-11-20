/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(!head) return false
    // 快慢指针
  let slow = head, fast = head.next
  while(slow !== fast) {
    slow = slow.next
    // 这里注意边界条件 确保 fast,fast.next 的存在
    if(fast && fast.next) { 
      fast = fast.next.next
    } else {
      return false
    }
  }
  return true
};