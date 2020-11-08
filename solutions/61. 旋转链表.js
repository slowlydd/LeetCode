/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next || !k) return head
    let p = head
    let len = 1
    // 找分割点
    while(p.next) {
        p = p.next
        len ++
    }
    // 如果是整圈转的，直接返回
    if(k % len === 0) {
        return head
    }
    p.next = head
    let num = len - k % len
    for(let i = 0; i < num - 1; i++) {
        head = head.next        
    }
    let res = head.next
    head.next = null
    return res
};