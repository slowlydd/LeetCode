/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if(s.length === 1) {
    return 1;
  }
  let start = 0;
  let flag = 1;
  let length = 0;
  for(let i = 1; i < s.length; i++) {
    let array = s.slice(start, i);
    let index = array.indexOf(s[i]);
    if(~index) {
      if(flag) {
        length = index + 1;
        flag = 0;
      } else {
        length = (i - start + 1) > length ? (i - start + 1) : length;
      }
      start = i + index + 1;
    }
  }
  return length > (s.length - start) ? length : (s.length - start);
};

lengthOfLongestSubstring("pwwkew");