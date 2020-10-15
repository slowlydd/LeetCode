/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;
  let queue = [root, null];
  while (queue.length > 0) {
    let node = queue.shift ();
    if (node === null) {
      if (queue.length === 0) return root;
      queue.push (null);
      continue;
    } else {
      node.next = queue[0];
    }
    if (node.left) queue.push (node.left);
    if (node.right) queue.push (node.right);
  }
};
