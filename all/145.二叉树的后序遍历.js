/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    // 递归写法
    // let res = []
    // func(root, res)
    // return res 

    // 迭代法
    if(!root) return []
    let stack = []
    let res = []
    let prev = null
    
    while(root || stack.length) {
        // 遇左入栈
        while(root) {
            stack.push(root)
            root = root.left
        }
        // 左子树入栈完毕，以后，从栈顶取出一个元素
        root = stack.pop()
        // 取出元素如果没有右子树，说明是叶子节点，push 入结果
        if(!root.right || root.right == prev) {
            res.push(root.val)
            prev = root
            root = null
        } else {
            // 否则右子树入栈，继续遍历
            stack.push(root)
            root = root.right
        }
    }
    return res
};

// function func(node, res) {
//     if(node) {
//         func(node.left, res)
//         func(node.right, res)
//         res.push(node.val)
//     }
// }