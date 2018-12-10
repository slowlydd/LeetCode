/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
// 未完成
var kthGrammar = function(N, K) {
  let res = getString(N);
  console.log(res[K - 1]);
};

function getString(N) {
  if(N === 0) {
    return "0"
  } else {
    let s = getString(N - 1);
    let string = "";
    for(let i = 0; i < s.length; i++) {
      if(s[i] === "0") {
        string = string + "01";
      } else {
        string = string + "10";
      }
    } 
    return string;
  }
}

kthGrammar(10, 1);