/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  let obj = {};
  for (let i = 0; i < candies.length; i++) {
    if (!obj[candies[i]]) {
      obj[candies[i]] = 1;
    } else {
      obj[candies[i]]++;
    }
  }
  return Math.min(Object.keys(obj).length, candies.length / 2);
};

distributeCandies([1, 1, 2, 2, 3, 3]);