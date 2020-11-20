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
    let pA = headA, pB = headB
    while(pA || pB) {
        if(pA === pB) {
            return pA
        }
        pA = pA ? pA.next : headB
        pB = pB ? pB.next : headA
    }
};