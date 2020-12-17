/**
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {number[]}
 */
// 暴力解法，超出时间限制
var findSwapValues = function(array1, array2) {
    let sum1 = 0; sum2 = 0, i = 0, n1 = array1.length, n2 = array2.length
    while(i < n1) {
        sum1 += array1[i]
        i++
    }
    i = 0
    while(i < n2) {
        sum2 += array2[i]
        i++
    }
    for(let i = 0; i < n1; i++) {
        for(let j = 0; j < n2; j++) {
            if(sum1 - array1[i] + array2[j] === sum2 - array2[j] + array1[i]) {
                return [array1[i], array2[j]]
            }
        }
    }
    return []
};

// 排序后求解
var findSwapValues = function(array1, array2) {
    let sum1 = 0; sum2 = 0, i = 0, n1 = array1.length, n2 = array2.length
    while(i < n1) {
        sum1 += array1[i]
        i++
    }
    i = 0
    while(i < n2) {
        sum2 += array2[i]
        i++
    }
    if((sum1 + sum2)%2===1) return []
    array1.sort((a, b) => a - b)
    array2.sort((a, b) => a - b)
    let gap = (sum1 - sum2) / 2
    let x = y = 0
    while(x < n1 && y < n2) {
        if(array1[x] - array2[y] === gap) {
            return [array1[x], array2[y]]
        } else if(array1[x] - array2[y]  > gap) {
            y++
        } else {
            x++
        }
    }
    return []
}

// 哈希表法
var findSwapValues = function(array1, array2) {
    let sum1 = 0; sum2 = 0, i = 0, n1 = array1.length, n2 = array2.length
    while(i < n1) {
        sum1 += array1[i]
        i++
    }
    i = 0
    let set = new Set()
    while(i < n2) {
        sum2 += array2[i]
        set.add(array2[i])
        i++
    }
    if((sum1 + sum2)%2===1) return []
    let gap = (sum1 - sum2) / 2
    for(i = 0; i < n1; i++) {
        let diff = array1[i] - gap
        if(set.has(diff)) {
            return [array[1], diff]
        }
    }
    return []
}

