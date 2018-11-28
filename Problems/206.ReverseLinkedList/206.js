/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if(!head) {
    return [];
  } else {
    let array = [];
    while(head !== null) {
      array.push(head);
      head = head.next;
    }
    array[0].next = null;
    for(let i = 1; i < array.length; i++) {
      array[i].next = array[i - 1];
    }
    return array[array.length - 1];
  }
};

reverseList({
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
})