/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let array1;
  let array2;
  if(a.length >= b.length) {
    array1 = a.split("");
    array2 = b.split("");
  } else {
    array1 = b.split("");
    array2 = a.split("");
  }

  let j = array1.length - 1;
  for(let i = array2.length - 1; i >= 0; i--) {
    array1[j] = Number(array1[j]) + Number(array2[i]);
    j--;
  }
  let temp = 0;
  for (let i = array1.length - 1; i >= 0; i--) {
    array1[i] = Number(array1[i]) + temp;
    temp = parseInt(array1[i] / 2);
    array1[i] = array1[i] % 2;
  }
  if(temp > 0) {
    return temp.toString(2) + array1.join("");
  } else {
    return array1.join("");
  }
};

addBinary("1010","1011");