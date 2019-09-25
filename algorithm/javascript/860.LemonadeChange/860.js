/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let sum = {
    5: 0,
    10: 0
  };
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      sum[5] = sum[5] + 1;
    }

    if (bills[i] === 10) {
      if (sum[5]) {
        sum[5] = sum[5] - 1;
        sum[10] = sum[10] + 1;
      } else {
        return false;
      }
    }

    if (bills[i] === 20) {
      if (sum[10] && sum[5]) {
        sum[10] = sum[10] - 1;
        sum[5] = sum[5] - 1;
        continue;
      } else if (sum[5] >= 3) {
        sum[5] = sum[5] - 3;
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
};

lemonadeChange([5,5,5,10,5,5,10,20,20,20]);