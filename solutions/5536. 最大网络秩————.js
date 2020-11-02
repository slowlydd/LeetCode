/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    let res = 0
    let singZhi = []
    // 计算单独的
    for(let i = 0; i < roads.length; i++) {
        if(singleZhi[roads[i][0]]) {
            singleZhi[roads[i][0]]++
        } else {
            singZhi[roads[i][0]] = 1
        }

        if(singleZhi[roads[i][1]]) {
            singleZhi[roads[i][1]]++
        } else {
            singZhi[roads[i][1]] = 1
        }
    }
    // 对应两个去重
    for(let i = 0; i <n; i++) {
        zhi[i] = []
        for(let j = 0; j < n; i++) {
            if(j === i) continue;
            zhi[i][j] = 
        }
    }
};