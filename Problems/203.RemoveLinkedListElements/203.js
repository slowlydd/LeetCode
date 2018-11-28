/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head === null) {
    return [];
  } else {
    let res;
    // 找到第一个不为val的节点
    while (head && head.val === val) {
      head = head.next;
    }
    res = head;

    // 向后排除节点
    while (head !== null && head.next !== null && head.next.next !== null) {
      if (head.next.val === val) {
        head.next = head.next.next;
      } else {
        head = head.next;
      }
    }
    if (head && head.next && head.next.val === val) {
      head.next = null
    }
    if (res) {
      return res;
    } else {
      return [];
    }
  }
};

removeElements(null, 1)