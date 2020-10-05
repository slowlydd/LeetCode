/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function (customers, boardingCost, runningCost) {
  let maxli = Number.MIN_SAFE_INTEGER;
  let lun = 0;
  let people = 0;
  let minLun = -1
  let sumli = 0
  for (let i = 0, l = customers.length; i < l; i++) {
    people += customers[i];
    lun++
    let cPeople = Math.min(4, people)
    people -= cPeople
    sumli += lun * (cPeople * boardingCost - runningCost)
    if (sumli > maxli) {
      maxli = sumli;
      minLun = lun
    }
  }
  while(people > 0) {
    lun++
    let cPeople = Math.min(4, people)
    people -= cPeople
    sumli += lun * (cPeople * boardingCost - runningCost)
    if(sumli > maxli) {
      maxli = sumli
      minLun = lun
    }
  }

  if(maxli >= 0) {
    return minLun
  } 
  return -1
};


