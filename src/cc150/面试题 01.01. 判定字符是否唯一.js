/**
 * @param {string} astr
 * @return {boolean}
 */
// 哈希表
var isUnique = function(astr) {
    let hash = {}
    for(let i = 0; i < astr.length; i++) {
        if(hash[astr[i]]) {
            return false
        } else {
            hash[astr[i]] = true
        }
    }
    return true
};

// 排序法
var isUnique = function(astr) {
    if(!astr.length) return true
    astr = astr.split("").sort()
    for(let i = 1; i < astr.length; i++) {
        if(astr[i] === astr[i - 1]) {
            return false
        }
    }
    return true
};

// 位运算
var isUnique = function(astr) {
    let mark = 0, basic = "a".charCodeAt()
    for(let i = 0; i < astr.length; i++) {
        let moveBit = astr[i].charCodeAt() - basic
        if((mark & (1<<(moveBit))) !== 0) {
            return false
        } else {
            mark |= 1<<(astr[i].charCodeAt() - basic)
        }
    }
    return true
};