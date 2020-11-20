/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) return head
    let p = head
    let q = head.next
    let pre = {next: null}
    let res = pre
    do{
        // 保存后继
        let temp = p.next.next
        // p 前移
        p.next = temp
        // 交换
        q.next = p
        pre.next = q
        // 后移
        pre = p
        if(temp) {
            p = temp
            q = p.next
        } else {
            break
        }
    } while(p&&q);
    return res.next
};