/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head.next && n=== 1) return null
    let s = head, fast = head
    while(n) {
        fast = fast.next
        n--
    }

    // 不是删除头节点
    if(fast) {
        while(fast.next) {
            pre = s
            s = s.next
            fast = fast.next
        }

        let temp = s.next
        if(temp) {
            s.next = temp.next
        }
        return head
    } else {
        // 如果遍历到链表末尾，要删除头节点
        return head.next
    }
};