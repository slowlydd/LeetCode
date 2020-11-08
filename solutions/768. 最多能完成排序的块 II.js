/**
 * @param {number[]} arr
 * @return {number}
 */
// 滑动窗口
var maxChunksToSorted = function(arr) {
    let sorted = arr.slice(0)
    sorted.sort((a, b) => a - b)
    let res = 0, len = arr.length
    let i = 0, sum = 0
    while(i < len) {
        sum = sum + arr[i] - sorted[i]
        if(sum === 0) {
            res++
        }
        i++
    }
    return res
};

// 单调栈
var maxChunksToSorted = function(arr) {
    const stack = []
    for(let i = 0; i < arr.length; i++) {
        if(!stack.length || arr[i] >= stack[stack.length - 1]) {
            stack.push(arr[i])
        } else {
            let max = stack[stack.length - 1] 
            while(stack.length && stack[stack.length - 1] > arr[i]) {
                stack.pop()
            }
            stack.push(max)
        }
    }
    return stack.length
};