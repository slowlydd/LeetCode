/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    if(n === 1) {
      return 1;
    }

    if(n === 2) {
      if(isBadVersion(1)) {
        return 1;
      } else {
        return 2;
      }
    }

    let left = 1;
    let right = n;
    let mid;
    while(right - left > 1) {
      mid = parseInt((right - left) / 2 + left);
      if(isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid;
      }
    }
    if(isBadVersion(left)) {
      return left;
    } else {
      return right;
    }
  };
};