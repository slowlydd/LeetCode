/**
 * @param {number[][]} grid
 * @return {number}
 */
// 迭代法，如果是网格的边界或者相邻的另一个格子是水域，就贡献一条边
var islandPerimeter = function(grid) {
    const dx = [0, 1, 0, -1] // 统一边界条件，方便下面进行循环统一处理
    const dy = [1, 0, -1, 0]
    const n = grid.length, m = grid[0].length
    let ans = 0
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(grid[i][j]) {
                let cnt = 0
                for(let k = 0; k < 4; k++) {
                    let tx = i + dx[k]
                    let ty = j + dy[k]
                    if(tx < 0 || tx >= n || ty < 0 || ty >= m || !grid[tx][ty]) {
                        cnt += 1
                    }
                }
                ans += cnt
            }
        }
    }
    return ans
};

// 深度优先搜索
var islandPerimeter = function(grid) {
    const dx = [0, 1, 0, -1]
    const dy = [1, 0, -1, 0]
    const n = grid.length, m = grid[0].length
    const dfs = (x, y) => {
        if(x < 0 || x >= n || y < 0 || y >= m || grid[x][y] === 0) {
            return 1
        }

        if(grid[x][y] === 2) {
            return 0
        }
        grid[x][y] = 2
        let res = 0
        for(let i = 0; i < 4; i++) {
            const tx = x + dx[i]
            const ty = y + dy[i]
            res += dfs(tx, ty)
        }
        return res
    }

    let ans = 0
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(grid[i][j] === 1) {
                ans += dfs(i, j)
            }
        }
    }
    return ans
}