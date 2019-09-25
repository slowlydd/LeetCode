/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    // 当有一个链表为空
    if (!l1) {
        return l2;
    }

    if (!l2) {
        return l1;
    }

    // 记录最初的两个指针
    let p1 = l1;
    let p2 = l2;
    let result = new ListNode();
    let p = result;
    do {
        if (p1.val <= p2.val) {
            p.val = p1.val;
            p.next = new ListNode();
            p = p.next;
            p1 = p1.next;
        } else {
            p.val = p2.val;
            p.next = new ListNode();
            p = p.next;
            p2 = p2.next;
        }
    } while (p1 !== null && p2 !== null)

    if (p1 === null) {
        p.val = p2.val;
        p.next = p2.next;
    } else {
        p.val = p1.val;
        p.next = p1.next;
    }

    return result;
};

mergeTwoLists({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
}, {
        val: 1,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    });
