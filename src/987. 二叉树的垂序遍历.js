/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    if(!root) return []
    // 二维数组 存坐标和值  
    let locationList = []

    const dfs = function(root, x, y) {
        if(!root) return 
        locationList.push([x, y, root.val])
        dfs(root.left, x - 1, y - 1)
        dfs(root.right, x + 1, y - 1)
    }
    dfs(root, 0, 0)
    locationList = locationList.sort((a, b) => {
        if(a[0] !== b[0]) return a[0] - b[0]
        if(a[1] !== b[1]) return b[1] - a[1]
        return a[2] - b[2]
    })
    let curX = locationList[0][0]
    let result = [[locationList[0][2]]]

    for(let i = 1; i < locationList.length; i++) {
        let temp = locationList[i]
        let x = temp[0]
        if(x === curX) {
            let last = result[result.length - 1] 
            last.push(temp[2])
        } else {
            curX = x
            result.push([temp[2]])
        }
    }
    return result
};