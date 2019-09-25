/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  if (words.length === 1) {
    return true;
  }
  let s1;
  let s2;
  let result = true;
  for (let i = 0; i < words.length - 1; i++) {
    result = compare(words[i], words[i + 1], order);
    if (!result) {
      return false;
    }
  }
  return true;
};

function compare(s1, s2, order) {
  let len1 = s1.length;
  let len2 = s2.length;
  if(len2 < len1) {
    return compareString(s1, s2, order);
  } else {
    return !compareString(s2, s1, order);
  }
}

function compareString(s1, s2, order) {
  for (let i = 0; i < s2.length; i++) {
    if (order.indexOf(s1[i]) === order.indexOf(s2[i])) {
      continue;
    }
    if (order.indexOf(s1[i]) > order.indexOf(s2[i])) {
      return false;
    } else {
      return true;
    }
  }
  return false;
}

isAlienSorted(["hello","leetcode"],
"hlabcdefgijkmnopqrstuvwxyz")