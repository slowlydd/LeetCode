/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = res = i = 0
    let map = new Map()
    for(; i < s.length; i++) {
        if(map.has(s[i])) {
            res = i - start > res ? i - start : res
            let temp = map.get(s[i]) + 1
            // 从重复元素的下一个开始，但是要保证只能向后更新
            start = temp > start ? temp : start  
        }
        map.set(s[i], i)
    }
    return i - start > res ? i - start : res
};