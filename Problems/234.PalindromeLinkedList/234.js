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
var isPalindrome = function (head) {
  if (!head || head.next === null) {
    return true;
  }
  let stack = [];
  while (head !== null) {
    stack.push(head.val);
    head = head.next;
  }

  for (let i = 0; i < stack.length / 2; i++) {
    if (stack[i] !== stack[stack.length - i - 1]) {
      return false;
    }
  }
  return true;
};

isPalindrome({
  val: 1,
  next: {
    val: 2,
    next: {
      val: 2,
      next: {
        val: 1,
        next: null
      }
    }
  }
})