/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
    if(s1.length !== s2.length) return false
    let map = new Map()
    for(let i = 0; i < s1.length; i++) {
        if(map.has(s1[i])) {
            let num = map.get(s1[i])
            map.set(s1[i], ++num)
        } else {
            map.set(s1[i], 1)
        }

         if(map.has(s2[i])) {
            let num = map.get(s2[i])
            map.set(s2[i], --num)
        } else {
            map.set(s2[i], -1)
        }
        if(!map.get(s1[i])) map.delete(s1[i])
        if(!map.get(s2[i])) map.delete(s2[i])
    }
    if(map.size) {
        return false
    } else {
        return true
    }
};
// split 方法性能优于 [...s1]
var CheckPermutation = function(s1, s2) {
    return s1.split("").sort().join("") === s2.split("").sort().join("")
}

var CheckPermutation = function(s1, s2) {
    return [...s1].sort().join("") === [...s2].sort().join("")
}