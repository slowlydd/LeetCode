/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // 当needle为空字符串的时候返回0
  if (!needle.length) {
    return 0;
  }

  // 如果needle的长度大于haystack的长度时，返回-1;
  if(haystack.length < needle.length) {
    return -1;
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let flag = true;
    for(let j = 0; j < needle.length; j++) {
      if(haystack[i+j] != needle[j]) {
        flag = false;
        break;
      }
    }
    if(flag) {
      return i;
    }
  }
  return -1;
};

strStr("a","a");