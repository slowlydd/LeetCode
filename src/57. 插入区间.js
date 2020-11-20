/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let left = newInterval[0]
    let right = newInterval[1]
    let placed = false  
    let res = []
    for(let i = 0; i < intervals.length; i++) {
        if(intervals[i][0] > right) {
            // 在插入区间的右侧且无交集
            if(!placed) {
                res.push([left, right])
                placed = true
            }
            res = res.push(intervals[i])
        } else if (intervals[i][1] < left) {
            // 在插入区间的左侧且无交集
            res.push(intervals[i])
        } else {
            // 与插入区间有交集，计算它们的并集
            left = Math.min(left, intervals[i][0])
            right = Math.max(right, intervals[i][1])
        }
    }

    if(!placed) {
        res.push(newInterval)
    }
    return res
};