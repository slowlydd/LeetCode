/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  let res = 0;
  let end = 0;
  for(let i = 0; i < timeSeries.length; i++) {
    if(timeSeries[i] >= end) {
      res = res + duration;
      end = timeSeries[i] + duration;
    } else {
      let temp = timeSeries[i] + duration - end;
      if(temp > 0) {
        res = res + temp;
        end = timeSeries[i] + duration;
      }
    }
  }
  return res;
};

// var findPoisonedDuration = function(timeSeries, duration) {
//   let res = 0;
//   let end = 0;
//   for(let i = 0; i < timeSeries.length; i++) {
//     res = res + duration;
//     if(timeSeries[i] < end) {
//       res = res - (end - timeSeries[i]);
//     }
//     end = timeSeries[i] + duration;
//   }
//   return res;
// };

findPoisonedDuration([1, 2], 2);