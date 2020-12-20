/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    if(salary.length <= 2) return 0
    let sum = 0
    let max = Number.MIN_SAFE_INTEGER
    let min = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < salary.length; i++) {
        if(salary[i] > max) {max = salary[i]}
        if(salary[i] < min) {min = salary[i]}
        sum += salary[i]
    }
    return (sum - max - min) / (salary.length - 2)
};