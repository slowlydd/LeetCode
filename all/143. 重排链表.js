/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

// 数组存储的方式
// var reorderList = function(head) {
//     // 数组存储元素
//     if(!head) {
//         return head
//     }
//     let set = [], p = head
//     while(p){
//         set.push(p)
//         p = p.next
//     }

//     let j = set.length - 1, i = 0
//     while (i < j) {
//         set[i].next = set[j]
//         if(j != i + 1) {
//             set[j].next = set[i + 1]
//         }
//         i++
//         j--
//     }
//     // 判断数组内的节点的个数
//     if(set.length % 2 === 0) {
//         set[i].next = null
//     } else {
//         set[j].next = null
//     }
//     return head
// };

// 巧妙解法
var reorderList = function(head) {
    // 如果是空链表或者只有一个节点，不需要反转
    if(!head || !head.next) return head
    // 快慢找到链表的重点
    let s = head, f = head
    do {
        s = s.next
        f = f.next.next
    } while(f && f.next)
    // 迭代法反转右侧链表
    let cur = s.next
    // 前后断开
    s.next = null
    let pre = null
    while(cur) {
        let temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    // 合并两个链表
    s = head
    while(s&&pre) {
        let temp = s.next
        let temp2 = pre.next
        s.next = pre
        pre.next = temp
        s = temp
        pre = temp2
    }
    return head
};