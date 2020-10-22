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
var isPalindrome = function(head) {
    if(!head || !head.next) return true
    // 快慢指针找中点
    let f= head, s = head 
    do {
        f = f.next.next
        s = s.next
    } while(f && f.next)

    let pre = null
    let curr = s.next
    if(!curr) return false
    while(curr) {
        let temp = curr.next
        curr.next = pre
        pre = curr
        curr = temp
    }
    let p = head
    while(pre) {
        if(p.val != pre.val) {
            return false
        }
        p = p.next 
        pre = pre.next
    }
    return true    
};
