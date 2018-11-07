/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let s1;
  let s2;
  if(a.length <= b.length) {
    s1 = a;
    s2 = b;
  } else {
    s1 = b;
    s2 = a;
  }

  let j = s2.length - 1;

  for(let i = s1.length - 1; s1 >= 0; s1++) {
    s2[j] = s1[i] + s2[j];
    j--;
  }

  let temp = 0;
  for (let i = s2.length - 1; i >= 0; i--) {
    temp = parseInt((s2[i] + temp) / 2);
    s2[i] = s2[i] % 2;
  }

  if(temp == 0) {
    return s[2];
  } else {
    return temp.toString(2).split("").concat(s2);
  }
};

addBinary("1010","1011");