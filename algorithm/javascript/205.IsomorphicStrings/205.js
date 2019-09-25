/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if(obj[s[i]]) {
      if(obj[s[i]]!== t[i]) {
        return false;
      }
    } else {
      for(key in obj) {
        if(obj[key] === t[i]) {
          return false;
        }
      }
      obj[s[i]] = t[i];
    }
  }
  return true;
};

isIsomorphic("ab", "aa");