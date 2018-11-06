/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) {
    return "1";
  }
  let s = countAndSay(n - 1);
  if (s.length == 1) {
    return "1" + String(s[0]);
  } else {
    let num = 1;
    let str = [ num, s[0]];
    for (let i = 1; i < s.length; i++) {
      if(s[i - 1] == s[i]) {
        num++;
        str[str.length - 2] = num;
      } else {
        num = 1;
        str[str.length] = num;
        str[str.length] = s[i];
      }
    }
    return str.join("");
  }
};

countAndSay(7);