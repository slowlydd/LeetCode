/**
 * @param {string} leaves
 * @return {number}
 */
var minimumOperations = function(leaves) {
    let len = leaves.length
    // 初始化状态
    let f = []
    for(let i = 0; i < len; i++) {
        f[i] = [] 
    }
    f[0][0] = isYellow(leaves[0])
    f[0][1] = Number.MAX_SAFE_INTEGER
    f[0][2] = f[0][1]
    f[1][2] = f[0][1]
    for(let i = 1; i < len; i++) {
        f[i][0] = f[i - 1][0] + isYellow(leaves[i])
        f[i][1] = Math.min(f[i -  1][0], f[i - 1][1]) + isRed(leaves[i])
        if(i >= 2) {
            f[i][2] = Math.min(f[i - 1][2], f[i - 1][1]) + isYellow(leaves[i])
        }
    }
    return f[len - 1][2]
};

function isYellow(color) {
    return color === 'y' ? 1 : 0
}

function isRed(color) {
    return color === 'r' ? 1 : 0
}