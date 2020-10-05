/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function(n, requests) {
  let len = requests.length, test = [], res = 0
  function is_fit(test) {
    let fit = []
    for(let i = 0; i < n; i++) fit[i] = 0
    for(let i = 0, l = test.length; i < l; i++) {
      fit[test[i][0]]--
      fit[test[i][1]]++
    }
    for(let i = 0, l = fit.length; i < l; i++) {
      if(fit[i] !== 0) {
        return false
      }
    }
    return true
  }
  function dfs(test, requests, i) {
    if(i < len) {
      test.push(requests[i])
      if(is_fit(test)) {
        res = Math.max(res, test.length)
      }
      dfs(test, requests, i + 1)
    }
  }
  dfs(test, requests, 0)
  return res
};

