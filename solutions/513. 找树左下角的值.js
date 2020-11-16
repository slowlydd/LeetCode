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
var findBottomLeftValue = function(root) {
    let  leftVal = -1, depth = 0
    function dfs(node, d) {
        if(node) {
            if(d === depth) {
                depth++
                leftVal = node.val
            }
        }

        if(node.left) {
            dfs(node.left, depth)
        }

        if(node.right) {
            dfs(node.right, depth)
        }
    }
    dfs(node, 0)
    return leftVal
};

