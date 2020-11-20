/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    // 双指针解法
    let skip1 = 0, skip2 = 0, s = S.length - 1, t = T.length - 1
    while(s >= 0 || t >= 0) {
      while(s >= 0) {
        if(S[s] === '#') {
          // 记录退格
          skip1++, s--
        } else if(skip1 > 0) {
          // 退格生效
          skip1--, s--
        } else {
          // 遇到一个非退格字符
          break;
        }
      }

      while(t >= 0) {
        if(S[t] === '#') {
          // 记录退格
          skip2++, t--
        } else if(skip2 > 0) {
          // 退格生效
          skip2--, t--
        } else {
          // 遇到一个非退格字符
          break;
        }
      }
      if(s >= 0 && t >= 0) {
        if(S[s] != T[t]) {
          return false
        }
      } else {
        if(s >= 0 || t >= 0) {
          return false
        }
      }
      s--
      t--
    }
    return true
    // 栈解法
    // let stackS = []
    // let stackT = []
    // for(let i = 0; i < S.length; i++) {
    //   if(S[i] === '#') {
    //     stackS.pop()
    //   } else {
    //     stackS.push(S[i])
    //   }
    // }

    // for(let i = 0; i < T.length; i++) {
    //   if(T[i] === '#') {
    //     stackT.pop()
    //   } else {
    //     stackT.push(T[i])
    //   }
    // }

    // if(stackS.length !== stackT.length) {
    //   return false
    // } else {
    //   while(stackT.length) {
    //     if(stackT.pop() !== stackS.pop()) {
    //       return false
    //     }
    //   }
    //   return true
    // }
};