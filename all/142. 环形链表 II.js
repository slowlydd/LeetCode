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
var detectCycle = function(head) {
    if(!head) return null // 失败条件让人头秃
    let slow = head, fast = head, pre = head
    do {
      slow = slow.next
      if(fast && fast.next) {
        fast = fast.next.next
      } else {
        return null
      }
    } while(slow !== fast);
    while(pre !== slow) {
      pre = pre.next
      slow = slow.next
    }
    return slow    
};