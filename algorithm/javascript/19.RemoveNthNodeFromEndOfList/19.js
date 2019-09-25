/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (33.94%)
 * Total Accepted:    359.1K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, remove the n-th node from the end of list and return
 * its head.
 * 
 * Example:
 * 
 * 
 * Given linked list: 1->2->3->4->5, and n = 2.
 * 
 * After removing the second node from the end, the linked list becomes
 * 1->2->3->5.
 * 
 * 
 * Note:
 * 
 * Given n will always be valid.
 * 
 * Follow up:
 * 
 * Could you do this in one pass?
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let pre;
  let p = head;
  // 设置一个守卫结点，然后同一操作
  let a = {};
  a.next = head;
  // 指针先走n次
  for (let i = 1; i < n; i++) {
    if (p.next) {
      p = p.next;
    }
  }
  // 设定一个指针，跟随
  pre = a;

  // 此段代码有可能没有执行
  while (p.next) {
    p = p.next;
    pre = pre.next;
  }

  pre.next = pre.next.next;

  if (a.next == head.next) {
    return pre.next;
  }

  return head;
};
