/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let p1 = headA, p2 = headB
    while(p1 !== p2) {
      p1 ? p1 = p1.next : p1 = headB
      p2 ? p2 = p2.next : p2 = headA
    }
    return p1
};