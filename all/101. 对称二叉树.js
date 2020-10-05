/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // 迭代实现
    return check(root, root)


    // 递归实现
    // if(root) {
    //     return dfs(root.left, root.right)
    // } 
    // return true
};

function check(root1, root2) {
    let queue = []
    queue.push(root1)
    queue.push(root2)

    while(queue.length > 0) {
        let r1 = queue.shift()
        let r2 = queue.shift()
        if(!r1 && !r2) {
            continue
        }
        if((!r1 || !r2) || r1.val !== r2.val) {
            return false
        }

        queue.push(r1.left)
        queue.push(r2.right)

        queue.push(r1.right)
        queue.push(r2.left)
    }
    return true
}

// function dfs(root1, root2) {
//     if(root1 === root2) {
//         return true
//     } 

//     if(!root1 || !root2) {
//         return false
//     } 

//     if(root1.val === root2.val) {
//         return dfs(root1.left, root2.right) && dfs(root1.right, root2.left)
//     } else {
//         return false
//     }
// }