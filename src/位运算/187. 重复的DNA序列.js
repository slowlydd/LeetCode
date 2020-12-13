/**
 * @param {string} s
 * @return {string[]}
 */
// hash 表
var findRepeatedDnaSequences = function(s) {
    let map = {}
    for(let i = 0; i <= s.length - 10; i++) {
        let tempStr = s.slice(i, i+ 10)
        if(map[tempStr]) {
            map[tempStr] ++
        } else {
            map[tempStr] = 1
        }
    }

    let res = []
    for(let s in map) {
        if(map[s] > 1) {
            res.push(s)
        }
    }
    return res
};

// Rabin-Karp 算法用于多模式搜索，常用于重复检测和生物信息学中寻找
// 两个或多个蛋白质的相似性
var findRepeatedDnaSequences = function(s) {
    let L = 10, n = s.length
    let a = 4, aL = Math.pow(a, L)
    let map = {
        "A": 0,
        "C": 1,
        "G": 2,
        "T": 3
    }
    let num = []
    for(let i = 0; i < s.length; i++) {
        num[i] = map[s[i]]
    }
    let h = 0
    
    let mapH = {}
    let res = []
    for(let start = 0; start <= s.length - 10; start++) {
        if(start === 0) {
            for(let i = 0; i < 10; i++) {
                h += num[i] * Math.pow(4, 10 - i - 1)
            }
            mapH[h] = 1
        } else {
            h = h * 4 - num[start - 1] * aL + num[start + 9]
            if(mapH[h]) {
                if(mapH[h] === 1) {
                    res.push(s.slice(start, start + 10))
                }
                mapH[h] ++
            } else {
                mapH[h] = 1
            }
        }
    }
    return res
};

// 位运算：使用掩码实现常数时间窗口切片
var findRepeatedDnaSequences = function(s) {
    let L = 10, len = s.length
    if (len <= L) return []
    let map = {"A": 0, "C": 1, "G": 2, "T": 3}
    let nums = []
    for(let i = 0; i < len; i++) {
        nums[i] = map[s[i]]
    }
    bitmask = 0
    let seen = new Set()
    let output = new Set()
    for(let start = 0; start < len - L + 1; start++) {
        if(start != 0) {
            bitmask <<= 2
            bitmask |= nums[start + L - 1]
            bitmask &= ~(3 << 2 * L)
        } else {
            for(let i = 0; i < L; i++) {
                bitmask <<= 2
                bitmask |= nums[i]
            }
        }
        if(seen.has(bitmask)) {
            output.add(s.slice(start, start + L))
        }
        seen.add(bitmask)
    }
    return Array.from(output)
}