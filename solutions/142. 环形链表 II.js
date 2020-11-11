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
var detectCycle = function(head) {
    // hash map
    if(!head) return null
    let s = new Set()
    let pre = null
    s.add(p, null)
    
    do {
      pre = p
      p = p.next
      let temp = s.has(p)
      if(temp) {
        return p
      } else {
        s.add(p)
      }
    } while(p);
    return null    
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 双指针
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let fast = head, slow = head
  while(fast !== null) {
      slow = slow.next
      if(fast.next) {
          fast = fast.next.next
      } else {
          return null
      }

      if(slow === fast) {
          let p = head
          while(p !== slow) {
              p = p.next 
              slow = slow.next
          }
          return p
      }
  }
  return null
};