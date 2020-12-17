/**
 * @param {number[]} height
 * @param {number[]} weight
 * @return {number}
 */
var bestSeqAtIndex = function(height, weight) {
    let person = []
    for(let i = 0; i < height.length; i++) {
        person.push({
            height: height[i],
            weight: weight[i]
        })
    }
    person.sort((a, b) => {
        if(a.height < b.height) {
            return -1
        } else if (a.height === b.height) {
            if(a.weight <= b.weight) {
                return -1
            } else {
                return 1
            }
        } else {
            return 1
        }
    })
    let res = 0, curHeight = 0, curWeight = 0
    for(let i = 0)
    return res
};

bestSeqAtIndex(
    [65,70,56,75,60,68],
    [100,150,90,190,95,110])