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
var hasCycle = function (head) {
  if(!head || head.next === null) {
    return false;
  }
  let p = head;
  head = head.next;
  while (p != head) {
    if (head === null || head.next === null) {
      return false;
    } 
    p = p.next;
    head = head.next.next;
  }
  return true;
};

hasCycle({
  val: 1,
  next: {
    val: 2,
    next: null
  }
})