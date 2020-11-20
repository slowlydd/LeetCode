/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []
  // 改进点 一
  let mapper = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  for(let i = 0; i < s.length; i++) {
    if(~["(", "[", "{"].indexOf(s[i])) { // 改进点二
      stack.push(s[i])
    } else {
      let top = stack.pop()
      if(s[i] !== mapper[top]) { // 改进点三
        return false
      }
    }
  }
  if(stack.length) { // 改进点四
    return false
  } 
  return true
};
// @lc code=end

