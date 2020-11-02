/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const map = new Map()
  for(let i = 0; i < arr.length; i++) {
    if(map.has(arr[i])) {
      let m = map.get(arr[i])
      map.set(arr[i], m + 1)
    } else {
      map.set(arr[i], 1)
    }
  }
  const set = new Set()
  for(let m of map.values()) {
    set.add(m)
  }
  if(set.size === map.size) {
    return true
  } else {
    return false
  }
};