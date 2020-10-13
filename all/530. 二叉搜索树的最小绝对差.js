/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let res = Number.MAX_SAFE_INTEGER, pre = -1
    function dfs(root) {
        if(!root) return 
        dfs(root.left)
        if(pre === -1) {
             pre = root.val
        } else {
            res = Math.min(res, root.val - pre)
            pre = root.val
        }
        dfs(root.right)
    }
    dfs(root)
    return res
};

