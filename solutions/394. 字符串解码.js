/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = []
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ']') {
            // 找到要重复的字符串
            let str = ""
            do {
                str = stack.pop() + str
            } while(stack[stack.length - 1] !== '[')
            stack.pop() // 弹出 '['
            // 找到数字，数字可能存在多位
            let carry = 1
            let num = 0
            let stackTop = stack[stack.length - 1]
            while(stackTop >= '0' && stackTop <= '9') {
                num = num + Number(stackTop) * carry
                stack.pop()
                stackTop = stack.length ? stack[stack.length - 1] : -1
                carry = carry * 10
            }
            let strRepeat = ""
            // 重复字符串
            for(let i = 0; i < num; i++) {
                strRepeat += str
            }
            stack.push(strRepeat)
        } else {
            stack.push(s[i])
        }
    }
    let res = ""
    while(stack.length) {
        res = stack.pop() + res
    }
    return res
};
