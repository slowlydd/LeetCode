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
  if(!headA === null || !headB === null) {
    return false;
  }
  let p = headA;
  let q = headB;
  let array = [];
  while(p != null) {
    array.push(p);
    p = p.next;
  }

  while(q != null) {
    if(~array.indexOf(q)) {
      return q;
    }
    q = q.next;
  }
  return null;
};

let s = {
  val: 5,
  next: null
}

getIntersectionNode({
  val: 1,
  next: null
},
{
  val: 3,
  next: {
    val: 4,
    next: s
  }
});