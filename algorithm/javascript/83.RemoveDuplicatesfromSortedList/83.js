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
var deleteDuplicates = function (head) {
  let init = {
    head
  };
  // 这里的输出是一个小彩蛋
  if(!head) {
    return [];
  }
  while (head && head.next) {
    if (head.val == head.next.val) {
      let next = head.next.next;
      head.next = next;
    } else {
      head = head.next;
    }
    if(head == null) {
      break;
    }
  }
  return init.head;
};

deleteDuplicates({
  next: null
})