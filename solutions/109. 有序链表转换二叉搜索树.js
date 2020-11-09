/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let arr = [], p = head
    while(p) {
        arr.push(p.val)
        p = p.next
    }
    return buildBST(arr)
};

function buildBST(arr) {
    let len = arr.length
    if(!len) return null
    let mid = Math.floor((len - 1) / 2)
    let root = new TreeNode(arr[mid])
    root.left = buildBST(arr.slice(0, mid))
    root.right = buildBST(arr.slice(mid + 1))
    return root
}