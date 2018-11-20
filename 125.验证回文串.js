/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  let res;
  s = s.toLowerCase();
  while (left < right) {
    if (!isWord(s[left])) {
      left++;
      continue;
    }

    if (!isWord(s[right])) {
      right--;
      continue;
    }
    let abs = Math.abs(s.charCodeAt(left) - s.charCodeAt(right));
    if (abs === 0) {
      left++;
      right--;
      res = true;
      continue;
    } else {
      res = false;
      break;
    }
  }
  if(res === undefined) {
    return true;
  } else {  
    return res;
  }
};

function isWord(word) {
  if ((word >= 'a' && word <= 'z') || (word >= 'A' && word <= 'Z') || (word  >= '0' && word <= '9')) {
    return true;
  } else {
    return false;
  }
}

isPalindrome("0")