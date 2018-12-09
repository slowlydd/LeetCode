/**
 * @param {number[]} A
 * @return {boolean}
 */
var canReorderDoubled = function (A) {
  for(let i = 0; i < A.length; i++) {
    if(A[i] < 0) {
      A[i] = Math.abs(A[i]);
    }
  }
  A = A.sort(function (a, b) {
    return a - b;
  });
  let sum = 0;
  let start = 0;
  for (let i = 0; sum < A.length / 2; i++) {
    if(A[i] === false) {
      continue;
    }
    let index = A.indexOf(2 * A[i], i + 1);
    if(~index) {
      A[index] = false;
      sum++;
    } else {
      return false;
    }
  }
  return true;
}

canReorderDoubled([-62,86,96,-18,43,-24,-76,13,-31,-26,-88,-13,96,-44,9,-20,-42,100,-44,-24,-36,28,-32,58,-72,20,48,-36,-45,14,24,-64,-90,-44,-16,86,-33,48,26,29,-84,10,46,50,-66,-8,-38,92,-19,43,48,-38,-22,18,-32,-48,-64,-10,-22,-48]);