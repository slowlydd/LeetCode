/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let station = -1;
  let sum = 0;
  for(let i = 0; i < gas.length; i++) {
    sum = sum + gas[i] - cost[i];
  }

  if(sum < 0) {
    return - 1;
  } else {
    sum = 0;
    station = 0;
    start = station;
    length = gas.length;
    while(1) {
      sum = sum + gas[start] - cost[start++];
      if(sum < 0) {
        sum = 0;
        station++;
        start = station;
      } else {
        if(start === length) {
          return station;
        }
      }
    }
  }
};
