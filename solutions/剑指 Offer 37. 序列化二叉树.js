/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(root) {
        let str = ""
        let queue = [root]
        while(queue.length) {
            let node = queue.shift()
            if(node !== ',') {
                str = str + node.val + ','
                if(node.left) {
                    queue.push(node.left)
                } else {
                    queue.push(",")
                }
                if(node.right) {
                    queue.push(node.right)
                } else {
                    queue.push(",")
                }
            } else {
                str += node
            }
        }
        return str
    } 
    return root
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data) {
        let end = 0
        while(data[end] !== ',') {
            end++
        }
        // 构建根节点
        const root = new TreeNode(Number(data.slice(0, end))) 
        let queue = [root]
        start = ++end
        while(queue.length && end < data.length) {
            const node = queue.shift()
            // 左子树
            while(data[end] !== ',') {
                end++
            }

            if(start !== end) {
                // 节点有值
                const left = new TreeNode(Number(data.slice(start, end)))
                node.left = left
                queue.push(left)
            }
            start = ++end
            // 右子树
            while(data[end] !== ',') {
                end++
            }
            if(start !== end) {
                // 节点有值
                const right = new TreeNode(Number(data.slice(start, end)))
                node.right = right
                queue.push(right)
            }
            start = ++end
        }
        return root
    }
    return null
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */